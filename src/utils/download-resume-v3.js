downloadBtn.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1NHd00o6Elkr_8ZR3hZIKO4iZIcKJ3_Oi";

    downloadBtn.innerHTML = "Downloading <span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
    downloadBtn.style.fontSize = "14px";
    downloadBtn.disabled = true;

    // ✅ Create hidden iframe (no new tab)
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = fileUrl;

    document.body.appendChild(iframe);

    setTimeout(() => {
        downloadBtn.innerHTML = "<div><i class='fa-solid fa-download'></i></div> Resume";
        downloadBtn.disabled = false;

        document.body.removeChild(iframe); // cleanup
    }, 3000);
});
