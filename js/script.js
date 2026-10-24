//WatchlistJS



const watchlistBtn = document.getElementById("watchlistBtn");
const favouritesBtn = document.getElementById("favouritesBtn");
  const watchlistPage = document.getElementById("watchlistPage");
const favouritesPage = document.getElementById("favouritesPage");
  const pageTitle = document.getElementById("pageTitle");

watchlistBtn.addEventListener("click", function() {
  watchlistPage.style.display = "block";
favouritesPage.style.display = "none";
  pageTitle.textContent = "My Watchlist";
document.body.className = "watchlistBody";


});

favouritesBtn.addEventListener("click", function() {
  watchlistPage.style.display = "none";
favouritesPage.style.display = "block";
pageTitle.textContent = "Replays";
favouritesBtn.addEventListener("click", function() {
  watchlistPage.style.display = "none";
favouritesPage.style.display = "block";
pageTitle.textContent = "My Favourites";
document.body.className = "favouritesBody";
});






// LUCA

//Login
const loginText = document.querySelector(".title-text.login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});



// TRENDING SECTION
$(document).ready(function () {
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});


  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});