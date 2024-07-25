nums = [-2,1,-3,4,-1,2,1,-5,4];
modifiedArr = [];
maximumValue = 0;

for(let i = 0;i<nums.length;i++){
    subArray = []
    sum = 0;
    for(let j = i; j<nums.length;j++){
        sum += nums[j];
        if(sum>maximumValue){
            maximumValue = sum;
        }
    }
}

console.log(maximumValue);