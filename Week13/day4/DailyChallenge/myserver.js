const express = require('express')
const bodyParser = require('body-parser')
const app = express();



// app.use('/', express.static(__dirname + 'public'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:  true}))
app.get('/aboutMe/:hobby', (req, res)=>{
        if (isNaN(req.params.hobby)){
            res.send(`seme here ${req.params.hobby}!`)

        } else {
          res.status(404).send('Not Found!')
        }
})

app.get('/pic', (req, res)=>{

})

app.post('/formdata', (req, res) =>{
    console.log(req.body.msg);
    res.send(`${req.body.email} sent you a message ${req.body.msg}`)
})

app.listen(3000)