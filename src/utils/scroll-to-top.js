  const btn = document.getElementById("scrollTopBtn");

        window.addEventListener("scroll", () => {
            let scrollTop = document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (scrollTop / height) * 102;

            btn.style.setProperty("--scroll", scrolled + "%");

            if (scrollTop > 200) {
                btn.classList.remove("hide");
            } else {
                btn.classList.add("hide");
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
