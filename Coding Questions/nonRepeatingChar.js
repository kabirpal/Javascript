userInput = 'swissaswiss';

arr = userInput.split('');
counter = 0;

for(let i=0; i<=userInput.length-1;i++){
    for(let j = 0;j<=userInput.length-1;j++){
        if(arr[i]===arr[j]){
            counter += 1;
        }
    }
    // console.log(arr[i],counter);
    if(counter ===1){
        console.log(arr[i]);
        break;
    }
    counter = 0
    
}