const words = {
  1: ["door", "fork", "crew", "bird", "joke", "quiz", "hazy", "maze", "numb", "howl"],
  2: ["spoon", "knife", "board", "shine", "quilt", "clock", "judge", "clone", "clown", "jewel"],
  3: ["pyjama", "zombie", "amazon", "forest", "grumpy", "bronze", "fluffy", "frozen", "duplex", "blazer"],
  4: ["pumpkin", "project", "enclave", "quantum", "hammock", "blanket", "monster", "kitchen", "teacher", "diamond"],
  5: ["paradise", "language", "business", "syllable", "treasure", "equation", "sandwich", "february", "champion", "umbrella"]
}

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

var num;
var jumbledWord = document.getElementById('jumbledWord');


// function levelChoice(n) {
//   return num = n;
// }

function wordChoice(num) {
  let word = words[num][Math.floor(Math.random() * words[num].length)];
  return word.shuffle();
}

function runGame() {
  return console.log(wordChoice(2));
}
