$(document).ready(function() {
  console.log("Hello Universe!");
});

$(".nav-link").click(function() {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});