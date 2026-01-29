document.addEventListener("DOMContentLoaded", () => {

    const element_one = document.querySelector('nav');
    const element_two = document.querySelector('main');
    const element_three = document.querySelector('footer');
    const element_four = document.querySelector('header');
    const splash_loader = document.querySelector('.splash-loader');

    const text = document.querySelector(".loader-percentage");
    const loaderFill = document.getElementById("loader-fill");

    // Hide page content first
    element_one.style.visibility = "hidden";
    element_two.style.visibility = "hidden";
    element_three.style.visibility = "hidden";
    element_four.style.visibility = "hidden";

    let loaded = 0;

    const images = document.images;
    const scripts = document.querySelectorAll("script[src]");

    const totalResources = images.length + scripts.length || 1;

    function updateLoader() {
        loaded++;
        let percent = Math.floor((loaded / totalResources) * 100);

        text.textContent = percent + " %";
        loaderFill.style.width = percent + "%";

        if (loaded >= totalResources) {
            setTimeout(() => {
                splash_loader.style.opacity = "0";
                splash_loader.style.pointerEvents = "none";

                element_one.style.visibility = "visible";
                element_two.style.visibility = "visible";
                element_three.style.visibility = "visible";
                element_four.style.visibility = "visible";
            }, 500);
        }
    }

    // Track image loading
    Array.from(images).forEach(img => {
        if (img.complete) {
            updateLoader();
        } else {
            img.addEventListener("load", updateLoader);
            img.addEventListener("error", updateLoader);
        }
    });

    // Track script loading
    scripts.forEach(script => {
        script.addEventListener("load", updateLoader);
        script.addEventListener("error", updateLoader);
    });

});
