// function skip(){
//     var inputString = 'I Love Javascript';
//     console.log(inputString.toLowerCase().replaceAll(" ","_"));
// }
// // skip();

// function stringManipulation() {
//     var myStr = 'I am learning javaScript';
//     console.log( "Includes", myStr.toUpperCase().includes('AM'));
//     console.log("Using CharAt", myStr.charAt(3));
//     console.log(myStr.charCodeAt());
//     console.log(myStr.concat(" Kabir"));
//     console.log(myStr.endsWith("k"));
//     console.log(myStr);
// }

// stringManipulation();


// find duplicate character in the given string

function duplicateChar(stringInput){
    const arr = []
    for(let i = 0; i<=stringInput.length; i++){
            const char = stringInput.charAt(i);
            if(arr.indexOf(char) !== 1){
                // continue
                arr.push(char);
            }
        }
    return arr
}

var stringInput = "Selenniumm webbdrriverr"
// console.log(duplicateChar(stringInput));



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