```ts
/********
   * 
   * Patient | Get all training program of a specialist .. 
   * if patient already buy a training program also 
   * show that ... 
   * 
   * ******* */
  async getAllWithAggregation(
      filters: any, // Partial<INotification> // FixMe : fix type
      options: PaginateOptions,
      patientId: string,
    ) {
      // Business logic: Build the aggregation pipeline
    const pipeline = [
    // Match training programs created by the specialist
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(filters.createdBy),
        isDeleted: { $ne: true }
      }
    },
    
    // Left join with trainingprogrampurchases to check if patient has purchased
    {
      $lookup: {
        from: 'trainingprogrampurchases', // TrainingProgramPurchase collection
        let: { trainingProgramId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$trainingProgramId', '$$trainingProgramId'] },
                  { $eq: ['$patientId', new mongoose.Types.ObjectId(patientId)] },
                  { $ne: ['$isDeleted', true] }
                ]
              }
            }
          }
        ],
        as: 'purchases'
      }
    },
    
    // Left join with attachments for main content
    {
      $lookup: {
        from: 'attachments',
        localField: 'attachments',
        foreignField: '_id',
        as: 'attachmentDetails'
      }
    },
    
    // Left join with trailer content attachments
    {
      $lookup: {
        from: 'attachments',
        localField: 'trailerContents',
        foreignField: '_id',
        as: 'trailerContentDetails'
      }
    },
    
    // Left join with specialist (creator) details
    // {
    //   $lookup: {
    //     from: 'users',
    //     localField: 'createdBy',
    //     foreignField: '_id',
    //     as: 'specialistDetails'
    //   }
    // },
    
    // Add computed fields
    {
      $addFields: {
        isPurchased: {
          $cond: {
            if: { $gt: [{ $size: '$purchases' }, 0] },
            then: true,
            else: false
          }
        },
        purchaseDetails: {
          $cond: {
            if: { $gt: [{ $size: '$purchases' }, 0] },
            then: { $arrayElemAt: ['$purchases', 0] },
            else: null
          }
        },
        // specialist: {
        //   $arrayElemAt: ['$specialistDetails', 0]
        // }
      }
    },
    
    // Project final output
    {
      $project: {
        _id: 1,
        programName: 1,
        // description: 1,
        durationInMonths: 1,
        totalSessionCount: 1,
        price: 1,
        // createdBy: 1, // may be we dont need this 
        isPurchased: 1,
        // Include purchase details if purchased
        'purchaseDetails._id': 1,
        'purchaseDetails.price': 1,
        'purchaseDetails.paymentStatus': 1,
        'purchaseDetails.paymentMethod': 1,
        'purchaseDetails.createdAt': 1,
        /////////// Specialist details
        // 'specialist._id': 1,
        // 'specialist.name': 1,
        // 'specialist.profileImage': 1,
        // 'specialist.avatar': 1,
        /***********
         * 
         * $ references fields from the current document
          $$ references variables defined in the aggregation expression 
          (like the as variable in $map)
         * 
         * **** */
        // Attachment details
        attachmentDetails: {
          $map: {
            input: '$attachmentDetails',
            as: 'attachment',
            in: {
              _id: '$$attachment._id',
              attachment: '$$attachment.attachment',
              attachmentType: '$$attachment.attachmentType'
            }
          }
        },
        // Trailer content details
        trailerContentDetails: {
          $map: {
            input: '$trailerContentDetails',
            as: 'trailer',
            in: {
              _id: '$$trailer._id',
              attachment: '$$trailer.attachment',
              attachmentType: '$$trailer.attachmentType'
            }
          }
        },
      }
    },
    
    // Sort by creation date (newest first)
    {
      $sort: {
        createdAt: -1
      }
    }
  ];

```
```ts

// ⚙️
  async getAllAvailableScheduleAndRecentBookedScheduleOfDoctor(filters:any, options: PaginateOptions, populateOptions:any, patientId:string) : Promise<any> {
    const pipeline = [
        // 1. Match schedules for the doctor
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(filters.createdBy), // 👈 your doctor ID
            }
        },

        // 2. Lookup recent bookings by this patient (max 3, sorted by latest first)
        {
            $lookup: {
            from: "doctorpatientschedulebookings", // 👈 your booking collection name
            let: { scheduleId: "$_id" },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ["$doctorScheduleId", "$$scheduleId"] },
                        patientId: new mongoose.Types.ObjectId(patientId) // 👈 your patient ID
                    }
                },
                {
                    $sort: { createdAt: -1 } // or use scheduleDate if no createdAt
                },
                {
                    $limit: 3 // Only get the latest booking for this schedule (if multiple exist)
                },
                {
                    $project: {
                        _id: 1,
                        status: 1,
                        scheduleDate: 1,
                        patientId: 1,
                        startTime: 1,
                        endTime: 1,
                        // Add any other fields you need from booking
                    }
                }
            ],
            as: "patientBookings"
            }
        },
        // 
        // {
        //     $unwind: "$patientBookings",
        // },

        {  // Fixed with proper syntax ✅ CRITICAL: Unwind to create 1 doc per booking
            $unwind: {
                path: "$patientBookings",
                preserveNullAndEmptyArrays: true
            }
        },


        // 3. Unwind + add fields (flatten the booking info into root)
        // {
        //     $addFields: {
        //     patientBooking: { $arrayElemAt: ["$patientBookings", 0] } // Get first (latest) booking
        //     }
        // },

        // 4. Project final shape — inject booking fields into schedule
        {
            $project: {
                _id: 1,
                scheduleName: 1,
                description: 1,
                createdBy: 1,
                scheduleDate: 1,
                startTime: 1,
                endTime: 1,
                scheduleStatus: 1,
                booked_by: 1,

                // ✅ Include meeting info
                // meetingLink: 1,
                // typeOfLink: 1,
                typeOfLink: {
                    $cond: {
                        if: {
                            $in: [
                                "$patientBookings.status",
                                ["scheduled", "completed"] // 👈 your allowed statuses
                            ]
                        },
                        then: "$typeOfLink",
                        else: null
                    }
                },
                meetingLink: {
                    $cond: {
                        if: {
                            $in: [
                                "$patientBookings.status",
                                ["scheduled", "completed"]
                            ]
                        },
                        then: "$meetingLink",
                        else: null
                    }
                },

                // ✅ Return full array of bookings
                patientBookings: 1, // ← This includes all bookings with _id, status, etc.
      
                // 👇 Booking fields — will be null for S2, S3 👇 Inject booking info if exists
                // patientBookingId: "$patientBookings._id",
                // patientBookingStatus: "$patientBookings.status",
                // patientBookingScheduleDate: "$patientBookings.scheduleDate",
                // patientBookingCreatedAt: "$patientBookings.createdAt",


                // 👇 Optional: include if you want to know if this schedule is booked by this patient
                // isBookedByPatient: { $ne: ["$patientBookings", null] } // true for S1, false for S2/S3
                // isBookedByPatient: { $gt: [{ $size: "$patientBookings" }, 0] },
                
               /** V2
                * latestBookingStatus: { $arrayElemAt: ["$patientBookings.status", 0] } // optional
                */
            }
        },

        // 5. Optional: Sort schedules (e.g., by date ascending)
        {
            $sort: { scheduleDate: 1, startTime: 1 }
        }
    ];

```