(function () {
  window.addEventListener("load", () => {
    console.log("Index.js was invoked");
  });
})();

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function blockTheClose(event) {
  event.stopPropagation();
}
