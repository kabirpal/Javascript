//with sorting;
arr = [6,7,4,3,4,3,5];
k = 3;
for(let i = 0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp = arr[i+1]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
    
}

console.log(arr[k-1])