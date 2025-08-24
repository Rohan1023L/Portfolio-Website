const slides = [
  {
    img: "",
    heading: "<div id='heading'></div>",
    caption: "<div id='caption'></div>",
  },
  {
    img: "../assets/images/Who-Am-I.png",
    heading: "Who am I ?",
    caption: "<div>I’m a <b>Web Developer</b> crafting <b>Websites</b> with <b>Designing Tool's</b> & <b>Framework's</b>.</div>",
  },
  {
    img: "../assets/images/What-I-Do.png",
    heading: "What I do?",
    caption: "<div>Building <b>Frontend</b>, <b>Backend</b>, <b>IoT</b> solutions & <b>Freelance</b> projects.</div>",
  }
];

let current = 0;

const imgElement = document.querySelector(".img-reflect img");
const headingElement = document.querySelector(".img-heading-caption p");
const captionElement = document.querySelector(".img-sub-caption");

const indicators = [
  document.getElementById("nav-circle"),
  document.getElementById("nav-circle-one"),
  document.getElementById("nav-circle-two")
];

function getGreetingText() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning ... ☀️";
  if (hour >= 12 && hour < 17) return "Good Afternoon ... ⛅";
  if (hour >= 17 && hour < 21) return "Good Evening ... ⛅";
  return "Good Night ... 💤";
}

function getCaptionText() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Wishing you a fresh and productive start to your day.";
  if (hour >= 12 && hour < 17) return "Hope your day is going well and full of energy.";
  if (hour >= 17 && hour < 21) return "Relax and enjoy the calmness of the evening.";
  return "Time to rest well and recharge for tomorrow.";
}

function getTimeBasedImage() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "../assets/images/Sun.png";
  if (hour >= 12 && hour < 19) return "../assets/images/Cloud.png";
  if (hour >= 20 && hour < 21) return "../assets/images/Moon.png";
  return "../assets/images/Moon.png";
}

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
  if (current === 0) slides[0].img = getTimeBasedImage();
  const { img, heading, caption } = slides[current];
  imgElement.src = img;
  headingElement.innerHTML = heading;
  captionElement.innerHTML = caption;
  if (current === 0) {
    const headingId = document.getElementById("heading");
    const captionId = document.getElementById("caption");
    if (headingId) headingId.innerHTML = getGreetingText();
    if (captionId) captionId.innerHTML = getCaptionText();
  }
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

document.querySelector(".left .nav-left").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide("right");
  resetAutoSlide();
});

document.querySelector(".right .nav-left").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide("left");
  resetAutoSlide();
});

indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const direction = index > current ? "left" : "right";
    current = index;
    updateSlide(direction);
    resetAutoSlide();
  });
});

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

[imgElement, headingElement, captionElement].forEach(el => {
  el.addEventListener("mouseenter", () => clearInterval(autoSlide));
  el.addEventListener("mouseleave", () => resetAutoSlide());
  el.addEventListener("touchstart", () => clearInterval(autoSlide));
  el.addEventListener("touchend", () => resetAutoSlide());
});

startAutoSlide();
updateSlide();
