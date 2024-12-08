document.addEventListener("DOMContentLoaded", function () {
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



  //!Button Click Description About
  const nextAbout = document.getElementById("nextAbout");
  const titleAbout = document.getElementById("titleAbout");

  nextAbout.addEventListener("click", function () {
    titleAbout.textContent = "Haloo";
  });
  
});
