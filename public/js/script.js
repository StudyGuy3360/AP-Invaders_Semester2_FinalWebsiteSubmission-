class Movie{
  constructor(_title, _rating, _link, _image){
    this.title = _title;
    this.rating = _rating;
    this.link = _link;
    this.image = _image;
  }
}
// ==========================================
// DANIELLE
// ==========================================

const watchlistBtn = document.getElementById("watchlistBtn");
const favouritesBtn = document.getElementById("favouritesBtn");
const watchlistPage = document.getElementById("watchlistPage");
const favouritesPage = document.getElementById("favouritesPage");
const pageTitle = document.getElementById("pageTitle");


function getSavedMovies(listName) {
const saved = JSON.parse(localStorage.getItem(listName));
return Array.isArray(saved) ? saved : [];}


function saveMovies(listName, movies) {
localStorage.setItem(listName, JSON.stringify(movies));}

function addMovieToList(movie, listName) 
{if (!movie || movie.id == null) return;
    
const savedMovies = getSavedMovies(listName);
const alreadyExists = savedMovies.some(saved => String(saved.id) === String(movie.id));



if (alreadyExists) 
{if (listName === "watchlist") {
alert("This movie is already in your Watchlist");} else {
 alert("This movie is already in your Favourites");}
 return;}


savedMovies.push({
id: movie.id,
 title: movie.title,
poster_path: movie.poster_path,
 vote_average: movie.vote_average,
release_date: movie.release_date,
overview: movie.overview});




saveMovies(listName, savedMovies);
if (listName === "watchlist") {
alert("Added to your Watchlist!");
} else {
alert("Added to your Favourites!");
};}



function removeMovieFromList(movieId, listName) {
const movies = getSavedMovies(listName);
const updated = movies.filter(movie => String(movie.id) !== String(movieId));
 saveMovies(listName, updated);

let containerElement;
if (listName === "watchlist") {
containerElement = watchlistPage;
} else {
        containerElement = favouritesPage;
    }

 renderSavedList(listName, containerElement);
}




function renderSavedList(listName, containerElement) 
{if (!containerElement) return;
    
containerElement.innerHTML = "";
const movies = getSavedMovies(listName);

 if (movies.length === 0) {

        let listTitle;

        if (listName === "watchlist") {
            listTitle = "Watchlist";
        } else {
            listTitle = "Favourites";
        }

        containerElement.innerHTML = `
            <div class="p-4 text-center">
                <p class="text-white">
                    Your ${listTitle} is empty. Add movies from the library.
                </p>
            </div>`;

        return;
    }

const row = document.createElement("div");
row.className = "row g-4 px-4 my-2";

movies.forEach(movie => {
const col = document.createElement("div");
col.className = "col-6 col-sm-6 col-md-3 col-lg-2";

       
 col.innerHTML = `
<div class="h-100" style="background: transparent !important; background-color: transparent !important; box-shadow: none !important;">

<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top rounded shadow" alt="${movie.title}">

<div class="mt-2" style="background: transparent !important; background-color: transparent !important;">

<h6 class="text-white text-truncate">${movie.title || "Untitled"}</h6>

 <p class="text-white-50 small mb-2">⭐ ${Number(movie.vote_average || 0).toFixed(1)}</p>

<button class="btn btn-sm custom-remove-btn remove-btn w-100" type="button" data-id="${movie.id}">Remove</button>

</div>
</div>`;




col.querySelector(".remove-btn").addEventListener("click", () => {
removeMovieFromList(movie.id, listName); });

 row.appendChild(col);});

containerElement.appendChild(row);}


document.addEventListener("click", (event) => {
const watchlistBtnTarget = event.target.closest(".watchlistBtn");
const favouriteBtnTarget = event.target.closest(".favouriteBtn");

if (watchlistBtnTarget) {
const movieId = watchlistBtnTarget.dataset.movieId;
const movie = apiMovies.find(movie => String(movie.id) === String(movieId));
 if (movie) {
 addMovieToList(movie, "watchlist");}}

if (favouriteBtnTarget) {
const movieId = favouriteBtnTarget.dataset.movieId;
const movie = apiMovies.find(movie => String(movie.id) === String(movieId));
if (movie) {
 addMovieToList(movie, "favourites"); }}
});

if (watchlistBtn && watchlistPage) {
watchlistBtn.addEventListener("click", function() {
 watchlistPage.style.display = "block";
if (favouritesPage) favouritesPage.style.display = "none";
if (pageTitle) pageTitle.textContent = "My Watchlist";
document.body.className = "watchlistBody";
 renderSavedList("watchlist", watchlistPage);
    });
}

if (favouritesBtn && favouritesPage) {
favouritesBtn.addEventListener("click", function() {
 if (watchlistPage) watchlistPage.style.display = "none";
 favouritesPage.style.display = "block";
 if (pageTitle) pageTitle.textContent = "My Favorites";
 document.body.className = "favouritesBody";
renderSavedList("favourites", favouritesPage);
    });
}




if (watchlistPage) {
 renderSavedList("watchlist", watchlistPage);
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

 for (let page = 2; page <= 5; page++) {
let moreData = await fetch( `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
).then(res => res.json());

data.results.push(...moreData.results);
  }

  console.log(data);
console.log(data.results[0].title);
apiMovies = data.results;
console.log("Total movies:", apiMovies.length);
renderAllMovies(apiMovies);









  //Search on ContLib
    const searchForm = document.getElementById("movieSearchForm");
    const searchInput = document.getElementById("movieSearchInput");

    searchForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const searchTerm = searchInput.value.trim();

        if (searchTerm === "") return;

        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&language=en-US&page=1`;

        try {
            const response = await fetch(searchUrl, options);

            if (!response.ok) {
                throw new Error("Movie search failed");
            }

            const data = await response.json();
            const searchResults = data.results.filter(movie => movie.poster_path);

            document.querySelectorAll(".contLibFilterButton").forEach(button => {
                button.classList.remove("active");
            });

            document.querySelector(
                '.contLibFilterButton[data-target="allMoviesSection"]'
            ).classList.add("active");

            renderAllMovies(searchResults);

        } catch (error) {
            console.error("Error searching movies:", error);
        }
    });
}();





//Content Library JS
let apiMovies = [];

const container = document.getElementById('movieGridContainer');

document.querySelectorAll('.contLibFilterButton').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.contLibFilterButton').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
        
        const targetView = button.getAttribute('data-target');

        container.innerHTML = '';

        if (targetView === "allMoviesSection") {
            renderAllMovies(apiMovies);
        } else if (targetView === "genresSection") {
            renderGenres();
        } else if (targetView === "releaseDateSection") {
            renderReleaseDate();
        } else if (targetView === "contentRatingSection") {
            renderAudienceRating();
        }
    });
});

function renderAllMovies(movies) {

    container.innerHTML = "";

    movies.forEach(movie => {
        const cardHtml = `
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <div class="h-100 shadow" moviePoster>
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top rounded" alt="${movie.title}">
                    <div class="movieActions">
                        <button class="movieActionBtn watchlistBtn" type="button" data-movie-id="${movie.id}" aria-label="Add to Watchlist">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <button class="movieActionBtn favouriteBtn" type="button" data-movie-id="${movie.id}" aria-label="Add to Favourites">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>    
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

const genres = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Fantasy", id: 14 },
    { name: "Horror", id: 27 },
    { name: "Musical", id: 10402 },
    { name: "Romance", id: 10749 },
    { name: "Sci-Fi", id: 878 },
    { name: "Thriller", id: 53 }
];

const decades = [
    { name: "2020s", start: 2020, end: 2029 },
    { name: "2010s", start: 2010, end: 2019 },
    { name: "2000s", start: 2000, end: 2009 },
    { name: "1990s", start: 1990, end: 1999 },
    { name: "1980s", start: 1980, end: 1989 }
];

const audienceRatings = [
    { name: "Top Rated", min: 8, max: 11 },
    { name: "Highly Rated", min: 7, max: 8 },
    { name: "Worth Watching", min: 6, max: 7 },
    { name: "Mixed Reviews", min: 0, max: 6 }
];

function createCarousel(title, id, movies) {
    return `
        <div class="genreTitle">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="genreTitle">${title}</h4>
                <div>
                    <button class="btn btn-sm carouselArrow"
                            type="button"
                            data-scroll="prev"
                            data-carousel="${id}">
                        &#10094;
                    </button>

                    <button class="btn btn-sm carouselArrow"
                            type="button"
                            data-scroll="next"
                            data-carousel="${id}">
                        &#10095;
                    </button>
                </div>
            </div>

            <div id="${id}" class="movieCarousel">
                ${movies.map(movie => `
                    <div class="movieCarouselItem">
                        <div class="moviePoster">
                            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                            <div class="movieActions">
                                <button class="movieActionBtn watchlistBtn" type="button" data-movie-id="${movie.id}" aria-label="Add to Watchlist">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <button class="movieActionBtn favouriteBtn" type="button" data-movie-id="${movie.id}" aria-label="Add to Favourites">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderGenres() {
    container.innerHTML = genres.map(genre => {
        const genreMovies = apiMovies.filter(movie =>
            movie.genre_ids.includes(genre.id)
        );
        
        return createCarousel(
            genre.name,
            `${genre.id}Carousel`,
            genreMovies
        );

    }).join("");

    setupCarouselArrows();
}

function renderReleaseDate() {
    container.innerHTML = decades.map(decade => {
        const decadeMovies = apiMovies.filter(movie => {
            if (!movie.release_date) return false;

            const year = new Date(movie.release_date).getFullYear();

            return year >= decade.start && year <= decade.end;
        });

        return createCarousel(
            decade.name,
            `${decade.start}Carousel`,
            decadeMovies
        );

    }).join("");

    setupCarouselArrows();
}

function renderAudienceRating() {
    container.innerHTML = audienceRatings.map(rating => {
        const ratingMovies = apiMovies.filter(movie => {
            const score = movie.vote_average;

            return score >= rating.min && score < rating.max;
        });

        return createCarousel(
            rating.name,
            `${rating.min}RatingCarousel`,
            ratingMovies
        );

    }).join("");

    setupCarouselArrows();
}

function setupCarouselArrows() {
    document.querySelectorAll("[data-scroll]").forEach(btn => {
        btn.onclick = () => {
            const carousel = document.getElementById(btn.dataset.carousel);

            carousel.scrollBy({
                left: btn.dataset.scroll === "next" ? carousel.clientWidth : -carousel.clientWidth,
                behavior: "smooth"
            });
        };
    });
}

document.querySelector(
    '.contLibFilterButton[data-target="allMoviesSection"]'
).classList.add('active');


// Individual api
document.getElementById('movieGridContainer').addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;

    const movieId = img.dataset.id;
    const clickedMovie = apiMovies.find(movie => movie.id == movieId);

    if (clickedMovie) {
        const IP = document.getElementById('IP');
        if (IP) {
            IP.src = `https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`;
            IP.alt = clickedMovie.title;
        }

        const IndivPage = document.getElementById('IndivPage');
        if (IndivPage) {
            IndivPage.classList.add('active');
        }
    }
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









