arr = [50,10, 21, 7, 9, 78, 36];

for(let i=1; i<arr.length;i++){
    for(let j=i;j>0;j--){
        if(arr[j-1] > arr[j]){
            temp = arr[j];
            arr[j] = arr[j-1]
            arr[j-1]= temp;
        }
    }
}

console.log(arr);