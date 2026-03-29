downloadBtn.addEventListener('click', async () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1NHd00o6Elkr_8ZR3hZIKO4iZIcKJ3_Oi";

    downloadBtn.innerHTML = "Downloading <span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
    downloadBtn.style.fontSize = "14px";
    downloadBtn.disabled = true;

    try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = "Rohan_Ingle.pdf"; 
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

    } catch (error) {
        console.error("Download failed:", error);
    }

    setTimeout(() => {
        downloadBtn.innerHTML = "<div><i class='fa-solid fa-download'></i></div> Resume";
        downloadBtn.disabled = false;
    }, 3000);
});
