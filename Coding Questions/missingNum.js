arr = [1,2,3,7,8,9,11,15];
missingNum = [];
counter = 0;
for(let i = 1;i<15;i++){
    if(i==arr[counter]){
        counter += 1;
    }else{
        missingNum.push(i);
    }
}

console.log(missingNum);