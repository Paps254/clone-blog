const path = require("path")
const express = require('express');
const bodyParser = require("body-parser");
const connection = require ("./utilis/db_connection");


const app= express();

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.render("home");
});
app.get('/post', (req,res)=>{
    res.render("post");
})

app.post("/post-data", (req,res)=> {
    let postTitle = req.body.postTitle;
    let postBody = req.body.postBody;

    connection.connect ((err)=>{
        connection.query(`insert into post(title,body) values("${postTitle}","${postBody}")`)
    });
    res.redirect("/")
})

app.listen(4000)

 