const games = ["dota 2", "apex"];

const flows = [
  "Billede",
  "Portfolio",
  "koncept udvikling",
  "SoMe video",
  "Eksamen",
];

const flow = flows[1];
console.log(flow);

const brother = {
  name: "Kasper",
};

const sister = {
  name: "Emma",
};

const siblings = [
  {
    name: "Emma",
    lastName: "Nielsen",
  },
  {
    name: "Kasper",
  },
];

const person = {
  name: "Mathias",
  siblings: siblings,
};

function bmiCalculate(height, weight) {
  const bmi = weight / (height * height);
  return bmi;
}

bmiCalculate(1.8, 90);

function exchangeCalculator(rate, amount) {
  const newAmount = amount / rate;
  console.log(newAmount);
}

exchangeCalculator(6.55, 6000);

exchangeCalculator(7.45, 6000);

const test = console.log();
console.log(test);

const bmi = bmiCalculate(1.8, 90);
console.log(bmi);
