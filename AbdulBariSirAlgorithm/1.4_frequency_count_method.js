
https://www.youtube.com/watch?v=1U3Uwct45IY&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=5
  
  /* @Solution <!--  Sudo Code  -->
  Algoritm Sum(A,n) {
    s = 0;  ------------------- 1
    for i = 0 to n-1 do ------- n+1
        s = s + A[i]; --------- n
    return s; ----------------  1
  }    

  time function f(n) = 1 + (n+1) + n + 1 = 2n + 3

  time complexity = O(n)

  Space ---
  A - -n
    n - -1
    s -- 1
    i -- 1

    ------------
    S(n) = 1 + 1 + 1 + n = n + 3
    space complexity = O(n)  

   * ********* */


/**
    Algo Add(A, B, n){
        for(i =0; i < n; i++){ ------------ n + 1
            for(j =0 ; j < n; j++){ -------- n * (n + 1)
                c[i,j] = A[i,j] + B[i,j];---- n * n
            }
        }
    }

    =======================================
    f(n) = 2n^2 + 2n + 1

    time complexity = O(n^2)

    space complexity = 

    A --- n^2
    B --- n^2
    c --- n^2
    n --- 1
    i --- 1
    j --- 1
    -----------------------------
    S(n) = 3n^2 + 3
    space complexity = O(n^2)

 */