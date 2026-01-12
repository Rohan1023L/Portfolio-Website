document.addEventListener("DOMContentLoaded", function () {

    // NAV LINKS
    const navHome = document.getElementById("nav-home");
    const navSkill = document.getElementById("nav-skill");
    const navProject = document.getElementById("nav-project");
    const navAbout = document.getElementById("nav-about");

    // SECTIONS
    const homeSection = document.getElementById("Home");
    const skillSection = document.querySelector(".Skill");
    const projectSection = document.querySelector(".Project");
    const aboutSection = document.getElementById("About-Me");

    const navLinks = [navHome, navSkill, navProject, navAbout];

    function removeActive() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    function setActive(link) {
        removeActive();
        link.classList.add("active");
    }

    function onScrollHighlight() {
        const scrollPos = window.scrollY + 150;

        if (homeSection.offsetTop <= scrollPos &&
            homeSection.offsetTop + homeSection.offsetHeight > scrollPos) {
            setActive(navHome);
        }
        else if (skillSection.offsetTop <= scrollPos &&
            skillSection.offsetTop + skillSection.offsetHeight > scrollPos) {
            setActive(navSkill);
        }
        else if (projectSection.offsetTop <= scrollPos &&
            projectSection.offsetTop + projectSection.offsetHeight > scrollPos) {
            setActive(navProject);
        }
        else if (aboutSection.offsetTop <= scrollPos &&
            aboutSection.offsetTop + aboutSection.offsetHeight > scrollPos) {
            setActive(navAbout);
        }
    }

    window.addEventListener("scroll", onScrollHighlight);
});

