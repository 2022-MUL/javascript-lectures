function submitForm() {
  event.preventDefault();
  console.log("Klikket på")

  // Ved name=q1, der skal q1 passe til det name vi har givet vores radio group i HTMLen
  const answerToQuestion1 = document.querySelector("input[name=q1]:checked").value;
  console.log(answerToQuestion1)

  const question2Answer1 = document.getElementById("q2-option-1").checked
  const question2Answer2 = document.getElementById("q2-option-2").checked
  const question2Answer3 = document.getElementById("q2-option-3").checked
  const question2Answer4 = document.getElementById("q2-option-4").checked

  const answerToQuestion2 = {
    answer1: question2Answer1,
    answer2: question2Answer2,
    answer3: question2Answer3,
    answer4: question2Answer4,
  }
  console.log(answerToQuestion2)


}