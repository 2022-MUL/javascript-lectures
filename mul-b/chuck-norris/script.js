async function hentJoke() {
    console.log("Jeg er blevet klikket på")

    // Henter data fra API
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    // Laver data om til JSON format
    const json = await response.json()
    // Console logger json
    console.log(json)
    // vha. DOM/Document hiver vi fat i h1
    document.getElementById("joke").innerText = json.value
}

// https://api.chucknorris.io/jokes/random