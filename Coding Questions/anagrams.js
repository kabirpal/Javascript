// function anagrams(word){
//     for(let i = 0; i<= word.length/2;i++){
//         for(let j = word.length/2;j>=0;j--){
//             if(word[i] !== word[j]){
//                 console.log('Not an anagram');
//                 break;
//             }
//         }
//     }
// }



function evaluateAnagrams(word1,word2){
    const word = word1.split('').sort().join('');
    const sortedWord = word2.split('').sort().join('');
    console.log(word);
    console.log(sortedWord);
    if(word === sortedWord){
        console.log('it is an anagram')
    }
    else{
        console.log('Not an anagram');
    }
}   
evaluateAnagrams('debit card', 'bad credit')