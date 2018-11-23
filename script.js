
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

//Level choice variable
let lvl;

//Level Choice function
function levelChoice(n) {
    lvl = n;
    let badge = document.getElementById('badge');
    badge.textContent = lvl;
    // console.log("Level is " + lvl);
  }

//RunGame function contains all game logic
function runGame() {
    //Get a word from the dataset
    unShuffledWord = words[lvl][Math.floor(Math.random() * words[lvl].length)];

    //Shuffle the word
    shuffledWord = unShuffledWord.shuffle();
    
    //Initialize UI vars
    let jumbledWord = document.getElementById('jumbledWord');
    let message = document.getElementById('message');
    
    //Error handling: We dont want the shuffled word to be the same as the original word
    if (unShuffledWord === shuffledWord) {
    
    //Run the function again 
    runGame(lvl);
    
    } else {
    //Create Get New Word button
    let getWordBtn = document.getElementById('getWordBtn');
    getWordBtn.textContent = 'Get New Word'

    //Display message 
    message.textContent = "Un-jumble this word:"

    //Display the jumbled word
    jumbledWord.textContent = shuffledWord;

    //Get New Word function
    getWordBtn.addEventListener('mousedown', function(){
        unShuffledWord = words[lvl][Math.floor(Math.random() * words[lvl].length)];
        //Shuffle the word
        shuffledWord = unShuffledWord.shuffle();;
        jumbledWord.textContent = shuffledWord;
    })


    //Create Input Container
    let inputContainer = document.getElementById('inputContainer');

    //Create Input
    let myInput = document.createElement('input');
    myInput.className = 'form-control';
    myInput.id = 'result';
    myInput.placeholder = 'Answer..'

    //Create Submit Button
    let myBtn = document.createElement('button');
    myBtn.className = "btn btn-primary mt-1";
    myBtn.type = "submit";
    myBtn.textContent = "Submit";

    //Create Shuffle Button
    let shuffleBtn = document.createElement('button');
    shuffleBtn.className = "btn btn-outline-secondary mt-1 mb-1";
    shuffleBtn.type = "submit";
    shuffleBtn.textContent = "Shuffle Word";

    //Append Shuffle, Input & Button to Input Container
    inputContainer.appendChild(shuffleBtn);
    inputContainer.appendChild(myInput);
    inputContainer.appendChild(myBtn);
    
    //Listen for click on shuffle
    shuffleBtn.addEventListener('click', shuffleAgain)

    //Shuffle function
    function shuffleAgain() {
        shuffledWord = unShuffledWord.shuffle();;
        jumbledWord.textContent = shuffledWord;
        if (shuffledWord === unShuffledWord) {
            shuffleAgain();
        }
    }

    //Check if Input value matches Un Shuffled Word
    function matched(e) {
        if(myInput.value.toLowerCase() === unShuffledWord) {
            success();
            myInput.value = "";
            getWordBtn.disabled = true; // Prevent get word being called again
            e.target.removeEventListener('click', matched) // Prevent function being called again
        } else {
            fail();
        } 
    }

    //Win Case function 
    function success() {
        myInput.style.borderColor = 'green';
        successMessage = document.getElementById('successMessage');
        successMessage.style.color = 'green';
        let correctWord = myInput.value;
        successMessage.textContent = `${correctWord} is correct, good going!`;
        playAgain()
        
    }

    //Lose Case function
    function fail() {
        myInput.value = ""
        successMessage.textContent = 'Try again';
        
    }

    //Play Again function
    function playAgain(e) {
        let resultContainer = document.getElementById('resultContainer');
        let playAgainButton = document.createElement('button');
        playAgainButton.className = "btn btn-secondary mt-1";
        playAgainButton.textContent = "Play Again"
        resultContainer.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', refreshPage);
 
    }
    
    //Create functionality for match to run if Key Enter is pressed.
    myInput.addEventListener('keypress', function (e) {
        var key = e.keyCode;
        if (key === 13) { // 13 is enter
          matched(e);
          e.preventDefault();
        }
    });
    
    function refreshPage(){
        location.reload();
    }

    //Functionality for Submit button
    myBtn.addEventListener('click', matched);
    
}

    
    
    
}





