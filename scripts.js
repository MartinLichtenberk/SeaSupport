const firstBtn = document.getElementById("first");
const secondBtn = document.getElementById("second");
const thirdBtn = document.getElementById("third");
const showFirst = document.querySelectorAll(".first");
const showSecond = document.querySelectorAll(".second");
const showThird = document.querySelectorAll(".third");

function turnOff() {
    showFirst.forEach((item) => {
        item.style.display = "none";
    })
    showSecond.forEach((item) => {
        item.style.display = "none";
    })
    showThird.forEach((item) => {
        item.style.display = "none";
    })
}

firstBtn.addEventListener("click", () => {
    turnOff();
    showFirst.forEach((item) => {
        item.style.display = "flex";
    })
});
secondBtn.addEventListener("click", () => {
    turnOff();
    showSecond.forEach((item) => {
        item.style.display = "flex";
    })
});
thirdBtn.addEventListener("click", () => {
    turnOff();
    showThird.forEach((item) => {
        item.style.display = "flex";
    })
});