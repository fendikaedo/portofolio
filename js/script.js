window.addEventListener("load", () => {
  AOS.refresh(); // Memperbarui posisi elemen AOS
});

AOS.init({
  duration: 1000, // Durasi animasi (1 detik)
  once: true, // Animasi hanya dijalankan sekali
  mirror: false, // Jangan ulangi animasi ketika scroll ke atas
  anchorPlacement: "top-bottom", // Posisi anchor elemen
});

// let scrollTimeout;
// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar-container");
//   if (currentScrollY > lastScrollY) {
//      navbar.classList.add("scrolled");
//    } else {
//      navbar.classList.remove("scrolled");
//    }
//     navbar.classList.add("scrolled");

//     clearTimeout(scrollTimeout);

//     scrollTimeout = setTimeout(() => {
//       navbar.classList.remove('scrolled');
//     }, 1000);

// });

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
  { id: "pageExperience", target: "experience" },
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

// const downloadCV = document.getElementById("download");

// downloadCV.addEventListener("click",function(){
//   downloadCV.innerHTML = "Belum bikin hehee"
// })

//?LINK SOCIAL MEDIA

//?CLICK TAB EXPERIENCE
const contentExperience = document.querySelector(".content-experience");
const tabExperience = document.querySelectorAll(".tab-experience ul li");
const imageExperience = contentExperience.querySelectorAll("img");

contentExperience.addEventListener("click", function (e) {
  tabExperience.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  if (e.target.classList.contains("all")) {
    imageExperience.forEach((all) => {
      if (all.classList.contains("all")) {
        all.style.display = "block";
      } else {
        all.style.display = "none";
      }
    });
  } else if (e.target.classList.contains("campus")) {
    imageExperience.forEach((campus) => {
      if (campus.classList.contains("campus")) {
        campus.style.display = "block";
      } else {
        campus.style.display = "none";
      }
    });
  } else if (e.target.classList.contains("smk")) {
    imageExperience.forEach((smk) => {
      if (smk.classList.contains("smk")) {
        smk.style.display = "block";
      } else {
        smk.style.display = "none";
      }
    });
  } else if (e.target.classList.contains("work")) {
    imageExperience.forEach((work) => {
      if (work.classList.contains("work")) {
        work.style.display = "block";
      } else {
        work.style.display = "none";
      }
    });
  }
});

//?CLICK TAB ACTIVE
const cardContact = document.querySelector(".card-contact");
const tabContact = document.querySelectorAll(".tabContact");
const formContact = document.querySelectorAll("form");

cardContact.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabContact.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    formContact.forEach((content) => {
      content.classList.remove("active");
    });
    const elemen = document.getElementById(id);
    elemen.classList.add("active");
  }
});
