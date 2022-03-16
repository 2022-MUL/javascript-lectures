(function () {
  window.addEventListener("load", () => {
    document.getElementById("button").addEventListener("click", clicked);

    console.log("Script.js was invoked");
    const h1Element = document.getElementById("title");
    console.log(h1Element.innerText);
    h1Element.innerText = "Her er en ny titel";

    const h3Elements = document.getElementsByTagName("h3");
    console.log(h3Elements);

    const specificH3 = document.querySelector(".container h3");
    console.log(specificH3.innerText);

    const title = document.getElementById("title");
    title.addEventListener("click", function () {
      title.classList.add("a-random-class");
    });
  });
})();

function clicked() {
  const pElement = document.querySelector(".a-random-class");
  pElement.style.color = "red";
  pElement.classList.add();
}
