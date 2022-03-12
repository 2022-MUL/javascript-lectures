let numberToGuess;

(function () {
  window.addEventListener("load", function () {
    numberToGuess = Math.floor(Math.random() * 10) + 1;
  });
})();

function submitGuess() {
  console.log("Guess submitted");
  // TODO:
  // 1. Find værdien fra input feltet og assign det til en const (e.g. "guess").

  // 2. Hvis guess er == numberToGuess, ret titlen til at være "Correct!"

  // 3. Eller hvis guess er > numberToGuess, ret Hint til at indeholde:
  // 'The number is lower than guess'

  // 4. Eller hvis guess er < numberToGuess, ret Hint til at indeholde
  // 'The number is higher than guess'
}
