const links = {
  uba: "http://uba.stvincentngp.edu.in",
  palfta: "https://github.com/Rohan1023L",
};

// Select elements
const ubaBtn = document.querySelector("#UBA");
const palftaBtn = document.querySelector(".github-setup");
const viewWorkBtn = document.querySelector(".view-work");

// Add click events safely
if (ubaBtn) {
  ubaBtn.addEventListener("click", () => {
    window.open(links.uba, "_blank");
  });
}

if (palftaBtn) {
  palftaBtn.addEventListener("click", () => {
    window.open(links.palfta, "_blank");
  });
}

if (viewWorkBtn) {
  viewWorkBtn.addEventListener("click", () => {
    const projectSection = document.querySelector("#Project");
    const header = document.querySelector("header"); // assuming you have a fixed header
    const headerHeight = header ? header.offsetHeight : 0;

    if (projectSection) {
      const sectionTop = projectSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight, // offset by header height
        behavior: "smooth"
      });
    }
  });
}
