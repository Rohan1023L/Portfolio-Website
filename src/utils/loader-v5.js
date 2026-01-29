document.addEventListener("DOMContentLoaded", () => {

    const splashLoader = document.querySelector(".splash-loader");
    const text = document.querySelector(".loader-percentage");
    const loaderFill = document.getElementById("loader-fill");

    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");

    [nav, main, footer, header].forEach(el => {
        if (el) el.style.visibility = "hidden";
    });

    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    function updateProgress() {
        const percent = Math.round((loadedImages / totalImages) * 100);
        text.textContent = percent + " %";
        loaderFill.style.width = percent + "%";
    }

    function finishLoading() {
        text.textContent = "100 %";
        loaderFill.style.width = "100%";

        setTimeout(() => {
            splashLoader.classList.add("hide");

            [nav, main, footer, header].forEach(el => {
                if (el) el.style.visibility = "visible";
            });

        }, 400);
    }

    if (totalImages === 0) {
        finishLoading();
    } else {
        Array.from(images).forEach(img => {
            if (img.complete) {
                loadedImages++;
                updateProgress();
                if (loadedImages === totalImages) finishLoading();
            } else {
                img.addEventListener("load", () => {
                    loadedImages++;
                    updateProgress();
                    if (loadedImages === totalImages) finishLoading();
                });

                img.addEventListener("error", () => {
                    loadedImages++;
                    updateProgress();
                    if (loadedImages === totalImages) finishLoading();
                });
            }
        });
    }

    setTimeout(() => {
        if (!splashLoader.classList.contains("hide")) {
            finishLoading();
        }
    }, 3000);

});





