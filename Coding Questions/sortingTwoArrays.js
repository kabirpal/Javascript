arr1 = [1,3,5,7,9];
arr2 = [1,2,4,6,7,8];
mergedArr = [];
counter = 0;
while (counter<arr1.length){
    for(let i = 0;i<arr2.length;i++){
        num1 = arr1[i];
        num2 = arr2[i];
        num3 = mergedArr[i];

        if(num1<num2 && num1<num3){
            mergedArr.push(num1);
            if(num2<num3){
                mergedArr.push(num2);
                mergedArr.push(num3);
            }else{
                mergedArr.push(num3);
                mergedArr.push(num2);
            }
        } else if(num2<num1 && num2<num3){
            mergedArr.push(num2);
            if(num1<num3){
                mergedArr.push(num1);
                mergedArr.push(num3);
            }else{
                mergedArr.push(num3);
                mergedArr.push(num1);
            }
        }
    }
    counter += 1;
}