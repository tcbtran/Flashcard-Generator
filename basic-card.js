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

// since you're exporting the BasicCard constructor, it would be a good idea to encapsulate this inquirer logic
// inside of a function so that it doesn't get immediately run whenever this file is required in anywhere else.
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

    // you wanna be sure that you're using the correct variable names. In this case you want
    // the instance of the BasicCard you've created, not the BasicCard constructor itself
    var basicTxt = "Front: " + newCard.front + "\nBack: " + newCard.back;
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