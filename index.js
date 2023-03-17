const path = require("path")
const express = require('express');


const app= express();


app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.render("home");
});
app.get('/post', (req,res)=>{
    res.render("post");
})

app.listen(4000)

 