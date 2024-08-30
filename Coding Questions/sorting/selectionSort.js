arr = [10,14,2,11,6];

// Selection Sort
for(let i = 0;i<arr.length; i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i]= temp
        }
    }
}

console.log(arr);