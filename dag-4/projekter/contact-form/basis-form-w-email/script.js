document
  .getElementById("contact-form")
  .addEventListener("submit", validateForm);

const templateParams = {};

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // 1st step: Hente alle input felter
  const elements = document.getElementsByClassName("need-validation");
  console.log(elements);
  // 2nd step: loope henover alle input felter
  for (let element of elements) {
    if (element.type == "text" || element.type == "textarea") {
      textValidation(element);
    } else if (element.type == "email") {
      emailValidation(element);
    }
  }

  const errorElements = document.getElementsByClassName("validation-error");
  console.log("errorElements", errorElements);
  if (errorElements.length == 0) {
    emailjs.send(
      "service_b4vdexd",
      "template_qa78alg",
      templateParams,
      "CEkVVTSAKLLsxkGMU"
    );
  }
}

function emailValidation(element) {
  const value = element.value;
  if (value.includes("cphbusiness.dk")) {
    // Brugeren har gjort det korrekt
    element.classList.remove("validation-error");
    templateParams[element.name] = value;
  } else {
    // brugeren har ikke gjort det korrekt
    element.classList.add("validation-error");
  }
}

function textValidation(element) {
  //console.log(element);
  const value = element.value.trim(); // i princippet er ""
  console.log(value);
  // Hvis brugeren har givet tomt input, eller kun givet mellemrum
  if (value == "") {
    // Tilføje en form for fejl feedback
    // brugeren har lavet en fejl
    element.classList.add("validation-error");
  } else {
    // Brugeren har ikke lavet en fejl
    element.classList.remove("validation-error");
    templateParams[element.name] = value;
  }
}

// For loops
const games = ["Settlers", "Harry Potter", "Apex"];
// Printer hvert element Manuelt
console.log(games[0]);
console.log(games[1]);
console.log(games[2]);

// Old school for loop
// I står for index
// ++ forøger number med 1 (altså en forkortelse for i = i + 1)
// -- decreaser number med 1 (altså en forkortelse for i = i - 1)
for (let i = 0; i < games.length; i++) {
  console.log(i);
  console.log(games[i]);
}

// Moderne for loop
// "for of" loop
for (let game of games) {
  console.log(game);
}

const age = 17;

if (age >= 18) {
  console.log("Du må købe alt alkohol");
} else if (age >= 16) {
  console.log("Du må købe noget alkohol");
} else {
  console.log("Du må ikke købe alkohol");
}
