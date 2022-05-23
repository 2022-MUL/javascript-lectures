function startSimpleAnimation() {
  console.log("Klikket på");

  const text = "hej med dig, dette burde gerne blive animeret!";

  const splitted = text.split("");

  splitted.forEach((char, index) => {
    setTimeout(() => {
      document.querySelector(".bubble").innerHTML += char;
    }, 50 * index);
  });
}

/*
  Fancy setup
  
  These next few lines is basicly what he has shown you in the tutorial.
  But we keep it in the "root" of the javascript file.
  So these lines of codes is run, when your page loads.
  
  Adding the spans is part of the setup, 
  and can therefore be run on pageload,
  as it does not need to run each time the monster is clicked
*/
// This is the intro div, where you want to add the message
const div = document.querySelector(".intro");
// This is the message you want showed in the intro div
const message = "hej med dig, dette burde gerne blive animeret!";
// Splitting the message, so we can add the span around each letter
const splitted = message.split("");
// Loop over each letter, and add span around each letter
for (let i = 0; i < splitted.length; i++) {
  div.innerHTML += "<span>" + splitted[i] + "</span>";
}

// This is the function that should be run, when clicking the monster.
function startFancyAnimation() {
  // Index is a more correct name for whats happening here.
  // So i renamed it.
  let index = 0;
  // setInterval, it calls the onTick function, every 50 milisecond
  let timer = setInterval(onTick, 50);

  function onTick() {
    // Using ".intro span" as our CSS selector, so we only target spans inside our intro div
    const span = div.querySelectorAll(".intro span")[index];
    span.classList.add("fade");
    index++;
    if (index === message.length) {
      // This was in a complete function
      // But just moved the code here, to make it a bit simpler.
      clearInterval(timer);
      timer = null;
      return;
    }
  }
}
