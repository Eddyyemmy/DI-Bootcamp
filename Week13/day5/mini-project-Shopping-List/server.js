const exp = require('express');
const ps = require('body-parser');
const cors = require('cors');
const app = exp();


app.use(ps.urlencoded({extended:false}));
app.use(ps.json());
app.use(cors());

app.use('/', exp.static(__dirname+'/public'));

let items = [];

app.get('/items',(req,res)=>{
  res.send(items);
})

app.post('/items',(req,res)=>{
  const body = req.body
  const item = body.item;
  const amount = body.amount;
  const toObeject = {item, amount:Number(amount)};
  items.push(toObeject);
  res.send(toObeject);
})

app.listen(3000);
