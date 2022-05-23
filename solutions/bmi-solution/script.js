const calculate = () => {
  console.log("Calculating...");

  let height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height > 3) {
    height = height / 100;
  }

  const bmi = Math.floor(weight / (height * height));

  const title = document.getElementById("title");
  title.innerText = "BMI Result: " + bmi;

  console.log(bmi);
};
