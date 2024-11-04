let letters = "0123456789ABCDEF";
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))];
}

let favicon = document.getElementById("favicon");
let copy = document.getElementById("color");
let text = document.querySelector("#show-text");
let urlcolor = "https://www.colorhexa.com/" + color.slice(1) + ".png";

function copyLabelText() {
    let labelText = document.getElementById("color").innerText;
    navigator.clipboard.writeText(labelText)
};

copy.addEventListener("click", function () {
    text.classList.remove("hidden");
    setTimeout(function () {
        text.style.opacity = 0;
    }, 1000);
    text.style.opacity = 100;
});

text.addEventListener("transitionend", function () {
    text.classList.add("hidden");
    text.style.opacity = 100;
});

document.body.style.background = color;
document.querySelector("label").textContent = color;
document.querySelector("title").textContent = color;
favicon.setAttribute("href", urlcolor);
