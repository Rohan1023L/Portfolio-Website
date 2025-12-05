const element_one = document.querySelector('nav');
const element_two = document.querySelector('main');
const element_three = document.querySelector('footer');
const element_four = document.querySelector('header');
const splash_loader = document.querySelector('.splash-loader');

element_one.style.display = "none";
element_two.style.display = "none";
element_three.style.display = "none";
element_four.style.display = "none";

let percentage = 0;
let text = document.querySelector(".loader-percentage");
let loaderFill = document.getElementById("loader-fill");

let interval = setInterval(() => {
    if (percentage < 99) {
        percentage++;
        text.textContent = percentage + " %";
        loaderFill.style.width = percentage + "%";
    }
}, 20);


// When page is fully loaded
window.onload = function () {

    percentage = 100;
    text.textContent = "100 %";
    loaderFill.style.width = "100%";

    setTimeout(() => {
        splash_loader.style.display = "none";

        element_one.style.display = "";
        element_two.style.display = "";
        element_three.style.display = "";
        element_four.style.display = "";
    }, 300);
};
