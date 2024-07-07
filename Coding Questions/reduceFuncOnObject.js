const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26},
    ];

const output2 = users.reduce(function(acc,cur){
    if(acc[cur.age]){
        acc[cur.age] = ++ acc[cur.age]
    }
    else{
        acc[cur.age] = 1
    }
    return acc
},0)

console.log(output2);