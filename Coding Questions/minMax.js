// arr = [22, 14, 8, 17, 35, 3]
// min= arr[0];
// max= arr[0];


// for(let i = 1;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
//     if(arr[i]>max){
//         max= arr[i];
//     }
// }

// console.log('Minimum :',min);
// console.log('Maximum: ',max);

arr = [22, 14, 8, 17, 35, 3];

arr.sort((a,b)=>a-b);
console.log(arr[0],arr[(arr.length - 1)])
