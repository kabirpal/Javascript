arr = [1,2,4,[1,4,5,2],[1,2,4,5]];
let sum = 0;
for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i].length>0){
        for(let k=0;k<arr[i].length;k++){
        // console.log(arr[i][k])
            sum += +arr[i][k];
        }
    }else{
        sum += +arr[i];
    }
}

console.log(sum);