const inputEl = document.querySelector(".input-field");

let time = inputEl.value
let timerId = null
let isRuning = false

console.log(time)

function timer() {
    if (isRuning) return;
    isRuning = true
        timerId = setInterval(() => {
            time--
            console.log(time)
            if (time === 0) {
                clearInterval(timerid)
                alert("час вийшов")
            }
     },1000)   
}
inputEl.addEventListener("input",timer)