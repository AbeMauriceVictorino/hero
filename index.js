// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

// to display - Open in New Tab, add /ladder to URL

// this code is only invoked on the path /ladder
app.get("/ladder", function(req, res){
  res.sendFile(__dirname + "/ladder.html");
});

// invoked on the submit button
app.post("/ladder", function(req, res){

//converts the string input to a float number
  var depth = parseInt(req.body.depth);
  var height = parseInt(req.body.height);

// does the computation of the input variables, as numbers
  var length = Math.sqrt(Math.pow (depth,2) + Math.pow (height,2));

res.send("The length of the ladder is " + length.toFixed(0));

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")});