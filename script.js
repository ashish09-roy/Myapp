// Quotes ka array
const quotes = [
  "Believe in yourself!",
  "Success is not final, failure is not fatal.",
  "Do what you can with what you have.",
  "Dream big and dare to fail.",
  "Hustle until you no longer need to introduce yourself."
];

function newQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

function copyQuote() {
  let text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}

function shareQuote() {
  let text = document.getElementById("quote").innerText;
  if (navigator.share) {
    navigator.share({
      title: "Daily Quote",
      text: text
    });
  } else {
    alert("Sharing not supported in this browser.");
  }
}