var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool=require('pg').Pool;


var config={
    user:'arabali',
    database:'db,cloud.hasura-app.io',
    
}

 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
   
 });
 

 
 app.get('/sa', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sa.html'));
   
 });
  app.get('/sa4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sa4.html'));
   
 });
 
 
  app.get('/sa3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sa3.html'));
   
 });

 
 
 app.get('/sa2', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'sa2.html'));
 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter=0;
 app.get('/counter', function (req, res) {
  counter=counter + 1;
  res.send(counter.toString())});
   



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
