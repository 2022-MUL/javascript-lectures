console.log("Hej med dig");

var myName = "Mathias";
var surName = "Nielsen";

var fullName = myName + " " + surName;
console.log(fullName);

var domain = "cphbusiness.dk";
var user = "mtnl";
var at = "@";

var email = user + at + domain;

console.log(email);

const height = 1.8;
const weight = 90;
const bmi = weight / (height * height);
console.log(bmi);

const usdRate = 6.55;
const eurRate = 7.45;
const SU = 6000;
const suInUsd = SU / usdRate;
const suInEur = SU / eurRate;
console.log(suInEur);
console.log(suInUsd);

const isJavaScriptNice = true;
console.log(isJavaScriptNice);

const test = 4 > 5 || 4 == 5;
console.log(test);

const test2 = "4" == 4;
console.log(test2);

//const adresse = "Brobyvej 1b 2740 Skovlunde"

const adresse = {
  vej: "Brobyvej 1b",
  postnr: 2740,
  by: "Skovlunde",
};

const person = {
  myName: "Mathias",
  surName: "Nielsen",
  adresse: adresse,
  education: {
    highschool: "htx",
  },
};

person.adresse = adresse;
console.log(person);
person.adresse.by;
