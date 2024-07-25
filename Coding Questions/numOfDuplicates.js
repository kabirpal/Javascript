arr = [1,2,2,4,5,5,5];
// output = 3;

//solution 1


// arr1 = new Set(arr);
// console.log(arr.length - arr1.size);


//solution 2
objArr = new Map;
for(let i=0;i<arr.length;i++){
    insertDuplicate(arr[i]);
    // for(let j =i+1;j<arr.length;j++){
    //     if(arr[j]===arr[i]){
    //     }
    // }
}

function insertDuplicate(value){
    if (objArr.has(value)){
        objArr.set(value, objArr.get(value)+1); 
    } else{
        objArr.set(value,1)
    }
}

console.log(objArr)
