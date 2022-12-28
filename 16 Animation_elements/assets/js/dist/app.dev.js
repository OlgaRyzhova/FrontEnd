"use strict";

// NAVBAR block
$(".menu_icon").bind("click", function () {
  $(".menu_icon").removeClass("paused").addClass("active");
  $(".menu_navbar").removeClass("paused").addClass("active");
});
$(".menu_navbar").bind("click", function () {
  $(".menu_icon").removeClass("active");
  $(".menu_navbar").removeClass("active");
}); // SHARE block

var menu = document.querySelector('.menu');
var toggle = document.querySelector('.toggle');

toggle.onclick = function () {
  menu.classList.toggle('active');
};