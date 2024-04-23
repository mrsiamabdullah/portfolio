// SHOW MENU MOBILE
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// MENU HIDDEN MOBILE
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

window.onscroll = () => {
  navMenu.classList.remove("show");
};

// REMOVE MENU MOBILE
let navLink = document.querySelectorAll(".nav__link");

let linkAction = () => {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SHADOW HEADER
let shadowHeader = () => {
  let header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll("section[id]");

let scrollActive = () => {
  let scrollDown = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// EMAIL SEND
let contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

let sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publickey
  emailjs
    .sendForm(
      "service_nkxgkrk",
      "template_ht7a9qw",
      "#contact-form",
      "D8v7XjWwCsn6QuUAZ"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully";

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

// DARK LIGHT THEME
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "ri-sun-line";

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

let getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
let getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
