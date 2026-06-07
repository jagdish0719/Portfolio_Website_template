// =====================================
// PORTFOLIO SCRIPT
// =====================================

console.log("Portfolio Loaded");

// EMAILJS CONFIGURATION
const PUBLIC_KEY = "Y4GUUTYLnZ4qDiBG8";
const SERVICE_ID = "service_1e1farm";

emailjs.init({
    publicKey: PUBLIC_KEY
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        const submitButton = contactForm.querySelector("button");

        submitButton.innerText = "Sending...";
        submitButton.disabled = true;

        const params = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send(
            SERVICE_ID,
            "template_ucdnc6g",
            params
        )

        .then(function () {

            return emailjs.send(
                SERVICE_ID,
                "template_scxj0ks",
                params
            );

        })

        .then(function () {

            alert("Message sent successfully.");

            contactForm.reset();

            submitButton.innerText = "Send Message";
            submitButton.disabled = false;

        })

        .catch(function (error) {

            console.error("EMAILJS ERROR:", error);

            alert("Email sending failed. Open F12 → Console.");

            submitButton.innerText = "Send Message";
            submitButton.disabled = false;

        });

    });

}

// ACTIVE NAVIGATION
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// FOOTER YEAR
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

console.log("All Scripts Loaded Successfully");