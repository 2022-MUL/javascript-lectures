const games = ["Settlers", "Harry Potter"];

const game = games[0];

console.log(game);

const flows = ["Billede", "Portfolio", "Video", "SoMe", "Eksamen"];
const flow3 = flows[2];
console.log(flow3);

const sister = {
  name: "Emma",
};

const brother = {
  name: "Kasper",
};

const siblings = [sister, brother];

const emma = siblings[0];
console.log(emma);

function myFirstFunction(height, weight) {
  const bmi = weight / (height * height);
  console.log(bmi);
  return bmi;
}

const bmiResult = myFirstFunction(1.8, 90);
console.log(bmiResult);

function exchangeRate(amount, rate) {
  const result = amount / rate;
  console.log(result);
  return result;
}

const suInEur = exchangeRate(6000, 7.45);
const suInUsd = exchangeRate(6000, 6.55);
console.log(suInEur);
console.log(suInUsd);
