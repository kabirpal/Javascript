arr = [1, 2, 3, 4, 5, 6, 7]
k = 4;
removedEle = arr.splice(0,k);

for(let i = 0;i<=removedEle.length-1;i++){
    arr.push(removedEle[i]);

}
console.log(arr);