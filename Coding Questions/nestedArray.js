arr = [1,2,4,[1,4,5,2],[1,2,4,5]];

const flattenArray = (nestedArray) => { 
    return nestedArray.flat(Infinity); 
}; 

console.log(flattenArray(arr));