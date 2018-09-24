
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

function showJumbledWord() {
    word = words[lvl][Math.floor(Math.random() * words[lvl].length)];
    shuffledWord = word.shuffle();
    let jumbledWord = document.getElementById('jumbledWord');
    let message = document.getElementById('message');
 
    if (word === shuffledWord) {
    showJumbledWord(lvl);
    } else {
    message.textContent = "Un-jumble this word:"
    jumbledWord.textContent = shuffledWord;
    return runGame();
    }
}


function runGame(){
    createInput()
    function createInput(){
    
        let inp = document.getElementById('inp');

        let myInput = document.createElement('input');
        myInput.className = 'form-control';
        myInput.id = 'result';
        myInput.placeholder = 'Answer..'
    
        let myBtn = document.createElement('button');
        myBtn.className = "btn btn-primary mt-1";
        myBtn.type = "submit";
        myBtn.textContent = "Submit";

        inp.appendChild(myInput);
        inp.appendChild(myBtn);
        // form.style.display = 'block';
        
    }

    function check() {
        console.log('Yes');
    }

    myBtn.addEventListener('click', check);
    

}




