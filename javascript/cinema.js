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

  // JavaScript to handle menu button clicks and filtering posters
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const posters = document.querySelectorAll(".poster-grid .item");

  menuButtons.forEach((button) => {
      button.addEventListener("click", () => {
          // Remove "active" class from all buttons
          menuButtons.forEach((btn) => btn.classList.remove("active"));
          // Add "active" class to the clicked button
          button.classList.add("active");

          // Get the text of the clicked button
          const filter = button.textContent.toLowerCase();

          // Filter posters based on the button clicked
          posters.forEach((poster) => {
              const isFilm = poster.querySelector("img").alt.toLowerCase().includes("film");
              const isSerie = poster.querySelector("img").alt.toLowerCase().includes("serie");

              // Show or hide posters based on filter
              if (filter === "alles") {
                  poster.style.display = "flex"; // Show all
              } else if (filter === "films" && isFilm) {
                  poster.style.display = "flex"; // Show only films
              } else if (filter === "series" && isSerie) {
                  poster.style.display = "flex"; // Show only series
              } else {
                  poster.style.display = "none"; // Hide other posters
              }
          });
      });
  });
});
