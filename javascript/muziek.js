function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}`;
    dateElement.textContent = `${day}/${month}/${year}`;
  }

  // Update time and date every second
  setInterval(updateTimeAndDate, 1000);

  // Initial call to set time and date immediately
  updateTimeAndDate();

  document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");

    // Example of track info update
    const trackName = document.getElementById("track-name");
    const trackArtist = document.getElementById("track-artist");

    // Track info (You can dynamically update this if you want to load from a playlist or API)
    const trackDetails = {
        name: "Song Title",
        artist: "Artist Name"
    };

    trackName.textContent = "Track: " + trackDetails.name;
    trackArtist.textContent = "Artist: " + trackDetails.artist;

    // Event listener for when audio starts playing
    audioPlayer.addEventListener('play', () => {
        console.log('Track is now playing');
    });

    // Event listener for when audio ends
    audioPlayer.addEventListener('ended', () => {
        console.log('Track has finished playing');
    });
});