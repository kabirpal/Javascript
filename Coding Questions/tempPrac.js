// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Hello World');
//     },2000);
// });


// myPromise.then((value)=>console.log(value)).catch((error)=>console.log(error));



//Creating a server

// const http = require('http');
// const hostname = 'localhost'

// const port = 3000;


// const server = http.createServer((req, resp)=>{
//     resp.end("Hello World")
// })


// server.listen(port,hostname, ()=>{
//     console.log('Server is running')
// })


const express = require('express')
const app = express();

app.get('/',(req,resp)=>{
    resp.send('Hello World')
})


app.listen(3000,()=>{
    console.log('server is runnning')
})