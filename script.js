// Example JavaScript: Smooth scroll on anchor clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anachor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
