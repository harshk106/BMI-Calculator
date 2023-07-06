const express = require("express");
const app = express();

// Add middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var total = w / (h * h);

  res.send("Your BMI is " + total);
});

app.listen(3000, function () {
  console.log("server running on port 3000.");
});
