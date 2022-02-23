(function () {
  console.log("Index.js was invoked");

  document.getElementById("height").addEventListener("blur", (event) => {
    console.log(event.target.value);
  });
})();

const calculate = () => {
  console.log("Calculating...");

  const height = document.getElementById("height").value;
  console.log(height);
};
