arr = [1,1,2,4,6,6,7,5,4];
duplicateArr = [];
mapObj = new Map;

arr.forEach((num)=>{
    if (mapObj.has(num)){
        mapObj.set(num, mapObj.get(num)+1);
    }else{
        mapObj.set(num,1);
    }
})

console.log(mapObj);

mapObj.forEach((count,num)=>{
    console.log(count);
    if(count>1){
        duplicateArr.push(num);
    }
})

console.log(duplicateArr);