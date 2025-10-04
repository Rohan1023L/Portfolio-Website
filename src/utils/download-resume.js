

downloadBtn.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=17gWCQPnUwfVYzPe_MAih8OZpEEvTRFOE";

    downloadBtn.innerHTML = "Downloading <span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span>";
    downloadBtn.style.fontSize = "14px";
    downloadBtn.disabled = true; 
    const a = document.createElement('a');
    a.href = fileUrl;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
        downloadBtn.innerHTML = "<div><i class='fa-solid fa-download'></i></div> Resume";
        downloadBtn.disabled = false;
    }, 3000);
});