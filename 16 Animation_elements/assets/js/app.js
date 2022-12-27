$(".menu_icon").bind("click", function () {
  $(".menu_icon").removeClass("paused").addClass("active");
  $(".menu").removeClass("paused").addClass("active");
});

$(".menu").bind("click", function () {
  $(".menu_icon").removeClass("active");
  $(".menu").removeClass("active");
});
