/* Here I have used AI techniques, which is speech recognition */
const button = document.querySelector("button");
const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onstart = function () {
  console.log("Speech Recognition started!");
};
recognition.onresult = function (event) {
  console.log(event);
  const spokenwords = event.results[0][0].transcript;
  console.log("spoken words are", spokenwords);
  computerSpeech(spokenwords);
};
function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-us";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;
  determinewords(speech, words);
  window.speechSynthesis.speak(speech);
}
function determinewords(speech, words) {
  if (words.includes("home")) {
    speech.text = "Opening home page for you now";
    window.open("blog.html");
  }
  if (words.includes("code")) {
    speech.text = "Opening code for you now";
    window.open("Java.html");
  }
  if (words.includes("query")) {
    speech.text = "Opening code for you now";
    window.open("Contactus.html");
  }
}
button.addEventListener("click", () => {
  recognition.start();
});