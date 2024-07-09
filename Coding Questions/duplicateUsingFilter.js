arr = [1,2,3,2,1,4,5,6,3,6,8,6,6];

console.log(...new Set(arr));

duplicate = arr.filter((item,index)=>{
    return arr.indexOf(item) !== index;
})

console.log(...new Set(duplicate));