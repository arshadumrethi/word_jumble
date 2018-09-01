// Create object to contain words at every level in increasing Difficulty.
// Starting with 4 letter words at level 1 and going up to 8 letter words
// at level 5.
const words = {
  1: ["door", "fork", "crew", "bird", "joke", "quiz", "hazy", "maze", "numb", "howl"],
  2: ["spoon", "knife", "board", "shine", "quilt", "clock", "judge", "clone", "clown", "jewel"],
  3: ["pyjama", "zombie", "amazon", "forest", "grumpy", "bronze", "fluffy", "frozen", "duplex", "blazer"],
  4: ["pumpkin", "project", "enclave", "quantum", "hammock", "blanket", "monster", "kitchen", "teacher", "diamond"],
  5: ["paradise", "language", "business", "syllable", "treasure", "equation", "sandwich", "february", "champion", "umbrella"]
}

// Create shuffle function using fisher yates algorithm in order to jumble words.
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

// Initialize global variables that will be used in functions.
let num;
let jumbled = document.getElementById('jumbled');
let word = "";
let result = document.getElementById("result");
let levelselected = document.getElementById("levelselected");
let buttons = document.querySelector("button");


// Create a function that will be called on clicking the level buttons
// this will set the level - num will be an integer passed to wordChoice function.
function levelChoice(n) {
  // buttons.style.backgroundColor = "Blue";
  levelselected.textContent = "Current level selected: " + n;
  return num = n;
}

// This function will access the words object and select a random word from the
// selceted array. The word selected is then shuffled using the shuffle function.
function wordChoice(num) {
  word = words[num][Math.floor(Math.random() * words[num].length)];
  shuffledWord = word.shuffle();
  if (word === shuffledWord) {
    wordChoice(num);
  } else {
    return shuffledWord;
  }
}

// runGame function will be called when runGame button is clicked and will display
// the jumbled word at an h3 element whose id name is "jumbled".
function runGame() {
  jumbled.textContent = wordChoice(num);
}

// match function will check if answer entered in input matches the original word.
// returns success message or try again message.
function match(e) {

  var answer = document.getElementById("answer").value;

  while (answer == "") {
    return e.preventDefault();
  }

  if (answer == word) {
    console.log("yeah");
    result.textContent = "You got it!";
  } else {
    console.log("nah");
    result.textContent = "That's not it";
  }

}

// answer.addEventListener("keydown", function (e) {
//   if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
//       match();
//   }
// });

// answer.onkeyup = function(e){
//   if(e.keyCode == 13){
//      match();
//   }
// }


// Refresh the page and reload game.
function playAgain() {
    location.reload();
}
