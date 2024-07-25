arr = [1,2,4,43,2,31,2,1,2,321,3,12,235,43,3,3,12,1];

let charCount = {};


for(let char of arr){
    charCount[char] = (charCount[char] || 0) + 1; 
}

console.log(charCount);