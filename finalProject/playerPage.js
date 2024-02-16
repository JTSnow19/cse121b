
const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('playerName');

document.getElementById('playerName').textContent = playerName;

