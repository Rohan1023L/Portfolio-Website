
function buildTimeline() {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = ""; 

    const specs = document.querySelectorAll(".skill-specification");
    const sets = document.querySelectorAll(".skill-set");

    specs.forEach((spec, index) => {
        const specMiddle = spec.offsetTop + (spec.offsetHeight / 2);

        const dot = document.createElement("div");
        dot.className = "dot-of-line";
        dot.style.top = (specMiddle - 6) + "px"; 
        timeline.appendChild(dot);

        const line = document.createElement("div");
        line.className = "dot-line";
        line.style.top = specMiddle + "px"; 

        if (index < specs.length - 1) {
            const nextSpec = specs[index + 1];
            const nextMiddle = nextSpec.offsetTop + (nextSpec.offsetHeight / 2);
            line.style.height = (nextMiddle - specMiddle) + "px";
        } else {
            const lastSet = sets[index];
            line.style.height = lastSet.offsetHeight + "px";
        }

        timeline.appendChild(line);
    });
}

window.addEventListener("load", buildTimeline);
window.addEventListener("resize", buildTimeline);
