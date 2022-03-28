const serviceID = "service_wepit36"
const templateID = "template_qa78alg"
const userID = "CEkVVTSAKLLsxkGMU"

function sendEmail() {
  // Henter elementerne fra HTML
  const elements = document.getElementsByClassName("email-data");
  
  // Opretter et tomt objekt
  const emailData = {};
  
  // "For of"-loop, henover vores elements array
  for(let element of elements) {
    console.log(element.name)
    console.log(element.value)
    emailData[element.name] = element.value
  }

  // Ser resultatet af vores for loop
  console.log(emailData);

  emailjs.send(serviceID, templateID, emailData, userID);
}

/*
{
 name: "Mathias",
 email: "asd@asd.com",
 message: "besked"
}
*/

