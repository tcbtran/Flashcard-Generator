// Loading inquirer node package
var inquirer = require('inquirer');

// Loading node fs node package to read and write to log.txt File
var fs = require('fs');

// BasicCard constructor function
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

BasicCard.prototype.getCard = function() {
  console.log("Front: " + this.front);
  console.log("Back: " + this.back);
};

inquirer.prompt([

  {
  name: "front",
  message: "Enter text for the Front of the card"
  },
  {
  name: "back",
  message: "Enter text for the Back of the card"
  }
]).then(function(answers) {

  var newCard = new BasicCard (
    answers.front,
    answers.back
  );

  newCard.getCard();

  function writeLog() {

    var basicTxt = "Front: " + BasicCard.front + "\nBack: " + BasicCard.back;
    fs.appendFile("log.txt", basicTxt, function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        return;
      }
    });

  }
writeLog();
});

  

module.exports = BasicCard;