const ReadContext = document.querySelector('.detail-text');
const Description = document.querySelector('.about-us-description');
const Internship = document.querySelector('.about-us-internship');

let currentMode = window.innerWidth >= 1024 ? "desktop" : "mobile";

function setOptions(active = "1") {
    ReadContext.innerHTML = `
        <span data-value="1" class="${active === "1" ? "active" : ""}">Personal Information</span>
        <span style="color: #444746;font-size: 10px;">/</span>
        <span data-value="2" class="${active === "2" ? "active" : ""}">Internship Details</span>
        <span style="color: #444746;font-size: 10px;">/</span>
        <span data-value="back">Back</span>
    `;
}

function showDescription() {
    Description.classList.add('open');
    Internship.classList.remove('open');
    setOptions("1");
}

function showInternship() {
    Internship.classList.add('open');
    Description.classList.remove('open');
    setOptions("2");
}

function resetView() {
    Description.classList.remove('open');
    Internship.classList.remove('open');
    ReadContext.textContent = 'Read More';
}

function updateView(force = false) {
    const newMode = window.innerWidth >= 1024 ? "desktop" : "mobile";

    // Only re-render if breakpoint actually changed OR if forced
    if (newMode !== currentMode || force) {
        currentMode = newMode;
        if (newMode === "desktop" || "mobile") {
            showDescription();
        } else {
            resetView();
        }
    }
}

updateView(true);

window.addEventListener('resize', () => updateView());

// Handle clicks
ReadContext.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

    // Mobile: If "Read More" clicked
    if (!value && ReadContext.textContent === 'Read More') {
        showDescription(); // open 1 by default
        return;
    }

    if (value === '1') {
        showDescription();
    } else if (value === '2') {
        showInternship();
    } else if (value === 'back') {
        if (currentMode === "desktop") {
            // Desktop → go back to default (1)
            showDescription();
        } else {
            // Mobile → back to Read More
            resetView();
        }
    }
});
