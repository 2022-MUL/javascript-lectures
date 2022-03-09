let numberToGuess;

(function () {
  window.addEventListener("load", function () {
    numberToGuess = Math.floor(Math.random() * 10) + 1;
  });
})();

function submitGuess() {}
