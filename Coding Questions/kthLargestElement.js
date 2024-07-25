arr = [6,7,4,3,4,3,5];
k = 3
kthNum = arr[0];
function largestNum (arr){
    maxNum = arr[0];
    arr.forEach((num)=>{
        if(maxNum<num){
            maxNum = num;
        }
    });
    return maxNum;
}

for(let i = 0;i<k;i++){
    num = largestNum(arr);
    // console.log(num);
    index = arr.indexOf(num);
    l = arr.splice(index,1);
    // console.log('l',l);
    kthNum = num
}

console.log(kthNum);
