function setupMenu() {
    let menuToggle = document.querySelector(".menu-toggle");

    if (menuToggle) {
        menuToggle.addEventListener("click", function (e) {
            menuToggle.classList.toggle("active");
        });
    }
}

function showHeroBg() {
    let heroBg = document.querySelector("#hero-img img");
    heroBg.addEventListener("load", function () {
        heroBg.style.opacity = 1;
        heroBg.style.transform = `scale(1)`;
        // heroBg.style.transform = `translateY(0)`;
    });
}

// Setup feather icons
feather.replace();

setupMenu();
showHeroBg();
