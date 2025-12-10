// JavaScript
const slides = [
  {
    img: "https://cdn.jsdelivr.net/gh/Rohan1023L/Portfolio-Website@main/src/assets/images/Who-Am-I-v2.png",
    heading: "|| Karmanye Vadhikaraste ||",
    caption: "<div>Focus on action, not the reward.</div>",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/Rohan1023L/Portfolio-Website@main/src/assets/images/What-I-Do-v1.png",
    heading: "|| Work Is Worship ||",
    caption: "<div>When done with purpose, it becomes art.</div>",
  }
];

let current = 0;

const imgElement = document.querySelector(".img-reflect img");
const headingElement = document.querySelector(".img-heading-caption"); 
const captionElement = document.querySelector(".img-sub-caption");

const indicators = [
  document.getElementById("nav-circle"),
  document.getElementById("nav-circle-one"),
];

function animateSlide(direction) {
  const className = direction === "left" ? "slide-left" : "slide-right";
  [imgElement, headingElement, captionElement].forEach(el => {
    el.classList.add(className);
  });
  setTimeout(() => {
    [imgElement, headingElement, captionElement].forEach(el => {
      el.classList.remove(className);
    });
  }, 500);
}

function updateSlide(direction = "left") {
  const { img, heading, caption } = slides[current];
  imgElement.src = img;
  headingElement.innerHTML = heading;
  captionElement.innerHTML = caption;
  indicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });
  animateSlide(direction);
}

let autoSlide;

function startAutoSlide() {
  autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlide("left");
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Navigation
// Navigation buttons
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

btnLeft.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide("right");
    resetAutoSlide();
});

btnRight.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlide("left");
    resetAutoSlide();
});


// Indicator click
indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const direction = index > current ? "left" : "right";
    current = index;
    updateSlide(direction);
    resetAutoSlide();
  });
});

// Swipe gestures
const swipeElements = [imgElement, headingElement, captionElement];
let startX = 0, endX = 0;

swipeElements.forEach(el => {
  el.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
  el.addEventListener("touchmove", e => { endX = e.touches[0].clientX; });
  el.addEventListener("touchend", () => {
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        current = (current - 1 + slides.length) % slides.length;
        updateSlide("right");
      } else {
        current = (current + 1) % slides.length;
        updateSlide("left");
      }
      resetAutoSlide();
    }
    startX = 0; endX = 0;
  });
});

// Pause on hover/touch
[imgElement, headingElement, captionElement].forEach(el => {
  el.addEventListener("mouseenter", () => clearInterval(autoSlide));
  el.addEventListener("mouseleave", () => resetAutoSlide());
  el.addEventListener("touchstart", () => clearInterval(autoSlide));
  el.addEventListener("touchend", () => resetAutoSlide());
});

// Initialize
startAutoSlide();
updateSlide();
