var msql = require("msql");
var connection = msql.createConnection(
   {
    host : "127.0.0.1",
    user :"root",
    password : "",
    database : "clone_blog"

   } 
);
connection.connect((err)=> {
    console.log("[mysql error]", err);
})