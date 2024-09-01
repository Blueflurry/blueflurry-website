var lastScrollTop = window.screenY || document.documentElement.scrollTop;
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    var scrollTop = window.screenY || document.documentElement.scrollTop;
    if (scrollTop === 0) {
        // User is at top of page
        atTop();
    } else if (scrollTop < lastScrollTop) {
        // User is scrolling up
        onScrollUp();
    } else {
        // User is scrolling down
        onScrollDown();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

function onScrollUp() {
    header.classList.remove("scrollDown");
    header.classList.add("scrollUp");
}

function onScrollDown() {
    header.classList.remove("scrollUp");
    header.classList.add("scrollDown");
}

function atTop() {
    header.classList.remove("scrollUp");
    header.classList.remove("scrollDown");
}
