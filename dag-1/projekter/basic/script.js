console.log("Jeg er kørt");

const myName = "Mathias";
const lastName = "Nielsen";
const email = "mtnl@cphbusiness.dk";
const fullName = myName + " " + lastName;

console.log(email);

const welcome =
  "Hej " +
  myName +
  ", velkommen til og tak fordi du har skrevet dig op til mit nyhedsbrev, håber du kommer til at nyde mit indhold.";

const welcome2 = `Hej ${myName}, velkommen`;

console.log(myName + " " + lastName);

const weight = 89;
const height = 1.8;
const bmi = weight / (height * height);
console.log(bmi);

const su = 6000;
const usdRate = 6.55;
const eurRate = 7.45;

const suInEur = su / eurRate;
const suInUsd = su / usdRate;

const doesLikeCats = false;
const isJavaScriptNice = true;

const result = 3.5 < 4;
console.log(result);

const adresse = {
  name: myName,
  vej: "Brobyvej",
  nummer: 1,
  postNr: 2740,
};

const person = {
  name: "Mathias",
  lastName: lastName,
  email: email,
  job: {
    title: "Adjunkt",
    location: "Lyngby",
  },
};

console.log(person.name);
console.log(person.lastName);

person.name = person.name + " Nikolaj";

person.adresse = adresse;
console.log(person.job.location);
