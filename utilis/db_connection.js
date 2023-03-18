var mysql = require("mysql");
var connection = mysql.createConnection(
   {
    host : "127.0.0.1",
    user :"root",
    password : "",
    database : "clone_blog"

   } 
);
connection.connect((err)=> {
    console.log("[mysql error]", err);
});
module.exports= connection;