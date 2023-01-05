const express = require('express')
const app = express();

app.listen(3000,()=>{
    console.log('server running..');
})

// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<p>${data}</p><h1>Yhemolee Ltd</h1> <p>This is the first paragraph.<p> <h2>Subheading</h2>`)
// })

app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user, null, 3));
})
