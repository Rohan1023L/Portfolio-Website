downloadBtn.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1NHd00o6Elkr_8ZR3hZIKO4iZIcKJ3_Oi";

    downloadBtn.innerHTML = "Downloading <span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
    downloadBtn.style.fontSize = "14px";
    downloadBtn.disabled = true;

    const a = document.createElement('a');
    a.href = fileUrl;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
        downloadBtn.innerHTML = "<div><i class='fa-solid fa-download'></i></div> Resume";
        downloadBtn.disabled = false;
    }, 3000);
});
