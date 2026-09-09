function openSurprise() {

    // Start fade-out
    document.body.style.transition = "opacity 0.7s ease";
    document.body.style.opacity = "0";

    // Go to Page 2
    setTimeout(function () {
        window.location.href = "./page2.html";
    }, 700);
}