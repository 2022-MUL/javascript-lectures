const serviceID = "service_hp2cxgd"
const templateID = "template_qa78alg"
const userID = "CEkVVTSAKLLsxkGMU"

function submitForm() {
  event.preventDefault();
  console.log("Klikket på")
  // Hiv fat i de 3 elementer via ID
  const navn = document.getElementById("navn").value
  const email = document.getElementById("email").value
  const besked = document.getElementById("besked").value
  // Hent .value på dem og gem i en variabel
  const emailData = {
   name: navn,
   email: email,
   message: besked
  }
  
  emailjs.send(serviceID, templateID, emailData, userID);
}
