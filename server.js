//dependencies for express and path

var express = require("express");
var path = require("path");                       

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var diner = [
    {
      id: "1",
      name: "Sung",
      email: "slee@enteract.com",
      phone: "312-404-7072",
     
    },
    {
      id: "2",
      name: "Bob",
      email: "bob@enteract.com",
      phone: "312-777-7772",
    },
    {
      id: "3",
      name: "Joe",
      email: "joe@enteract.com",
      phone: "312-555-6066",
    }
  ];
  
var table = [
    {
      id: "1",
      name: "Corner Booth",
      open: true
    },
    {
        id: "2",
        name: "Booth",
        open: true
    },
    {
        id: "3",
        name: "High-Top",
        open: true
    },
    {
        id: "4",
        name: "Patio",
        open: true
    },
    {
        id: "5",
        name: "Bar Counter",
        open: true
    },
  ];
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Displays all characters
  app.get("/api/diner", function(req, res) {
    return res.json(diner);
  });
  
  // Displays a single character, or returns false
  app.get("/api/diner/:diner", function(req, res) {
    var chosen = req.params.diner;
  
    console.log(chosen);
  
    for (var i = 0; i < diner.length; i++) {
      if (chosen === diner[i].routeName) {
        return res.json(diner[i]);
      }
    }
  
    return res.json(false);
  });


  // Create New Characters - takes in JSON input
app.post("/api/diner", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newDiner = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newDiner.routeName = newDiner.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newDiner);
  
    characters.push(newDiner);
  
    res.json(newDiner);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });