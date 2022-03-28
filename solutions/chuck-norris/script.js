(function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data));
})();

async function fetchNewJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jokeData = await response.json();
  document.getElementById("joke").innerText = jokeData.value;
  console.log(jokeData);
}
