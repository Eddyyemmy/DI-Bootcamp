const express = require('express')
console.log(express);

const app = express();

app.listen(3000, ()=>{
    console.log('running on port 3000');
})

app.get('/login',(request,response)=>{
    response.send('Hello, welcome to my first NodeJS server');
    // response.send()
})