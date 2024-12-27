document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('play-music');
    const music = document.getElementById('background-music');

    playButton.addEventListener('click', function () {
        music.play();
        document.getElementById('music-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    });
});
