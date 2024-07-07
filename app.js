// function x() {
//     setTimeout(function y(){
//         for(var i = 0; i<5; i++){
//             console.log(i);
//         }
//     },3000)
// }


function x() {
    setTimeout(function k(){
        for(let i=0; i<5; i++){
            setTimeout(function y() {
                console.log(i);
            }, i*1000);
        }
    },1000);
}

dp();


function dp(){
    for(let i = 1; i<=5; i++){
    setTimeout(()=>{
            console.log(i)
        }
        ,i*1000);
    }
}


//~~~~~~~~~~~~~~~~~~~~~~REDUCE 

// const arr = [2,5,2,100,5,8,6,9]

// const output = arr.reduce(function (acc, cur){
//     if(cur > acc){
//         acc = cur
//     }
//     return acc
// },0)

// console.log(output);

// const users = [
//     { firstName: "akshay", lastName: "saini", age: 26},
//     { firstName: "donald", lastName: "trump", age: 75},
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "deepika", lastName: "padukone", age: 26},
//     ];

// const output2 = users.reduce(function (acc, cur){
//     if(acc[cur.age]) {
//         acc[cur.age] = ++acc[cur.age]
//     }else{
//         acc[cur.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(output2);


// const output3 = users.reduce(function(acc, cur){
//     if(cur.age < 30){
//         acc.push(cur.firstName)
//     }
//     return acc;
// },[]);

// console.log(output3);



    function insertValue() {
        let array = [12,43,82,65,76];
        let newElement = 100;
        let position = 4;

        for(let i = array.length -1; i>=0; i--){
            if(i >= position){
                array[i+1] = array[i];
                
                if(i==position){
                    array[i] = newElement;
                }
            }
        }

        console.log(array);
    }

// insertValue();


    function deleteValue() {
        let array = [120,430,820,900,650,760];
        let delElement = 650;

        for(let i = 0; i<= array.length; i++){
            if(array[i]===delElement){
                for(let j = i; j< array.length-1; j++)
                    array[j]=array[j+1];
            }
        }
        // array.pop();
        array.length = array.length -1;
        console.log(array);
    }

    function deleteValueByIndex() {
        let array = [120,430,820,900,650,760];
        let delElement = 2;

        for(let i = delElement; i< array.length; i++){
            array[i] = array[i+1]
        }

        array.length = array.length -1
        console.log(array);
    }
    
    // deleteValue();
    // deleteValueByIndex();




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Searching an item from a given list~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        function SearchingByValue() {
        let array = [120,430,820,900,650,760];
        let searchEle = 650;

        for(let i = 0; i< array.length; i++)
            if(array[i] === searchEle){
                console.log([i]);
            }
    }

    //SearchingByValue();



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Merging two arrays~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function mergeArrays() {
        let array1 = [1,5,7,3,6];
        let array2 = [10,50,70,30,60];
        let array3 = [];

        for(let i = 0; i<= array1.length-1; i++){
            // array3.push(array1[i]);
            array3[i] = array1[i];
        }
        for(let i = 0; i<= array2.length-1; i++){
            // array3.push(array1[i]);
            array3[array1.length + i] = array2[i];
        }
        console.log(array3);
    }


    // mergeArrays();


    function mergeArraysUsingWhileLoop() {
        let array1 = [1,5,7,3,6];
        let array2 = [10,50,70,30,60];
        let array3 = [];
        let i = 0

        while(i <= array1.length){
            // array3.push(array1[i]);
            array3[i] = array1[i];
            i++;
        }
        for(let i = 0; i<= array2.length - 1; i++){
            // array3.push(array1[i]);
            array3[array1.length + i] = array2[i];
        }
        array3.sort((a,b)=>a-b);
        console.log(array3);
    }

    mergeArraysUsingWhileLoop();



    const newPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = true
            if(success){
                resolve("Successful");
            }else{
                reject("Failure");
            }
        }
        ,1000)
    });
    
    newPromise.then((result)=>{
        console.log(result);
    }).catch(()=>{
        console.log(result);
    })
    
    
    
    //clousers
    
    function outerFunction(outerValue) {
      // This inner function is a closure
      function innerFunction(innerValue) {
        // Accesses both outerValue and innerValue
        console.log(`Outer value: ${outerValue}, Inner value: ${innerValue}`);
      }
    
      // Returning the inner function, creating a closure
      return innerFunction;
    }
    
    // Creating a closure by calling outerFunction
    const closureInstance = outerFunction('Hello');
    
    // Invoking the closure with an inner value
    closureInstance('World');
    
    
    
    
    // Callback function
    
    // Function that takes a callback
    function performOperationAsync(input, callback) {
      console.log(`Performing operation with input: ${input}`);
    
      // Simulating an asynchronous operation (e.g., fetching data)
      setTimeout(() => {
        const result = input * 2;
        // Calling the callback with the result
        callback(result);
      }, 1000);
    }
    
    // Callback function to handle the result
    function handleResult(result) {
      console.log(`Result is: ${result}`);
    }
    
    // Using the function with the callback
    performOperationAsync(5, handleResult);
    
    console.log('This is synchronous code.'); // Executed before the callback


    function skip(){
        var inputString = 'I Love Javascript';
        console.log(inputString.toLowerCase().replaceAll());
    }
    skip();

    