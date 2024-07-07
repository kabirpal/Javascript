function printEachSec(){
    for(let i = 0;i<= 5;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}

// printEachSec();


function x() {
    setTimeout(function k(){
        for(let i=0; i<5; i++){
            setTimeout(function y() {
                console.log(i);
            }, i*1000);
        }
    },1000);
}

// x();

function y(){
    for(var i=1; i<=5; i++){
        function close(k){

            setTimeout(function l(){
                console.log('Hello world',k)
            },1000*k);
        }
    close(i);
    }
}

y();