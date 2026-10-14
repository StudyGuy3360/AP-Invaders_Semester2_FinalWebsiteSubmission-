
 class MediaItem {
    constructor(_title, _type, _url, _image) {
        this.title = _title;
        this.type = _type;
        this.url = _url;
        this.image = _image;
    }
}

(async function() {
  const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e442447084mshaef834d90434e05p1bc45fjsn892d1a7e195a',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
		'Content-Type': 'application/json'
        }
    };

    let response = await fetch(url, options);
    let data = await response.json();

    console.log("Fetched data:", data);


    let title = data[0].primaryTitle;
    let type = data[0].type;
    let itemUrl = data[0].url;
    let image = data[0].primaryImage;

    let mediaItem = new MediaItem(title, type, itemUrl, image);

    document.getElementById('title').innerHTML = mediaItem.title;
    document.getElementById('content').innerHTML = 
        mediaItem.type + "<br>" + mediaItem.url + "<br><img src='" + mediaItem.image + "'>";

    console.log(mediaItem);
})();
// api end




//WatchlistJS
document.querySelectorAll('.card-row').forEach(row => {
let isDown = false;
 let startX;
let scrollLeft;
//Content Library JS
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
            renderAllMovies(contLibMovies);
        } else if (targetView === "genresSection") {
            renderGenres();
        } else if (targetView === "releaseDateSection") {
            renderReleaseDate();
        } else if (targetView === "contentRatingSection") {
            renderContentRating();
        }
    });
});

function renderAllMovies(movies) {
    movies.forEach(movie => {
        const cardHtml = `
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <div class="h-100 shadow">
                    <img src="${movie.image}" class="card-img-top rounded">
                </div>
            </div>
        `; //API will probably be inserted here where the <img> is
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Musical",
    "Romance",
    "Sci-Fi",
    "Thriller"
];

const decades = [
    "2020s",
    "2010s",
    "2000s",
    "1990s",
    "1980s"
];

const contentRatings = [
    "G",
    "PG",
    "PG-13",
    "R",
    "NC-17"
];

function createCarousel(title, id) {
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
                ${Array(9).fill().map(() => `
                    <div class="movieCarouselItem">
                        <img src="../assets/img/Movie_placeholder.png"
                             alt="Movie poster">
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderGenres() {
    container.innerHTML = genres.map(genre =>
        createCarousel(genre, `${genre}Carousel`)
    ).join("");

    setupCarouselArrows();
}

function renderReleaseDate() {
    container.innerHTML = decades.map(decade =>
        createCarousel(decade, `${decade}Carousel`)
    ).join("");

    setupCarouselArrows();
}

function renderContentRating() {
    container.innerHTML = contentRatings.map(rating =>
        createCarousel(rating, `${rating.replace(/[^a-zA-Z0-9]/g, "")}Carousel`)
    ).join("");

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

renderAllMovies(contLibMovies);

document.querySelector(
    '.contLibFilterButton[data-target="allMoviesSection"]'
).classList.add('active');