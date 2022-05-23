console.log("hej");
// IIFE Immideatly invoked function expression
(function () {
  setTimeout(function () {
    // .speech-bubble
    console.log("hej");
    document.querySelector(".speech-bubble").style.display = "block";
  }, 2000);
})();

function submitForm() {
  event.preventDefault();
  console.log("Klikket på");

  // Ved name=q1, der skal q1 passe til det name vi har givet vores radio group i HTMLen
  const answerToQuestion1 = document.querySelector(
    "input[name=q1]:checked"
  ).value;
  console.log(answerToQuestion1);

  if (answerToQuestion1 == "ja") {
    // brugeren har svaret rigtigt
    // Sender vi dem videre
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "block !important";
  } else {
    // brugeren har svaret forkert
    // Vis en rød text / fejlbesked
    alert("Du har svaret forkert");
  }

  const question2Answer1 = document.querySelector("#q2-option-1").checked;
  const question2Answer2 = document.getElementById("q2-option-2").checked;
  const question2Answer3 = document.getElementById("q2-option-3").checked;
  const question2Answer4 = document.getElementById("q2-option-4").checked;

  const answerToQuestion2 = [];

  if (question2Answer1) {
    const variabler = document.getElementById("q2-option-1").value;
    answerToQuestion2.push(variabler);
    console.log(variabler);
  }

  // const answerToQuestion2 = {
  //   answer1: question2Answer1,
  //   answer2: question2Answer2,
  //   answer3: question2Answer3,
  //   answer4: question2Answer4,
  // }
  console.log(answerToQuestion2);
}

function submitQuestion1() {
  const answerToQuestion1 = document.querySelector(
    "input[name=q1]:checked"
  ).value;
  console.log(answerToQuestion1);

  if (answerToQuestion1 == "ja") {
    // brugeren har svaret rigtigt
    // Sender vi dem videre
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "block !important";
  } else {
    // brugeren har svaret forkert
    // Vis en rød text / fejlbesked
    alert("Du har svaret forkert");
  }
}

function submitQuestion2() {
  const answerToQuestion2 = document.querySelector(
    "input[name=q2]:checked"
  ).value;
  console.log(answerToQuestion2);

  if (answerToQuestion1 == "ja") {
    // brugeren har svaret rigtigt
    // Sender vi dem videre
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "block !important";
  } else {
    // brugeren har svaret forkert
    // Vis en rød text / fejlbesked
    alert("Du har svaret forkert");
  }
}
