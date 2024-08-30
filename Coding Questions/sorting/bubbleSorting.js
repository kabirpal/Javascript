arr = [7,6,4,3];

counter = 0
//Bubble Sort
arrayLength = arr.length
while(arrayLength>0){
    for(let i = 0;i<arr.length-1; i++){
        if(arr[counter]> arr[counter+1]){
            temp = arr[counter];
            arr[counter] = arr[counter+1];
            arr[counter+1] = temp;
        }
        counter +=1;
    }
    arrayLength -= 1
    counter = 0
}

console.log(arr);