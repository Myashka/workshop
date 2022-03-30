function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#header").addClass("active");
      $("#logo-svg .cls-1").css("stroke", "#000");
      $(".logo a").addClass("active");
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").addClass("navbar-light");
    } else {
      $("#header").removeClass("active");
      $("#logo-svg .cls-1").css("stroke", "#fff");
      $(".logo a").removeClass("active");
      $(".navbar").removeClass("navbar-light");
      $(".navbar").addClass("navbar-dark");
    }
  }
  