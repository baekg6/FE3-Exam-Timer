const app = document.querySelector("#app");

const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

const btnStart = document.querySelector(".btn.start");
const btnReset = document.querySelector(".btn.reset");

let hour = 0;
let min = 0;
let sec = 0;

hours.addEventListener("click", (e) => {
    hour += 1;
    if (hour > 23) {
        hour = 0;
    }
    hours.innerHTML = `<span>${String(hour).padStart(2, "0")}</span>`;
});
minutes.addEventListener("click", (e) => {
    min += 10;
    if (min > 59) {
        min = 0;
    }
    minutes.innerHTML = `<span>${String(min).padStart(2, "0")}</span>`;
});
seconds.addEventListener("click", (e) => {
    second += 10;
    if (second > 59) {
        second = 0;
    }
    seconds.innerHTML = `<span>${String(second).padStart(2, "0")}</span>`;
});
