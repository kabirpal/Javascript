function callbackExample(arr, callbackHell){
    arr.push(100);

    callbackHell();
}

var arr = [1,2,3,4]
callbackExample(arr, function(){
    console.log('Array has been modified', arr);
})