var currentAudio = null; // Variable to store the currently playing audio

// Replace the image source and play audio when a button is clicked
function buttonClick(buttonId, imageSrc, audioSrc) {
  var tapeImage = document.getElementById('tapeImage');
  tapeImage.src = imageSrc;

  // Stop the previous audio if it's playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  var audio = new Audio(audioSrc);
  audio.play();

  currentAudio = audio; // Update the currently playing audio
}

// Attach button click event listeners
document.getElementById('button1').addEventListener('click', function() {
  buttonClick('button1', 'button1-pressed-image.png', 'button1-audio.wav');
});

document.getElementById('button2').addEventListener('click', function() {
  buttonClick('button2', 'button2-pressed-image.png', 'button2-audio.wav');
});

document.getElementById('button3').addEventListener('click', function() {
  buttonClick('button3', 'button3-pressed-image.png', 'button3-audio.wav');
});

document.getElementById('button4').addEventListener('click', function() {
  buttonClick('button4', 'button4-pressed-image.png', 'button4-audio.wav');
});

document.getElementById('button5').addEventListener('click', function() {
  buttonClick('button5', 'button5-pressed-image.png', 'button5-audio.wav');
});

document.getElementById('button6').addEventListener('click', function() {
  buttonClick('button6', 'button6-pressed-image.png', 'button6-audio.wav');
});

// Repeat the above code for the remaining buttons (button3 to button6)