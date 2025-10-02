const links = {
    uba: "http://uba.stvincentngp.edu.in",
    palfta: "https://github.com/Rohan1023L"
  };

  const Uba = document.querySelector("#UBA");
  const Palfta = document.querySelector(".github-setup");

  Uba.addEventListener("click", () => {
    window.open(links.uba, "_blank");
  });

  Palfta.addEventListener("click", () => {
    window.open(links.palfta, "_blank");
  });