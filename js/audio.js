let myAudio = new Audio("https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3"); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}
