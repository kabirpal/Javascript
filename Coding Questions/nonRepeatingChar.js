userInput = 'swiss';

arr = userInput.split('');
counter = 0;
for(let i = 0; i<arr.length;i++){
    for(let j = i+1; j<arr.length;j++){
        if(arr[i]===arr[j]){
            counter += 1;
        }
        if(counter>1){
            console.log(arr[i])
            break;
        }
    }
}