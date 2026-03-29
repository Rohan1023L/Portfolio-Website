downloadBtn.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1C4nmvONJ5SdSXixvb03P1Pgs8MAkWWsW";

    downloadBtn.innerHTML = "Downloading <span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
    downloadBtn.style.fontSize = "14px";
    downloadBtn.disabled = true;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = fileUrl;

    document.body.appendChild(iframe);

    setTimeout(() => {
        downloadBtn.innerHTML = "<div><i class='fa-solid fa-download'></i></div> Resume";
        downloadBtn.disabled = false;

        document.body.removeChild(iframe);
    }, 3000);
});
