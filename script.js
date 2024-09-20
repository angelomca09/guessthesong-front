const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const trackList = document.getElementById('track-list');
const audioPlayer = document.getElementById('audio-player');

searchButton.addEventListener('click', searchTracks);
function searchTracks() {
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    alert('Please enter a playlist ID');
    return;
  }

  lista = fetch(`http://localhost:5000/get_playlist/${searchTerm}`)
  .then((response) => response.json())
  .then((json) => console.log(json));
}
