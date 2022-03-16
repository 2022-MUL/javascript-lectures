(function () {
  window.addEventListener("load", () => {
    // h1
    const h1 = document.getElementById("title");
    console.log(h1);
    h1.innerText = "Ny titel fra JavaScript";

    // h3
    const h3s = document.getElementsByTagName("h3");
    console.log(h3s);

    // vha class
    const elements = document.getElementsByClassName("a-random-class");
    console.log(elements);

    const h3 = document.querySelector("#container-2 h3");
    console.log(h3);

    h1.addEventListener("click", titleClicked());
  });
})();

function titleClicked() {
  console.log("title clicked!");
  const h1 = document.getElementById("title");
  h1.classList.add("a-random-class");
}
