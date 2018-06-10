var express = require("express");
var app = express(),
    bodyParser = require("body-parser"),
    firebase = require("firebase");
// var config = require("./config/config.js");

var config = {
  apiKey: "AIzaSyBQek1nw9qe3D98qaMJ3NktQVAkX3Zkcu0",
  authDomain: "ultrec-31a70.firebaseapp.com",
  databaseURL: "https://ultrec-31a70.firebaseio.com",
  projectId: "ultrec-31a70",
  storageBucket: "",
  messagingSenderId: "757744798175"
};

var port = 8000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const fire = firebase.initializeApp(config);

app.get("/", (req, res) => {

  res.render("home");
  fire.database().ref('/test/').set({
    operational: true
  })
});

app.listen(port, function(req, res) {
  console.log("Ultrec has started on port " + port);
});