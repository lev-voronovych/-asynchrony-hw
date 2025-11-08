let count = 0;

const intervalId = setInterval(() => {
    count++;
    // console.log(count);
    console.log("повідомлення");

    if (count === 5) {
      clearInterval(intervalId);
    }
} ,1000);
console.log(intervalId)

