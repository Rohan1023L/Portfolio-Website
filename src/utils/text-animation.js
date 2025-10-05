const container = document.querySelector(".site-header-heading");
const texts = ["Rohan Ingle", "Web Think's"];
const typingSpeed = 150;
const deletingSpeed = 75;
const blinkDuration = 1500; 

let textIndex = 0, charIndex = 0, isDeleting = false;

const underscore = document.createElement('span');
underscore.textContent = "_";
underscore.classList.add('underscore');
container.appendChild(underscore);

function updateText() {
    const current = texts[textIndex];
    if (!isDeleting) {
        charIndex++;
        container.textContent = current.slice(0, charIndex);
        container.appendChild(underscore);
        if (charIndex === current.length) {
            underscore.classList.add('blinking');
            setTimeout(() => {
                underscore.classList.remove('blinking');
                isDeleting = true;
                updateText();
            }, blinkDuration);
        } else {
            setTimeout(updateText, typingSpeed);
        }
    } else {
        charIndex--;
        container.textContent = current.slice(0, charIndex);
        container.appendChild(underscore);
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(updateText, typingSpeed);
        } else {
            setTimeout(updateText, deletingSpeed);
        }
    }
}

updateText();
