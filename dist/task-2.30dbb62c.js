const animatedEl = document.querySelector(".animationEl");
const animatedEl2 = document.querySelector(".animationEl2");
let countWidth = 100;
let isMoving = true;
let countWidth2 = 50;
let isMoving2 = true;
intervalId = setInterval(()=>{
    if (isMoving === true) {
        countWidth++;
        console.log(countWidth);
        if (countWidth === 1000) isMoving = false;
    } else {
        countWidth--;
        console.log(countWidth);
        if (countWidth === 100) isMoving = true;
    }
    animatedEl.style.width = `${countWidth}px`;
}, 5);
intervalId2 = setInterval(()=>{
    if (isMoving2 === true) {
        countWidth2++;
        console.log(countWidth2);
        if (countWidth2 === 1000) isMoving2 = false;
    } else {
        countWidth2--;
        console.log(countWidth2);
        if (countWidth2 === 50) isMoving2 = true;
    }
    animatedEl2.style.width = `${countWidth2}px`;
}, 4);

//# sourceMappingURL=task-2.30dbb62c.js.map
