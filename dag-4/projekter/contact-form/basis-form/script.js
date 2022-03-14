(function () {
  window.addEventListener("load", function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", validateForm);
  });
})();

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
}
