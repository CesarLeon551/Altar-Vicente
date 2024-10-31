const artistName = "Vicente Fernandez";
const albumTitle = "Sus Ineditas";
const tracks = [
    { title: "Calavera Edgardo", file: "Calavera Edgardo.FLAC" },
    { title: "Calavera Roy", file: "CALAVERA ROY.FLAC" },
    { title: "El Mejor Altar", file: "El Mejor Altar.FLAC" },
    { title: "El Trio Dinamica", file: "El Trio Dinamita .FLAC" },
    { title: "Entre Copas Y Lamentos", file: "Entre Copas Y Lamentos.FLAC" }
];

document.getElementById('artist-name').innerText = artistName;
document.getElementById('album-title').innerText = albumTitle;

const tracklistElement = document.getElementById('tracklist');
const audioPlayer = document.getElementById('audio-player');

tracks.forEach((track, index) => {
    const trackItem = document.createElement('li');
    trackItem.className = 'track';
    trackItem.innerHTML = `${track.title} <button onclick="playTrack('${track.file}')">Reproducir</button>`;
    tracklistElement.appendChild(trackItem);
});

function playTrack(file) {
    audioPlayer.src = file; // Asigna la fuente del archivo de audio
    audioPlayer.style.display = 'block'; // Muestra el control de audio
    audioPlayer.play(); // Reproduce la canción
}
