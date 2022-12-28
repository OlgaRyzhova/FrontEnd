$(".menu_icon").bind("click", function () {
  $(".menu_icon").removeClass("paused").addClass("active");
  $(".menu_navbar").removeClass("paused").addClass("active");
});

$(".menu_navbar").bind("click", function () {
  $(".menu_icon").removeClass("active");
  $(".menu_navbar").removeClass("active");
});
