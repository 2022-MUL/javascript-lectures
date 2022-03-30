async function getJoke() {
  console.log("Jeg er blevet klikket på");
  // Vi fetcher data fra ekstern kilde
  const result = await fetch("https://api.chucknorris.io/jokes/random");
  console.log(result);

  // Vi laver result om til json
  const response = await result.json();
  console.log(response);

  document.getElementById("joke").innerText = response.value;
}

// https://api.chucknorris.io/jokes/random
