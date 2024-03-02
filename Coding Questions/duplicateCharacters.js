//get all the chars that are repeating themselves in a given string

// find duplicate character in the given string

var str = "Selenniumm webbdrriverr"

function duplicateCharacters(input){
    const arr = input.split('').sort();
    const duplicateChar = [];
    for(let i = 0; i<=arr.length - 1; i++){
        if (arr[i] == arr[i+1] && arr[i] !== arr[i-1]){
            duplicateChar.push(arr[i])
            i += 1;
        }
    }
    console.log(duplicateChar)
}

duplicateCharacters(stringInput);




function duplicateCharactersByGPT(input) {
    const charCount = {};
    const duplicateChars = [];
    for (const char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) {
            duplicateChars.push(char);
        }
    }
    console.log(charCount);
    console.log(duplicateChars);
}

duplicateCharactersByGPT(stringInput)