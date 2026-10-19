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

  for (let page = 2; page <= 5; page++) {
    let moreData = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
    ).then(res => res.json());

    data.results.push(...moreData.results);
  }

  console.log(data);

  console.log(data.results[0].title);

  apiMovies = data.results;

  console.log("Total movies:", apiMovies.length);

  renderAllMovies(apiMovies);

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
// document.querySelectorAll('.card-row').forEach(row => {
// let isDown = false;
//  let startX;
// let scrollLeft;




//Content Library JS
let apiMovies = [];

const contLibMovies = [
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
];

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
                <div class="h-100 shadow">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top rounded" alt="${movie.title}">
                </div>
            </div>
        `; //API will probably be inserted here where the <img> is
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
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
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