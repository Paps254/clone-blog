import path from "path"
import express  from 'express';
import bodyParser from "body-parser";
import * as PostController from './controller/post_controller'


var app= express();
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(urlencodedParser);
app.use(express.json());
app.set('view engine','ejs');


app.get('/', PostController.fetchPosts);
app.get('/post', (req,res)=>{
    res.render("post");
})

app.post("/post-data", PostController.createPosts)

app.listen(4000)

 