let numberToGuess;

(function () {
  window.addEventListener("load", function () {
    numberToGuess = Math.floor(Math.random() * 10) + 1;
    console.log("Document loaded", numberToGuess);
  });
})();

function submitGuess() {
  const guess = document.getElementById("guess").value;

  if (guess == "") {
    document.getElementById("hint").innerText = "Type a number you fool";
  } else if (guess == numberToGuess) {
    // if correct:
    document.getElementById("title").innerText = "Correct!";
    document.getElementById("hint").innerText = "";
  } else if (guess < numberToGuess) {
    // if their guess is lower
    document.getElementById("hint").innerText =
      "The number is higher than " + guess;
  } else if (guess > numberToGuess) {
    // if their guess is higher
    document.getElementById("hint").innerText =
      "The number is lower than " + guess;
  }
}
