// Q Write a function to find longest that takes input a string and return thr longest word in thr string, if there are mulitple longest words, return the first encounterd ?

// const str = `Hello My name Omkar Rudragouda Patil`;
// const FindLongestWord = (str) => {
//     if(!str) {
//         return false
//     }
//     let WordsCount = ""
//     const Words = str.split(" ");

//     for(item of Words ) {
//         if(WordsCount.length <= item.length) {
//             WordsCount = item
//         }
//     }
//     return WordsCount
// }

// console.log(FindLongestWord(str));


// Q Write a function in JavaScript to find the maximum number in an array of integers.

// const maximumNumber = (nums) => {
//     let maximumNum = 0;
//     for(num of nums) {
//         if(maximumNum <= num) {
//             maximumNum = num
//         }
//     }
//     return maximumNum
// }

// console.log(maximumNumber([75, 10,20,30,65]))


// Reverse a string

// const ReverseString = (str) => {
//     if(!str) {
//         return ""
//     }
//     return str.split("").reverse().join("")
// }

// console.log(ReverseString("name"))


// Longest Common Prefix

const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; 
    if (strs.length === 1) return strs[0]; 
    
    // Sort the array to bring similar strings closer
    strs.sort();
    
    // Take the first and last strings after sorting
    let first = strs[0];
    let last = strs[strs.length - 1];
    
    let i = 0;
    // Compare characters of the first and last strings
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }
    
    // Return the common prefix found
    return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   
  
























