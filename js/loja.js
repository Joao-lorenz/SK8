const tenis1 = document.getElementById("tenis-1");
const tenis2 = document.getElementById("tenis-2");

const setaRight = document.getElementById("right");
const setaLeft = document.getElementById("left");

setaLeft.addEventListener("click", () => {
    tenis1.style.left = "610px";
    tenis2.style.left = "-10px";
})

setaRight.addEventListener("click", () => {
    tenis1.style.left = "-10px";
    tenis2.style.left = "610px";
})