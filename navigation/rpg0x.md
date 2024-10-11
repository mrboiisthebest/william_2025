---
layout: base
title: RPG0x
permalink: /rpg0x/
---

<style>
.custom-alert {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.custom-alert button {
    background-color: transparent; /* Fully transparent background */
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    width: 100%; /* Adjust width to fit content */
    height: 100%; /* Adjust height to fit content */
    position: absolute; /* Position the button relative to the alert box */
}

</style>

<canvas id='gameCanvas'></canvas>
<h1>Welcome to the RPG Game!</h1>
<div id="indicator">Music Playing...</div>
<p>Press any key to play the music.</p>

<!-- Set the audio path using site.baseurl -->
<script>
    window.audioPath = "{{ site.baseurl }}/assets/sounds/rpgSong.mp3"; // This will be processed by Jekyll
</script>
<script src="{{site.baseurl}}/assets/js/rpg0x/rpgMusic.js"></script>
<div id="custom-alert" class="custom-alert">
    <button onclick="closeCustomAlert()" id="custom-alert-message"></button>
</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg0x/GameControl.js';

    const path = "{{site.baseurl}}";

    // Start game engine
    GameControl.start(path);
</script>
