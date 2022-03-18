const games = ["Settlers", "Harry Potter"];
console.log(games[1], games[0]);

const flows = ["Billede", "Video", "Portfolio", "SoMe"];
console.log(flows[2]);

const sister = {
  name: "Emma",
};

const brother = {
  name: "Kasper",
};

const siblings = [sister, brother];

// Opretter person object
const person = {
  name: "Mathias Nielsen",
  height: 180,
};

// Opretter nyt array
const tvFilmShows = ["Fringe", "Friends"];

// Assigner en ny attribut 'tvFilmShows'
// på person objektet,
// og sætter den lig med værdien fra vores Array
person.tvFilmShows = tvFilmShows;

// Opretter ny function
function myFirstFunction() {
  // Function scope aka Function Body
  console.log("Hej");
  // Opretter 2 variabler
  const height = 1.8;
  const weight = 90;
  // Udregner BMI
  const bmi = weight / (height * height);
  // Skriver resultat i log
  console.log(bmi);
}
// Her kalder jeg myFirstFunction
// Og kører dermed koden i functionen
myFirstFunction();

function exchange() {
  // Opretter vores kurser
  const eurRate = 7.45;
  const usdRate = 6.55;
  // Opretter vores SU
  const su = 6000;
  // Laver vores udregninger
  const suInEur = su / eurRate;
  const suInUsd = su / usdRate;
  // Skriver vores resultater i loggen
  console.log(suInEur, suInUsd);
}

// Kører vores exchange function
exchange();

// Opretter ny function
// Height og Weight 2 argumenter/parameter
function bmiCalculator(height, weight) {
  // Udregner BMI på baggrund af parameter
  return weight / (height * height);
  // Returner resultat
  //return bmi;
}

// kører vi vores funktion, gemmer resultatet
const minBMI = bmiCalculator(1.8, 90);
const kasper = bmiCalculator(2, 80);
// Ser på resultatet
console.log(minBMI);
console.log(kasper);

// Hiver button ind i javascript
const button = document.getElementById("button");
console.log(button);

// Hiver height input ind i javascript
// const heightInput = document.getElementById("height").value;
// console.log(heightInput);

// Hiver weight input ind i javascript
// const weightInput = document.getElementById("weight").value;
// console.log(weightInput);

function calculate() {
  console.log("Jeg er blevet klikket på");
  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;
  console.log(weightInput, heightInput);
  // UDREGN BMI HER:
  const bmi = bmiCalculator(heightInput, weightInput);
  document.getElementById("title").innerText = "Din bmi: " + bmi;

  //document.getElementById("title").style.color = "green";
  document.getElementById("title").classList.add("min-class");
}
