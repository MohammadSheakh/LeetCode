// Two Pointers
// String

var reverseWords = function (s) {
    console.log("=============================================");
    let sArr = s.split(" "); // split the string by space
    console.log("sArr", sArr);

    let result = "";

    for (let i = sArr.length - 1; i >= 0; i--) {
        if (sArr[i] !== "") {
            result += sArr[i] + " ";
        }
    }

    console.log("result", result.trim());
    return result.trim();
};

reverseWords("the sky is   blue"); // output : "blue is sky the"
