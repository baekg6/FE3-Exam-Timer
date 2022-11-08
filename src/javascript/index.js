const app = document.querySelector("#app");

const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

const btnStart = document.querySelector(".btn.start");
const btnReset = document.querySelector(".btn.reset");

let hour = 0;
let min = 0;
let sec = 0;

let flag = 0; //0 초기, 1 시간 설정, 2 시작, 3 정지

function btnSetting(flag) {
    if (flag === 0) {
        btnStart.classList.add("disabled");
        const stImg = btnStart.querySelector("img");
        stImg.setAttribute("src", "src/asset/icon-start-disabled.svg");
        btnReset.classList.add("disabled");
        const rsImg = btnReset.querySelector("img");
        rsImg.setAttribute("src", "src/asset/icon-reset-disabled.svg");
    }
    if (flag === 1) {
        btnStart.classList.remove("disabled");
        const stImg = btnStart.querySelector("img");
        stImg.setAttribute("src", "src/asset/icon-start.svg");
        btnReset.classList.remove("disabled");
        const rsImg = btnReset.querySelector("img");
        rsImg.setAttribute("src", "src/asset/icon-reset.svg");
    }
    if (flag === 3) {
        btnStart.classList.remove("disabled");
        btnStart.classList.remove("start");
        btnStart.classList.add("pause");
        btnStart.innerHTML = `<img src="src/asset/icon-stop.svg" alt=""> pause`;
    }
}

// 시간처리
hours.addEventListener("click", (e) => {
    hour += 1;
    if (hour > 23) {
        hour = 0;
    }
    hours.innerHTML = `<span>${String(hour).padStart(2, "0")}</span>`;
    flag = 1;
    btnSetting(flag);
});
minutes.addEventListener("click", (e) => {
    min += 10;
    if (min > 59) {
        min = 0;
    }
    minutes.innerHTML = `<span>${String(min).padStart(2, "0")}</span>`;
    flag = 1;
    btnSetting(flag);
});
seconds.addEventListener("click", (e) => {
    sec += 10;
    if (sec > 59) {
        sec = 0;
    }
    seconds.innerHTML = `<span>${String(sec).padStart(2, "0")}</span>`;
    flag = 1;
    btnSetting(flag);
});

// 버튼 설정
btnStart.addEventListener("click", (e) => {
    // console.log("click");
    console.log(flag);
    if (flag === 0) {
        alert("시간을 먼저 설정해주세요");
    }
    if (flag === 1) {
        // 타이머 처리
        flag = 2;
    }
    if (flag === 2) {
        flag = 3;
        btnSetting(flag);
    }
});
