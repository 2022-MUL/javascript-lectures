document
  .getElementById("contact-form")
  .addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // Hive fat i alle elementer hvor className = need-validation
  const elements = document.getElementsByClassName("need-validation");
  console.log(elements);
  // For loop, for hvert element i elements array'et
  for (let element of elements) {
    // Gemmer vi en ny variabel, hvor mellemrumstegn er trimmet væk
    const value = element.value.trim();

    // Tester om value er lig med en tom string
    if (value == "") {
      console.log("Du har givet tomt input");
      // Vi tilføjer error-validation class til elementet, som ikke er udfyldt
      element.classList.add("validation-error");
    } else {
    }
  }
}

// Blot eksempel til for loops
const games = ["Settlers", "Harry potter"];

// Standard oldschool for loop
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}

// Den nye moderne måde "for of"-loops
for (let game of games) {
  console.log(game);
}

// Conditions og if/else sætninger
// Condition (Også kendt som Boolean værdier)
const isAllowed = 28 > 16;
console.log(isAllowed);
// If sætning
if (isAllowed) {
  console.log("Jeg må godt købe alkohol");
} else {
  console.log("Jeg må ikke købe alkohol");
}

// else if
const age = 17;
if (age >= 18) {
  console.log("Jeg må købe alt alkohol");
} else if (age >= 16) {
  console.log("Jeg må købe mindre spiritus procenter");
} else {
  console.log("Jeg må ikke købe alkohol");
}
