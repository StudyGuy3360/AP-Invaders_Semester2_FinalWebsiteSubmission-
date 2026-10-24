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

