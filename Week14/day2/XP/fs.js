
const fs = require('fs')


fs.readFile('text.txt', 'utf8', (req,res)=>{
    console.log(res);
})


fs.writeFile('new2.txt', 'Bla Bla', (err)=>{
  console.log(err);
})


fs.appendFile('new.txt', 'Buy orange juice', 'utf8', (err)=>{
  console.log(err);
})


fs.unlink('new2.txt',(err)=>{
  console.log(err);
})
