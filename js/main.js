(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-t").fadeIn("slow");
    } else {
      $(".back-to-t").fadeOut("slow");
    }
  });
  $(".back-to-t").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $("#date").datetimepicker({
    format: "L",
  });
  $("#time").datetimepicker({
    format: "LT",
  });

  // Service carousel
  $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Pricing carousel
  $(".pricing-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);

//when scroll>100 then navabar fixed to top
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

//scroll trigger

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#main",
//     start: "50% 50%",
//     end: "100% 50%",
//     scrub: 2,
//     pin: true,
//   },
// });
// tl.to(
//   "#top",
//   {
//     top: "-50%",
//   },
//   "a"
// )
//   .to(
//     "#bottom",
//     {
//       bottom: "-50%",
//     },
//     "a"
//   )
//   .to(
//     "#top-h",
//     {
//       top: "80%",
//     },
//     "a"
//   )
//   .to(
//     "#bottom-h",
//     {
//       bottom: "-80%",
//     },
//     "a"
//   );
const a = document.querySelectorAll(".acc");

a.forEach((item) => {
  const head = item.querySelector(".acc-head");
  const content = item.querySelector(".acc-content");

  head.addEventListener("click", () => {
    for (var i = 0; i < a.length; i++) {
      if (a[i] != item) {
        a[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});
