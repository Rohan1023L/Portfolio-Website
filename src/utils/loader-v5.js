// document.addEventListener("DOMContentLoaded", () => {

//     const element_one = document.querySelector('nav');
//     const element_two = document.querySelector('main');
//     const element_three = document.querySelector('footer');
//     const element_four = document.querySelector('header');
//     const splash_loader = document.querySelector('.splash-loader');

//     const text = document.querySelector(".loader-percentage");
//     const loaderFill = document.getElementById("loader-fill");

//     element_one.style.visibility = "hidden";
//     element_two.style.visibility = "hidden";
//     element_three.style.visibility = "hidden";
//     element_four.style.visibility = "hidden";

//     let percentage = 0;

//     let progressInterval = setInterval(() => {
//         if (percentage < 90) {  
//             percentage++;
//             text.textContent = percentage + " %";
//             loaderFill.style.width = percentage + "%";
//         }
//     }, 25);

//     function finishLoading() {
//         clearInterval(progressInterval);
//         percentage = 100;
//         text.textContent = "100 %";
//         loaderFill.style.width = "100%";

//         setTimeout(() => {
//             splash_loader.style.opacity = "0";
//             splash_loader.style.pointerEvents = "none";

//             element_one.style.visibility = "visible";
//             element_two.style.visibility = "visible";
//             element_three.style.visibility = "visible";
//             element_four.style.visibility = "visible";
//         }, 400);
//     }

//     const heroImages = document.querySelectorAll(".Home img");

//     let loadedImages = 0;

//     if (heroImages.length === 0) {
//         finishLoading();
//     } else {
//         heroImages.forEach(img => {
//             if (img.complete) {
//                 loadedImages++;
//             } else {
//                 img.addEventListener("load", () => {
//                     loadedImages++;
//                     if (loadedImages === heroImages.length) finishLoading();
//                 });
//                 img.addEventListener("error", () => {
//                     loadedImages++;
//                     if (loadedImages === heroImages.length) finishLoading();
//                 });
//             }
//         });
//     }

//     setTimeout(finishLoading, 2500);
// });

document.addEventListener("DOMContentLoaded", () => {

    const splashLoader = document.querySelector(".splash-loader");
    const text = document.querySelector(".loader-percentage");
    const loaderFill = document.getElementById("loader-fill");

    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");

    // Hide main content while loading
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

    // Backup: If something hangs, force finish after 3s
    setTimeout(() => {
        if (!splashLoader.classList.contains("hide")) {
            finishLoading();
        }
    }, 3000);

});




