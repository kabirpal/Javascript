arr = [1,2,3,7,8,9,10];
missingNum = [];

for(let i = 1;i<=10;i++){
    let found = false;
    for(let j = 0;j<=arr.length;j++){
        if(arr[j]==i){
            found = true;
            break;
        }
    }

    if(!found){
        missingNum.push(i);
    }
}

console.log('missing',missingNum)
// console.log('hello')