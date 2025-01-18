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