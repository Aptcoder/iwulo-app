const express = require('express');
const bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.json());
let environment = process.env.NODE_ENV || 'development'
const config = require('./config')[environment]







app.get('/',(req,res) => {
    res.send('Hello there');
})


app.use('*',(req,res) => {
    res.send('Hey! You seem lost. Head back home!')
})

app.listen(config.port,() => {
    console.log(`Node is listening at port ${config.port}`)
})