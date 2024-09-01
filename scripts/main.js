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

    heroBg.style.transitionDelay = "500ms";
    heroBg.style.opacity = 1;
    heroBg.style.transform = `scale(1)`;
}

function setupAnimations() {
    var wordBreakTitles = document.querySelectorAll(".word-break-animate");

    wordBreakTitles.forEach(function (title) {
        var content = title.innerHTML;
        var animationClass = title.getAttribute("data-aos");
        var animationDelay = Number(title.getAttribute("data-aos-delay"));

        var words = content.split(" ").map(function (word, index) {
            return `<span class="word" data-aos="${animationClass}" style="transition-delay: ${animationDelay + index * 2}ms">${word}</span>`;
        });

        title.innerHTML = words.join(" ");

        title.removeAttribute("data-aos");
        title.removeAttribute("data-aos-delay");
    });

    setTimeout(function () {
        var header = document.querySelector("header");
        header.style.opacity = 1;
    }, 350);

    setTimeout(function () {
        var heroBgElement = document.querySelector("#hero-bg-element");
        heroBgElement.style.opacity = 1;
        heroBgElement.style.transform = "scale(1)";
    }, 1000);

    // Setup animations
    AOS.init({
        duration: 900,
        easing: "blueflurry",
        once: true,
        delay: 50,
    });
}

function setupMarquee() {
    var marquees = document.querySelectorAll(".marquee");

    marquees.forEach(function (marquee) {
        let logos = marquee.children.length;

        for (var i = 0; i < logos; i++) {
            marquee.appendChild(marquee.children[i].cloneNode(true));
        }

        setTimeout(function () {
            marquee.style.opacity = 1;
            // marquee.style.transform = "scale(1)";
        }, 700);
    });

    // marquees.forEach(function (marquee) {
    //     marquee.querySelectorAll("img").forEach(function (img) {
    //         console.log(img.naturalWidth > img.naturalHeight);
    //         if (img.naturalWidth > img.naturalHeight) {
    //             img.style.width = "100px";
    //             img.style.height = "auto";
    //         } else {
    //             img.style.height = "60px";
    //             img.style.width = "auto";
    //         }
    //     });
    // });
}

function setupAccordians() {
    var accordians = document.querySelectorAll(".accordian");

    accordians.forEach(function (accordian) {
        var items = accordian.querySelectorAll(".accordian__item");

        items.forEach(function (item) {
            item.addEventListener("click", function () {
                item.classList.toggle("active");
                const content = item.querySelector(".accordian__item__content");
                const contentDiv = item.querySelector(".accordian__item__content div");
                content.style.height = item.classList.contains("active") ? contentDiv.offsetHeight + "px" : 0;

                items.forEach(function (i) {
                    if (i !== item) {
                        i.classList.remove("active");
                        i.querySelector(".accordian__item__content").style.height = 0;
                    }
                });
            });
        });
    });
}

setupAnimations();
// showHeroBg();
// setupMarquee();
setupAccordians();

// Setup feather icons
feather.replace();

setupMenu();
