document.addEventListener("DOMContentLoaded", () => {

    const element_one = document.querySelector('nav');
    const element_two = document.querySelector('main');
    const element_three = document.querySelector('footer');
    const element_four = document.querySelector('header');
    const splash_loader = document.querySelector('.splash-loader');

    const text = document.querySelector(".loader-percentage");
    const loaderFill = document.getElementById("loader-fill");

    element_one.style.visibility = "hidden";
    element_two.style.visibility = "hidden";
    element_three.style.visibility = "hidden";
    element_four.style.visibility = "hidden";

    let percentage = 0;

    let progressInterval = setInterval(() => {
        if (percentage < 90) {  
            percentage++;
            text.textContent = percentage + " %";
            loaderFill.style.width = percentage + "%";
        }
    }, 25);

    function finishLoading() {
        clearInterval(progressInterval);
        percentage = 100;
        text.textContent = "100 %";
        loaderFill.style.width = "100%";

        setTimeout(() => {
            splash_loader.style.opacity = "0";
            splash_loader.style.pointerEvents = "none";

            element_one.style.visibility = "visible";
            element_two.style.visibility = "visible";
            element_three.style.visibility = "visible";
            element_four.style.visibility = "visible";
        }, 400);
    }

    const heroImages = document.querySelectorAll(".Home img");

    let loadedImages = 0;

    if (heroImages.length === 0) {
        finishLoading();
    } else {
        heroImages.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener("load", () => {
                    loadedImages++;
                    if (loadedImages === heroImages.length) finishLoading();
                });
                img.addEventListener("error", () => {
                    loadedImages++;
                    if (loadedImages === heroImages.length) finishLoading();
                });
            }
        });
    }

    setTimeout(finishLoading, 2500);
});

