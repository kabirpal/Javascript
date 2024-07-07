arr = [1,2,3,4,5,6,7];
desiredNum = 8;
desiredNumArray = [];

for(let i = 0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===desiredNum){
            desiredNumArray.push([arr[i],arr[j]]);
        }
    }
}

console.log(desiredNumArray);