// Link : https://www.youtube.com/watch?v=C2apEw9pgtw&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=30
/**
  * @NEW_TOPIC <!--  -->
  |
  | ->  
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. All the elements in the array must be sorted in ascending order.
  | then only you can apply binary search.

    low, high, mid
    mid = (low + high) / 2

    if low > high {
     // element not found
    }

   
 */
  
  /* @Solution <!--  Sudo Code  -->
      int binarySearch(int arr[], int n, int x) {
          int low = 0;
          int high = n - 1;
          while (low <= high) {
              int mid = (low + high) / 2;
              if (arr[mid] == x) {
                  return mid; // Element found
              } else if (arr[mid] < x) {
                  low = mid + 1; // Search in the right half
              } else {
                  high = mid - 1; // Search in the left half
              }
          }
          return -1; // Element not found
      }

      Time Complexity: O(log n)
      Space Complexity: O(1)

   * ********* */

/**
 * @Next <!--  Binary Search Recursive Method -->
 |
 | ->> 
 Algo RBinSearch(l,h, key){
    // handle base case
    if(l == h){
        if(A[l] == key){
            return l;
        }else{
            return 0;
        }
    }else{
        mid = (l + h) / 2;
        if(A[mid] == key){
            return mid;
        }else if(A[mid] < key){
            return RBinSearch(mid + 1, h, key);
        }else{
            return RBinSearch(l, mid - 1, key);
        }
    }
 }

 // now we have the divide and conquer algorithm that is recursive algo for binary search
 // let us prepare a recurrent solution for this one .. 

 

*/
  