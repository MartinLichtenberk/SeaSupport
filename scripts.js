let firstBtn = document.getElementById("first");
let secondBtn = document.getElementById("second");
let thirdBtn = document.getElementById("third");
let showFirst = document.querySelectorAll(".first");
let showSecond = document.querySelectorAll(".second");
let showThird = document.querySelectorAll(".third");

firstBtn.addEventListener("click", () => {
    showFirst.forEach((item) => {
        item.style.display = "flex";
    })
    showSecond.forEach((item) => {
        item.style.display = "none";
    })
    showThird.forEach((item) => {
        item.style.display = "none";
    })
});
secondBtn.addEventListener("click", () => {
    showFirst.forEach((item) => {
        item.style.display = "none";
    })
    showSecond.forEach((item) => {
        item.style.display = "flex";
    })
    showThird.forEach((item) => {
        item.style.display = "none";
    })
});
thirdBtn.addEventListener("click", () => {
    showFirst.forEach((item) => {
        item.style.display = "none";
    })
    showSecond.forEach((item) => {
        item.style.display = "none";
    })
    showThird.forEach((item) => {
        item.style.display = "flex";
    })
});