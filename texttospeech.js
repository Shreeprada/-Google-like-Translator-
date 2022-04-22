// usage in code
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello World";
window.speechSynthesis.speak(msg);
// To check if your browser supports speech synthesis
if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
//    Altering default output
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; 
msg.volume = 1; // From 0 to 1
msg.rate = 1; // From 0.1 to 10
msg.pitch = 2; // From 0 to 2
msg.text = "Como estas Joel";
msg.lang = 'es';
speechSynthesis.speak(msg);
// getting supported voices
speechSynthesis.getVoices().forEach(function(voice) {
    console.log(voice.name, voice.default ? voice.default :'');
  });

//   Browsers which work with this is Chrome,Mozilla firefox