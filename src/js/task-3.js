const startBtn = document.querySelector(".start");
const targetEl = document.querySelector(".target");
const fieldEl = document.querySelector(".field");
const resetBtn = document.querySelector(".reset-btn");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");

let score = 0;
let time = 30;
let isStarted = false;
let timerId = null;

function startGame() {
  if (isStarted) return;
  isStarted = true;
  console.log("start");
  timerId = setInterval(() => {
    time--;
    console.log(time);

    if (time === 0) {
      clearInterval(timerId);
      isStarted = false;
      alert("час вийшов");
    }
    timeEl.textContent = `time: ${time}`;
  }, 1000);
}

function addScore() {
  console.log("add score");
  if (isStarted === true) {
    score++;
    scoreEl.textContent = `score: ${score}`;
    console.log(score);

    const fieldRect = fieldEl.getBoundingClientRect();
    const targetSize = targetEl.offsetWidth;

    const randomX = Math.random() * (fieldRect.width - targetSize);
    const randomY = Math.random() * (fieldRect.height - targetSize);

    targetEl.style.left = `${randomX}px`;
    targetEl.style.top = `${randomY}px`;
  }
}

function resetGame() {
  clearInterval(timerId);
  isStarted = false;
  targetEl.style.left = "50px";
  targetEl.style.top = "50px";
  time = 30;
  score = 0;
  scoreEl.textContent = `score: ${score}`;
  timeEl.textContent = `час: ${time} `;
  console.log("reset");
}

targetEl.addEventListener("click", addScore);
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
