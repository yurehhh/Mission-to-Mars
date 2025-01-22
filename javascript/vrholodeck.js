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

  // Tijd en datum bijwerken
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');

  function updateTimeAndDate() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();

      timeEl.textContent = `${hours}:${minutes}`;
      dateEl.textContent = `${day}/${month}/${year}`;
  }

  setInterval(updateTimeAndDate, 1000);
  updateTimeAndDate();

  // Functies voor knoppen
  document.querySelector('.explore').addEventListener('click', () => {
      alert('Simulatie: Verken de Melkweg geactiveerd!');
  });

  document.querySelector('.portal').addEventListener('click', () => {
      alert('Portaal naar een onbekende dimensie geopend!');
  });