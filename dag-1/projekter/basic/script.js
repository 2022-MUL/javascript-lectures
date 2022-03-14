var fornavn = "Mathias";
var efternavn = "Nielsen";
const email = "mtnl@cphbusiness.dk";

var fuldeNavn = fornavn + " " + efternavn;
var welcome = "Hej " + fornavn + ", velkommen";

var height = 1.8;
var weight = 89;

var bmi = weight / (height * height);
console.log(bmi);

var SU = 6000;
var usdRate = 6.55;
var eurRate = 7.45;

var suInUsd = SU / usdRate;
var suInEur = SU / eurRate;
console.log(suInEur);
console.log(suInUsd);

var message = "Min SU i eur: " + suInEur;
console.log(message);

var isJavaScriptNice = true;
var test = 3.5 > 4;
console.log(test);

var adresse = {
  vejNavn: "Brobyvej",
  husNr: "1b",
  postNr: 2740,
  by: "Skovlunde",
};

var person = {
  name: "Mathias",
  lastName: "Nielsen",
};

person.email = "mtnl@cphbusiness.dk";
person.adresse = adresse;
console.log(person);
