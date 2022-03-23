document
  .getElementById("contact-form")
  .addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  // Hent alle elementerne med class: need-validation
  const elements = document.getElementsByClassName("need-validation");

  // Næste emne: for loops
  // Moderne for loops
  // "for of" loops
  for (let element of elements) {
    if (element.type == "email") {
      // Validering af email
      emailValidation(element);
    } else if (element.type == "text" || element.type == "textarea") {
      // Validering af text felter
      textValidation(element);
    }
  }
}

function textValidation(element) {
  // Hent værdien fra elementet og trim (fjern foran og bagved liggende mellemrum)
  const value = element.value.trim();
  // If statement til validering af input fra brugeren
  if (value == "") {
    // Tilføj en form for fejl feedback til brugeren.
    element.classList.add("validation-error");
  } else {
    // Hvis der ikke er en fejl
    element.classList.remove("validation-error");
  }
}

function emailValidation(element) {
  const value = element.value;
  if (value.includes("cphbusiness.dk")) {
    // Brugeren har indtastet korrekt
    element.classList.remove("validation-error");
  } else {
    // Brugeren har indtastet forkert
    element.classList.add("validation-error");
  }
}

// Old school for loops:
// iterable / Index
/*
  for (let x = 0; x < elements.length; x++) {
    // body af for loop
    const value = elements[x].value;
    console.log(value);
  }
  */

const age = 19;

// Næste "if" statements, "if/else", "else if"

if (age >= 18) {
  // Hvis din "condition" er true
  console.log("Du må godt købe alkohol");
} else if (age >= 16) {
  console.log("Du må købe NOGET alkohol, men ikke alt");
} else {
  // Hvis vores "condtion" er false
  console.log("Du må ikke købe alkohol");
}
