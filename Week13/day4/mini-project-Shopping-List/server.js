const exp = require('express');
const cors = require('cors')
const fs = require('fs');

const app = exp();

app.use(cors())
app.use(exp.urlencoded({extended:false}));
app.use(exp.json());


app.use('/',exp.static(__dirname+'/public'));
  let items = [];
app.post("/items", (req,res)=>{
  const body = req.body;
  const {item, amount } = body;
  const getObject = { item, amount: Number(amount) };
  items.push(getObject)

  res.send(getObject);
})

app.get('/items', (req,res)=>{
  res.send(items);
})

app.listen(3000);
