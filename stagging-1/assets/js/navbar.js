// $(".navicon-button").click(function() {
//   $(this).toggleClass("open"); 
//   $("header nav").slideToggle(400, function() {
//     $(this).toggleClass("nav-expanded").css('display', '');
//   });
// });

const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");

navIcon.onclick = function () {
    nav.classList.toggle('show');
}