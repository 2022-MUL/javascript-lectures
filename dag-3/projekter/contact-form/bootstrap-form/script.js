(function () {
  window.addEventListener("load", function () {
    console.log("page loaded");

    document
      .getElementById("contact-form")
      .addEventListener("submit", validateForm);
  });
})();

function validateForm(event) {
  console.log("submitted");

  event.preventDefault();
  // TODO

  // 1. get form element
  // 2. form.checkValidity()
  // 3. form.classList.add("was-validated")
}
