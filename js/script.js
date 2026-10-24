class Movie{
  constructor(_title, _rating, _link, _image){
    this.title = _title;
    this.rating = _rating;
    this.link = _link;
    this.image = _image;
  }
}

!async function(){

const options = {
  method: 'GET',
  headers: {accept: 'application/json',  Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDM2YjBmZDlhNjJiZTI2MDUxMTI2MDA2NmM0ZWIzYiIsIm5iZiI6MTc5MjEzODE4NC4xNTUsInN1YiI6IjZhZDFkYmM4ZGI0YmYxMmI2MmIzZTc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mLj37yAOQSPUr6bmuhkc_T1XO0z1fGPEkcOrl6fizTc'}
};

 let data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(result => {return result})
            .catch(err => console.error(err));

  console.log(data);

  console.log(data.results[0].title);

  let title = data.results[0].title;
  let rating = data.results[0].rating;
  let link = data.results[0].imdb_link;
  let image = data.results[0].poster_path;

  let newMovie = new Movie(title, rating, link, image);

  document.getElementById('title').innerHTML = newMovie.title;
  document.getElementById('content').innerHTML = newMovie.rating + "<br>" + newMovie.link + "<br>" + "<img src='" + "https://image.tmdb.org" + newMovie.image + "'>";

  console.log(newMovie);

}();

// class MediaItem {
//     constructor(_title, _type, _url, _image) {
//         this.title = _title;
//         this.type = _type;
//         this.url = _url;
//         this.image = _image;
//     }
// }

// // (async function() {
// //   const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'x-rapidapi-key': 'e442447084mshaef834d90434e05p1bc45fjsn892d1a7e195a',
// // 		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
// // 		'Content-Type': 'application/json'
// //         }
// //     };

//     let response = await fetch(url, options);
//     let data = await response.json();

//     console.log("Fetched data:", data);

    // if (!data || !Array.isArray(data) || data.length === 0) {
    //     console.error("Data is empty or not an array");
    //     return;
    // }

//     let title = data[0].primaryTitle;
//     let type = data[0].type;
//     let itemUrl = data[0].url;
//     let image = data[0].primaryImage;

//     let mediaItem = new MediaItem(title, type, itemUrl, image);

//     document.getElementById('title').innerHTML = mediaItem.title;
//     document.getElementById('content').innerHTML = 
//         mediaItem.type + "<br>" + mediaItem.url + "<br><img src='" + mediaItem.image + "'>";

//     console.log(mediaItem);
// })();
// // api end




//WatchlistJS
document.querySelectorAll('.card-row').forEach(row => {
let isDown = false;
 let startX;
let scrollLeft;

 row.addEventListener('mousedown', (e) => {
isDown = true;
startX = e.pageX - row.offsetLeft;
scrollLeft = row.scrollLeft;
 });

row.addEventListener('mouseleave', () => {
isDown = false;
});

row.addEventListener('mouseup', () => {
isDown = false;
 });

row.addEventListener('mousemove', (e) => {
if (!isDown) return;
 e.preventDefault();
const x = e.pageX - row.offsetLeft;
const walk = (x - startX) * 1.5; 
 row.scrollLeft = scrollLeft - walk;
  });
});



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
pageTitle.textContent = "My Favourites";
document.body.className = "favouritesBody";
});






// function renderContentRating() {
//     container.innerHTML = contentRatings.map(rating =>
//         createCarousel(rating, `${rating.replace(/[^a-zA-Z0-9]/g, "")}Carousel`)
//     ).join("");

//     setupCarouselArrows();
// }

// function setupCarouselArrows() {
//     document.querySelectorAll("[data-scroll]").forEach(btn => {
//         btn.onclick = () => {
//             const carousel = document.getElementById(btn.dataset.carousel);

//             carousel.scrollBy({
//                 left: btn.dataset.scroll === "next" ? carousel.clientWidth : -carousel.clientWidth,
//                 behavior: "smooth"
//             });
//         };
//     });
// }

// renderAllMovies(contLibMovies);

// document.querySelector(
//     '.contLibFilterButton[data-target="allMoviesSection"]'
// ).classList.add('active');
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


// API

 const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));





// // data.results.filter(movie => movie.poster_path);
//  const TrendingMoviesCard = document.getElementById("TrendingMovies");


// function TrendingMoviesCard(title, id, movies) {
//     return `
//         <div class="genreTitle">
//             <section class="game-section">
//     <h2 class="line-title">trending games</h2>

//     <div class="owl-carousel custom-carousel owl-theme">
//       <div class="item active" id="TrendingMovies" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg);">
//         <div class="item-desc">
//           <h3>Dota 2</h3>
//           <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
//         </div>
//       </div>

//       <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg);">
//         <div class="item-desc">
//           <h3>The Witcher 3</h3>
//           <p>The Witcher 3 is an action role-playing game developed by CD Projekt Red. It is based on The Witcher series of fantasy novels.</p>
//         </div>
//       </div>

//       <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg);">
//         <div class="item-desc">
//           <h3>RDR 2</h3>
//           <p>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.</p>
//         </div>
//       </div>

//       <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg);">
//         <div class="item-desc">
//           <h3>PUBG Mobile</h3>
//           <p>PUBG is a battle royale game where 100 players fight to be the last person standing.</p>
//         </div>
//       </div>

//       <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg);">
//         <div class="item-desc">
//           <h3>Fortnite</h3>
//           <p>Battle royale where 100 players fight to be the last person standing.</p>
//         </div>
//       </div>

//       <div class="item" style="background-image: url(https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg);">
//         <div class="item-desc">
//           <h3>Far Cry 5</h3>
//           <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.</p>
//         </div>
//       </div>
//     </div>
//   </section>

//             <div id="${id}" class="movieCarousel">
//               ${movies.map(movie => `
//                   <div class="movieCarouselItem">
//                       <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//                   </div>
//               `).join("")}
//             </div>
//         </div>
//     `;
// }

