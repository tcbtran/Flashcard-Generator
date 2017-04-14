// ClozeCard constructor function
var ClozeCard = function(text, cloze) {

  this.fulltext = text;
  this.cloze = cloze;

  this.partial = function() {
    var partial = [];
    var word = text.split(" ");
    // console.log(word);
    for (var i=2; i < word.length; i++) {
      partial.push(word[i]);
      var partialText = "..." + partial.join(" ");
      
    }
    console.log(partialText);
  };

};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");



console.log(firstPresidentCloze.fulltext);
console.log(firstPresidentCloze.cloze);
firstPresidentCloze.partial();