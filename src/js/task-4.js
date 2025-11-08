const inputEl = document.querySelector(".input-field");
const startBtn = document.querySelector(".start");
let time = 0;
let timerId = null;
let isRuning = false;

function timer() {
  if (isRuning) return;
  time = inputEl.value;
  isRuning = true;
  timerId = setInterval(() => {
    time--;
      console.log(time);
      
    if (time === 0) {
      clearInterval(timerId);
      isRuning = false;
      alert("час вийшов");
    }
  }, 1000);
}
startBtn.addEventListener("click", timer);
