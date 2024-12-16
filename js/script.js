window.addEventListener('load', () => {
  AOS.refresh(); // Memperbarui posisi elemen AOS
});

AOS.init({
  duration: 1000, // Durasi animasi (1 detik)
  once: true, // Animasi hanya dijalankan sekali
  mirror: false, // Jangan ulangi animasi ketika scroll ke atas
  anchorPlacement: 'top-bottom', // Posisi anchor elemen
});

//? TOGGLE BUTTON
const navToggle = document.querySelector('.nav-toggle-off')
const toggleButton = document.querySelectorAll('.nav-toggle-icon i');
const toggleOn = document.getElementById('onToggle');
const toggleOff = document.getElementById('offToggle');
toggleButton.forEach(function(toggle){
  toggle.addEventListener('click',function(){
    if(toggle == toggleOn){
      navToggle.classList.remove('nav-toggle-off');
      navToggle.classList.add('nav-toggle-on');
    }else if(toggle == toggleOff){
      navToggle.classList.remove('nav-toggle-on');
      navToggle.classList.add('nav-toggle-off');
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {

  //! NAVBAR CONTENT

  //?Navbar Click Page About
  const pageAbout = document.getElementById("pageAbout");

  if (pageAbout) {
    pageAbout.addEventListener("click", function (event) {
      event.preventDefault();
      const contentAbout = document.getElementById("about");
      contentAbout.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //?Navbar Click Page Project
  const pageProject = document.getElementById("pageProject");

  if (pageProject) {
    pageProject.addEventListener("click", function (event) {
      event.preventDefault();
      const contentProject = document.getElementById("project");
      contentProject.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //?Navbar Click Page Project
  const pageHistory = document.getElementById("pageHistory");

  if (pageHistory) {
    pageHistory.addEventListener("click", function (event) {
      event.preventDefault();
      const contentHistory = document.getElementById("history");
      contentHistory.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //?Link Social Media
  //! Github
  const github = document.getElementById('myGithub');
  github.addEventListener('click', function() {
    const linkGithub = `https://github.com/fendikaedo`;
    window.open(linkGithub,'__blank');
  });

  //! Instagram
  const instagram = document.getElementById('myInstagram');
  instagram.addEventListener('click', function() {
    const linkInstagram = `https://www.instagram.com/frdinata_`;
    window.open(linkInstagram,'__blank');
  });

  //! Tiktok
  const tiktok = document.getElementById('myTiktok');
  tiktok.addEventListener('click', function() {
    const linkTiktok = `https://www.tiktok.com/@fndkfrdinata`;
    window.open(linkTiktok,'__blank');
  });

  //!Button Click Description About
  const nextAbout = document.getElementById("nextAbout");
  const titleAbout = document.getElementById("titleAbout");

  nextAbout.addEventListener("click", function () {
    titleAbout.textContent = "Haloo";
  });



  //?BUTTON SLIDE HISTORY
  



// });
