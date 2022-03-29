AOS.init();

$(document).on("click", function () {
  $(".collapse").collapse("hide");
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.background = "#fff";
    $("#logo-svg .cls-1").css("stroke", "#000");
    $(".logo a").css("color", "#000");
    $(".navbar").css("color", "#000");
    $(".nav-link").css("color", "#000");
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("navbar-light");
  } else {
    document.getElementById("header").style.background = "none";
    $("#logo-svg .cls-1").css("stroke", "#fff");
    $(".logo a").css("color", "#fff");
    $(".navbar").css("color", "#fff");
    $(".nav-link").css("color", "#fff");
    $(".navbar").removeClass("navbar-light");
    $(".navbar").addClass("navbar-dark");
  }
}
