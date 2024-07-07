// ~~~~~~~~~~~~~~~~~~~~~~REDUCE 

const arr = [2,5,2,100,5,8,6,9]

const output = arr.reduce(function (acc, cur){
    if(cur > acc){
        acc = cur
    }
    return acc
},0)

// console.log(output);


const sumOfArrays = arr.reduce((acc,cur)=>{
   return acc += cur
})

console.log(sumOfArrays);