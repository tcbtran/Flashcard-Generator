// Requiring our BasicCard constructor
var BasicCard = require('./basic-card.js');

// Requiring our ClozeCard constructor
var ClozeCard = require('./cloze-card.js');

// Loading inquirer node package
var inquirer = require('inquirer');

// Loading node fs node package to read and write to log.txt File
var fs = require('fs');

// Store whether user wants to run Basic Card or Cloze Card generator
var cardChoice = process.argv[2];

// Whether they select Basic or Cloze, store input to be used for "front" or "text"
// var input1 = process.argv[3];

// Whether they select Basic or Cloze, store input to be used for "back" or "cloze"
// var input2 = process.argv[4];

var basicCard = new BasicCard();
var clozeCard = new ClozeCard();


