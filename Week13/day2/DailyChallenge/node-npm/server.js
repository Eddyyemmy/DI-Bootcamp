const express = require('express')
const {date} = require('./node_modules/main.js');

const app = express();

app.listen(3000, ()=>{
    // console.log("I'm listening...");
})

app.get('/login',(request,response)=>{
    const msg = console.log("I'm listening..x.")
    response.setHeader("Content-Type", "text/html");
    response.end(`<p>My Module is ${msg}</p> <p>The date and time are currently: ${date}</p> <h1>Hi there at the frontend</h1>`)
})