document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('audio-button').addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.play().catch(function(error) {
            console.error('Error al reproducir el audio:', error);
        });
    });
});