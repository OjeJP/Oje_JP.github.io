// main.js
console.log("JavaScript loaded!");

document.addEventListener("DOMContentLoaded", function () {
    const message = document.getElementById("collab-msg");
    if (message) {
        message.addEventListener("mouseover", function () {
            message.style.color = "#00bfff";
        });
        message.addEventListener("mouseout", function () {
            message.style.color = "#e0e0e0";
        });
    }
});


/*scroll button */

// Show the button when scrolled down
window.onscroll = function () {
    toggleScrollTopBtn();
};

function toggleScrollTopBtn() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

