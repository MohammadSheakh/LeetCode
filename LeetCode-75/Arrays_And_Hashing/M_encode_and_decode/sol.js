https://neetcode.io/problems/string-encode-and-decode?list=neetcode150

function encode(strs) {
    let res = ''; // result will be a single string
    for (let str of strs) {
        res += str.length + '#' + str; // append the length and the string
    }
    return res; // return the encoded string
}

function decode(string){
    let res = []; // result will be list of string 

    let i = 0; // index to track position in string
    while( i < length(string)){
        let j = i; // start of the current number
        while(j < length(string) && string[j] !== '#') {
            j++; // find the end of the current number
        }
        let num = parseInt(string.slice(i, j)); // extract the number
        i = j + 1; // move to the next part of the string
        let str = string.slice(i, i + num); // extract the string of length num
        res.push(str); // add the string to the result
        i += num; // move to the next part of the string // next word
    }
}

encode(['hello', 'world']); // "5#hello5#world"
decode("5#hello5#world"); // ['hello', 'world']