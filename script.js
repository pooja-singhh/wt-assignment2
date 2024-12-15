$(document).ready(function () {
    $(".dark-mode-toggle").click(function () {
      $("body").toggleClass("dark-mode");
      $(".navbar-vertical").toggleClass("dark-mode-navbar");
    });
  });
  
  // Smooth transitions for dark mode
  document.querySelector(".dark-mode-toggle").addEventListener("click", () => {
    document.body.style.transition = "background-color 0.5s";
  });
  