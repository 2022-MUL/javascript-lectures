const userID = "CEkVVTSAKLLsxkGMU"
const serviceID = "service_b4vdexd"
const templateID = "template_sitk244"

function sendEmail() {
  // Opret 3 variabler, med værdierne fra input felterne
  const navn = document.getElementById("navn").value
  const email = document.getElementById("email").value
  const besked = document.getElementById("besked").value
  const emailData = {
    name: navn,
    email: email,
    message: besked,
  }

  emailjs.send(serviceID, templateID, emailData, userID);

  // input felterne har en .value, hvor den gemmer bruger input

}