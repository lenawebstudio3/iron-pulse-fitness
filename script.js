const menuToggle =
    document.querySelector("#menu-toggle");

const navLinks =
    document.querySelector("#nav-links");


menuToggle.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);


const navigationLinks =
    document.querySelectorAll("#nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("active");

        }
    );

});


const contactForm =
    document.querySelector(".contact-form");

const formMessage =
    document.querySelector("#form-message");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Demo only — connect this form to the real client's enquiry system.";

        contactForm.reset();

    }
);