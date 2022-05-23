function deny() {
  location.href = "/solutions/alcohol-sites/denied.html";
}

function allow() {
  location.href = "/solutions/alcohol-sites/allowed.html";
}

function confirm() {
  const age = document.getElementById("age").value;
  console.log(age);
  // TODO:
  if (age >= 18) {
    allow();
  } else {
    deny();
  }
}
