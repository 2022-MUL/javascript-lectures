async function hentJoke() {
  console.log("Klikket på");
  const response = await fetch("https://api.chucknorris.io/jokes/random")
  const data = await response.json();
  console.log(data.value)
  // Hiv fat i h1 element vha ID
  // Sæt innerText lig med value fra data
  document.getElementById("joke").innerText = data.value
}

// https://api.chucknorris.io/jokes/random