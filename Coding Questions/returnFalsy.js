//(false, null, 0, “”, undefined, and NaN)

arr = [1,3,false,8,null,0,"",undefined,NaN,8];
function removeFalsyValues(arr) { 

    return arr.filter(Boolean); 
  
}

console.log(removeFalsyValues(arr));

