// =========================
// MOBILE NAVIGATION MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });
}


// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });
}


// =========================
// SMOOTH SCROLLING
// =========================

const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

sections.forEach(function (section) {
    section.classList.add("scroll-hidden");
});


function checkScroll() {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.classList.add("scroll-show");
            section.classList.remove("scroll-hidden");

        }

    });

}

window.addEventListener("scroll", checkScroll);

checkScroll();


// =========================
// CONTACT FORM VALIDATION
// =========================

const sendBtn = document.getElementById("send-btn");

if (sendBtn) {

    sendBtn.addEventListener("click", function () {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("form-message");


        // Check empty fields

        if (name === "" || email === "" || message === "") {

            formMessage.innerHTML = "Please fill all fields.";
            formMessage.style.color = "red";

            return;
        }


        // Check email

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.innerHTML = "Please enter a valid email address.";
            formMessage.style.color = "red";

            return;
        }


        // Success message

        formMessage.innerHTML = "Message sent successfully! 😊";
        formMessage.style.color = "green";


        // Clear form

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    });

}