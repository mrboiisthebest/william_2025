(function() {
    console.log("rpgMusic.js has been loaded"); // Log when the JS file is loaded

    const audio = new Audio(window.audioPath); // Use the audio path set in the HTML
    audio.loop = true;

    const indicator = document.getElementById('indicator');
    let isPlaying = false;

    function toggleMusic() {
        if (isPlaying) {
            console.log('Pausing music...');
            audio.pause();
            if (indicator) {
                indicator.style.display = 'none';
            }
            isPlaying = false;
        } else {
            console.log('Attempting to play music...');
            audio.play()
                .then(() => {
                    console.log('Music started playing.');
                    if (indicator) {
                        indicator.style.display = 'block';
                    }
                    isPlaying = true;
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });
        }
    }

    document.addEventListener('keydown', function startMusic(event) {
        console.log(`Key pressed: ${event.key}`);
        if (!isPlaying) {
            toggleMusic();
        }
        document.removeEventListener('keydown', startMusic);
    });
})();
