window.addEventListener("load", () => {
  AOS.refresh(); // Memperbarui posisi elemen AOS
});

AOS.init({
  duration: 1000, // Durasi animasi (1 detik)
  once: true, // Animasi hanya dijalankan sekali
  mirror: false, // Jangan ulangi animasi ketika scroll ke atas
  anchorPlacement: "top-bottom", // Posisi anchor elemen
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-container");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//!LOADING
// document.addEventListener("DOMContentLoaded", () => {
//   const loader = document.getElementById("loader");
//   const body = document.querySelector("body");

//   setTimeout(() => {
//     loader.style.display = "none";
//     body.style.display = "flex";
//   }, 3000);
// });

//? TOGGLE BUTTON
const navToggle = document.querySelector(".nav-toggle-off");
const toggleButton = document.querySelectorAll(".nav-toggle-icon i");
const toggleOn = document.getElementById("onToggle");
const toggleOff = document.getElementById("offToggle");
toggleButton.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    if (toggle == toggleOn) {
      navToggle.classList.remove("nav-toggle-off");
      navToggle.classList.add("nav-toggle-on");
    } else if (toggle == toggleOff) {
      navToggle.classList.remove("nav-toggle-on");
      navToggle.classList.add("nav-toggle-off");
    }
  });
});

//! NAVBAR CONTENT
const navLinks = [
  { id: "pageHome", target: "home" },
  { id: "pageAbout", target: "about" },
  { id: "pageProject", target: "project" },
  { id: "pageHistory", target: "history" },
  { id: "pageContact", target: "contact" },
];

navLinks.forEach(function (link) {
  const page = document.getElementById(link.id);
  if (page) {
    page.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPage = document.getElementById(link.target);
      if (targetPage) {
        targetPage.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});

//!BUTTON CONTACT ME
const buttonContact = document.getElementById("btnContact");
buttonContact.addEventListener("click", function () {
  const pageContact = document.getElementById("contact");
  pageContact.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//?Link Social Media
//! Github
const github = document.getElementById("myGithub");
github.addEventListener("click", function () {
  const linkGithub = `https://github.com/fendikaedo`;
  window.open(linkGithub, "__blank");
});

//! Instagram
const instagram = document.getElementById("myInstagram");
instagram.addEventListener("click", function () {
  const linkInstagram = `https://www.instagram.com/frdinata_`;
  window.open(linkInstagram, "__blank");
});

//! Tiktok
const tiktok = document.getElementById("myTiktok");
tiktok.addEventListener("click", function () {
  const linkTiktok = `https://www.tiktok.com/@fndkfrdinata`;
  window.open(linkTiktok, "__blank");
});

//! Whatsapp
function sendMessage() {
  const url = `https://wa.me/62895608044646?text=${".input-name".value}${
    ".input-message".value
  }`;

  window.open(url, "__blank");
}

//?CLICK THUMBNAIL IMAGE HISTORY
const contentImage = document.querySelector(".content-history");
const imageHistory = document.querySelector(".imageHistory");
const thumbnail = document.querySelectorAll(".thumb");
contentImage.addEventListener("click", function (e) {
  if ((e.target.className = "thumb")) {
    imageHistory.src = e.target.src;
  }
});

