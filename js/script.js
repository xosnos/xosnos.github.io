$(document).ready(() => {
  console.log("Hello Universe!");

  // Navigation
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse('hide');
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".navbar-brand").on("click", () => {
    $(".nav-link").removeClass("active");
    $("#homeButton").addClass("active");
  });
});

