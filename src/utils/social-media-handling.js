const links = {
    linkedin: "https://www.linkedin.com/in/rohan1023l/",
    github: "https://github.com/Rohan1023L"
  };

  const linkedinBtn = document.querySelector(".linkedin-setup");
  const githubBtn = document.querySelector(".github-setup");

  linkedinBtn.addEventListener("click", () => {
    window.open(links.linkedin, "_blank");
  });

  githubBtn.addEventListener("click", () => {
    window.open(links.github, "_blank");
  });