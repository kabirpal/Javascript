// function f(x){
//     x = "x-" + x;
//     return function (y){
//         y = "y-" + x;
//         return function (z){
//             z = "z-" + y;
//         }
//     }
// }

// let g = f("a")("b")("c");
// console.log(f("a")("b")("c"))

var inputString = 'I Love Javascript';

// console.log(inputString.toLowerCase().replaceAll(" ",'')); 

var arr = inputString.split(' ');
l = '';
for(let i=0; i<=arr.length-1; i++){
    // l += arr[i];
    l = l.concat(arr[i])
}

console.log(l.toLowerCase());
// console.log(convertToLowerCase(l));

// function convertToLowerCase(l){
//     const lowerArr = l.split('');
//     for(let i=0; i<lowerArr.length;i++){
//         let char = l[i];
//         let charCode = char.charCodeAt(0);

//         if(charCode>=65 && charCode<=90){
//             char = String.fromCharCode(charCode+32);
//         }
    
//         lowerArr += char;
//     }
//     return lowerArr;

// }