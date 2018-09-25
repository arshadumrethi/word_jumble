
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

let lvl;

function levelChoice(n) {
    lvl = n;
    let badge = document.getElementById('badge');
    badge.textContent = lvl;
    console.log("Level is " + lvl);
  }

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
    //Create and Display a message,jumbled word and input

    //Display message 
    message.textContent = "Un-jumble this word:"

    //Display the jumbled word
    jumbledWord.textContent = shuffledWord;

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

    //Append Input and Button to Input Container
    inputContainer.appendChild(myInput);
    inputContainer.appendChild(myBtn);
    // form.style.display = 'block';

    //Check if Input value matches Un Shuffled Word
    function matched() {
        if(myInput.value === unShuffledWord) {
            success();
        } else {
            fail();
        }
    }

    function success() {
        myInput.style.borderColor = 'green';
        successMessage = document.getElementById('successMessage');
        successMessage.style.color = 'green';
        successMessage.textContent = 'You Win';
        playAgain()
        
    }

    function fail() {
        myInput.value = ""
        successMessage.textContent = 'Try again';
        playAgain()
    }

    function playAgain(e) {
        console.log('play again?')
        let resultContainer = document.getElementById('resultContainer');
        let playAgainButton = document.createElement('button');
        playAgainButton.className = "btn btn-secondary mt-1";
        playAgainButton.textContent = "Play Again?"
        resultContainer.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', refreshPage);
        // if(document.body.contains(playAgainButton)){
        //     playAgain()
        // } else {
        //     console.log('Play again button is present')
        // }
        

        
    }
    
    //Create functionality for match to run if Key Enter is pressed.
    myInput.addEventListener('keypress', function (e) {
        var key = e.keyCode;
        if (key === 13) { // 13 is enter
          matched();
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





