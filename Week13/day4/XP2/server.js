const express = require('express');
const app = express();


// const bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

// app.get('/', (req,res)=>{
//     console.log(req.body);
// })

app.get('/fetchuser', (req,res) =>{
  const user = {
      firstname: 'John',
      lastname: 'Doe'
  }
  res.json(user);
})

app.get('/:id', (req,res) =>{
   console.log(req.params)
   res.send(req.params.body)
})

app.listen(3001)
