// arr = [1,1,2,3,4,4,7,5,8,4,7,9];
// duplicateArr = [];
// for(let i = 0;i<arr.length;i++){
//     for(let j = i + 1; j<arr.length;j++ ){
//         if(arr[j]===arr[i] && ifExist(arr[j])){
//             duplicateArr.push(arr[j]);
//             break;
//         }
//     }
// }

// function ifExist(num){
//     for(let i = 0;i<=duplicateArr.length;i++){
//         if(duplicateArr[i]===num){
//             return false;
//         }
//     }
//     return true
// }

// console.log(duplicateArr);

// for(let i = 1;i<=10;){
    
//     let a = arr[i-1];
//     if(a!==i){
    //         missingNum.push(i)
    //     }
    // }
    

//Get all the numbers which are duplicate in this array
//loop through an array
arr = [1,1,2,3,4,4,7,5,5,8,4,7,9];
duplicateArr = [];

for(let i = 0;i<=arr.length;i++){
    for(let j = i+1; j<=arr.length;j++){
        if(arr[i]===arr[j]){
            value = ifExist(arr[i]);            
            if(value=== false){
                duplicateArr.push(arr[i]);
            }
        }
    }
}


function ifExist(num){
    for(let i = 0;i<=duplicateArr.length;i++){
        if(num===duplicateArr[i]){
            return true
        }
    }
    return false
}

console.log(duplicateArr);




