arr = [9,0,3,5,0,6,7,43,0];
// nonZeroArray = []
// zeroArray = []

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] !== 0){
//         nonZeroArray.push(arr[i]);
//     }else{
//         zeroArray.push(arr[i]);
//     }
// }
// console.log(nonZeroArray.concat(zeroArray));

let j = 0;

for(let i = 0;i<arr.length;i++){
    if(arr[i] !== 0){
        arr[j] = arr[i];
        j++;
    }
}

for (let i = j; i < arr.length; i++) {
    arr[i] = 0;
}

console.log(arr);