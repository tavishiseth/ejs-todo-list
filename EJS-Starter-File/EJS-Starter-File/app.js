//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

console.log(date);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items = ["Cook food", "Gym", "Read book"];

app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    // res.sendFile(__dirname + "/weekend.html");
  }
  else {
    day = "Weekday";
    // res.sendFile(__dirname + "/weekday.html");
  }
  res.render("list", {KindofDay: day, newListitem: items});
});

app.post("/", function(req, res) {
  items.push(req.body.newItem);
  res.redirect("/");
})
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
