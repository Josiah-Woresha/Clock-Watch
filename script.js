const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");



const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();
setInterval(setClock, 1000)

const hours = document.querySelector(".watch-hours");
const mins = document.querySelector(".watch-minutes");
const secs = document.querySelector(".watch-seconds");

const setWatch = () => {
    let days = new Date();
    let h = days.getHours().toString().padStart(2, '0');
    let m = days.getMinutes().toString().padStart(2, '0');
    let s = days.getSeconds().toString().padStart(2, '0');

    hours.textContent = h;
    mins.textContent = m;
    secs.textContent = s;
}

setWatch();
setInterval(setWatch, 1000);
