const express = require('express')
const app = express();


// app.use('/', express.static(__dirname + 'public'))
app.use(express.static('public'));
app.get('/aboutMe/:hobby', (req, res)=>{
        if (isNaN(req.params.hobby)){
            res.send(`seme here ${req.params.hobby}!`)

        } else {
          res.status(404).send('Not Found!')
        }
})

app.get('/pic', (req, res)=>{

})

app.listen(3000)