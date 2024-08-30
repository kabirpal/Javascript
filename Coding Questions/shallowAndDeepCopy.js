//Shallow Copy

let original = {a:1,b:{alpha:'First', omega:'Second'}, c:3};
let shallowCopy = Object.assign({},original);

console.log(shallowCopy);

shallowCopy.a=45;
shallowCopy.b.alpha = 'Third'

console.log(original.a)
console.log(shallowCopy.a);
console.log(shallowCopy.b);

//Deep Copy

let deepCopy = JSON.parse(JSON.stringify(original));
let deepCopy1 = original;

deepCopy1.a = 22;
console.log(original);
console.log(deepCopy1);


let a = 1;
let b = a;
b = 2;

console.log(a);
console.log(b);