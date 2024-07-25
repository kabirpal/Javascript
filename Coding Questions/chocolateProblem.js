// arr = [7, 3, 2, 4, 9, 12, 56] 
// m = 3 
// output = 2


arr = [3, 4, 1, 9, 56, 7, 9, 12];
m = 5
// output = 6

// arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
// m = 7

arr = arr.sort((a,b)=>a-b);
console.log(arr);
minimumDiff = arr[arr.length - 1];
for(let i = 0;i<=arr.length-m;i++){
    difference = arr[i+m-1] - arr[i];
    if(difference<minimumDiff){
        minimumDiff = difference;
    }
}
console.log('Minimum =',minimumDiff);
