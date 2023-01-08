const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    console.log(req.body);
})


app.get('/:id', (req,res) =>{
   console.log(req.params)
   res.send(req.params.body)
})

app.listen(3001)