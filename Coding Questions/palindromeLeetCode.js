input = 'A man, a plan, a canal: Panama';

function isPalindrome(s) {
    letters = s.toLowerCase().match(/[a-z0-9]/g);

    if(!letters){
        return true
    }
    
    for(let i=0;i<letters.length-1;i++){
        if(letters[i]!==letters[letters.length -1 -i]){
            return false
        }
    }
    return true
};

console.log(isPalindrome(input));

