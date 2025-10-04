const form = document.getElementById('contact-form');
const status = document.getElementById('status');
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3cFgTjhVsqTJSko5O5NPwgX2iBqCP8TAq5KYhfTdWFqW5GAmvYPvoKc0B2XGmC5Le/exec"; // Paste Apps Script Web App URL here

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    status.innerHTML = `Sending Email <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`; status.style.color = "black";
    status.style.fontSize = "14px";
    status.style.fontFamily = "var(--Paragraph-Font)";

    fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                status.textContent = "Thank you! I’ll reply soon ... ✌️";
                status.style.color = "black";
                status.style.fontSize = "14px";
                status.style.fontFamily = "var(--Paragraph-Font)";
                form.reset();
            } else {
                status.textContent = "Failed to send ... !";
                status.style.color = "#FF7F7F";
                status.style.fontSize = "14px";
                status.style.fontFamily = "var(--Paragraph-Font)";
            }
        })
        .catch(err => {
            status.textContent = "App Script crashed. We’ll be back soon ... !";
            status.style.color = "#FF7F7F";
            status.style.fontSize = "14px";
            status.style.fontFamily = "var(--Paragraph-Font)";
            console.error(err);
        });
});

