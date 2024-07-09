userInput = 'maddam';
let arr = userInput.split('');
n = arr.length >> 1;
let palindrome = true;

// if(arr.length%2===0){
//     n = arr.length/2
// }else{
//     n = (arr.length/2)-0.5
// }
for(let i = 0;i<=n;i++){
    p = (arr.length - i - 1)
    if(arr[i]!==arr[p]){
        palindrome = false
        break;
    }
}
console.log(palindrome);
