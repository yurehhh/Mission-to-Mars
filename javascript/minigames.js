// Updating time and date
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

const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

// Update food position
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

// Handle game over
const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert(`Game Over! Your final score is: ${score}`);
  location.reload();
};

// Change direction based on user input
const changeDirection = e => {
  if(e.key === "ArrowUp" && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
  } else if(e.key === "ArrowDown" && velocityY !== -1) {
      velocityX = 0;
      velocityY = 1;
  } else if(e.key === "ArrowLeft" && velocityX !== 1) {
      velocityX = -1;
      velocityY = 0;
  } else if(e.key === "ArrowRight" && velocityX !== -1) {
      velocityX = 1;
      velocityY = 0;
  }
};

controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
  if(gameOver) return handleGameOver();

  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if(snakeX === foodX && snakeY === foodY) {
      updateFoodPosition();
      snakeBody.push([foodY, foodX]);
      score++;
      highScore = Math.max(score, highScore);
      localStorage.setItem("high-score", highScore);
      scoreElement.innerText = `Score: ${score}`;
      highScoreElement.innerText = `High Score: ${highScore}`;
  }

  snakeX += velocityX;
  snakeY += velocityY;

  for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY];

  if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30 || isSnakeCollision()) {
      gameOver = true;
  }

  html += renderSnake();

  playBoard.innerHTML = html;
};

// Render snake body
const renderSnake = () => {
  return snakeBody.map((segment, index) => {
      return `<div class="head" style="grid-area: ${segment[1]} / ${segment[0]}"></div>`;
  }).join('');
};

// Check if snake collides with itself
const isSnakeCollision = () => {
  for (let i = 1; i < snakeBody.length; i++) {
      if (snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
          return true;
      }
  }
  return false;
};

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);
