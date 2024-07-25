//This is an interview ques that was encountered by Debasish.

arr1 = [1,2,3,4];
arr2 = [2,2,3,9];
sameNumCounter = 0;
samePlaceCounter = 0;

for(let i = 0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if (arr1[i]===arr2[j]){
            sameNumCounter += 1;
            if(i===j){
                samePlaceCounter += 1;
            }
        }
    }
}

console.log('Same Num Counter',sameNumCounter);
console.log('Same Place Counter', samePlaceCounter);

