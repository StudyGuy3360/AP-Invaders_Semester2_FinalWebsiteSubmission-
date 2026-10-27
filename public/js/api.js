const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDM2YjBmZDlhNjJiZTI2MDUxMTI2MDA2NmM0ZWIzYiIsIm5iZiI6MTc5MjEzODE4NC4xNTUsInN1YiI6IjZhZDFkYmM4ZGI0YmYxMmI2MmIzZTc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mLj37yAOQSPUr6bmuhkc_T1XO0z1fGPEkcOrl6fizTc'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
 .then(response => response.json())
  .then(response => {
    const randomIndex = Math.floor(Math.random() * response.results.length);

    const movieTitle = response.results[randomIndex].title;
    document.querySelector(".title-info h1").textContent = movieTitle;

    const movieOverview = response.results[randomIndex].overview;
    document.querySelector(".title-info-description").textContent = movieOverview;

    const maturityNumber = response.results[randomIndex].adult ? '18+' : '16+';
    document.querySelector(".maturity-number").textContent = maturityNumber;

    const voteAverage = response.results[randomIndex].vote_average;
    document.querySelector(".vote-average").textContent = voteAverage;

    const language = response.results[randomIndex].original_language;
    document.querySelector(".language").textContent = language;

    const movieBackdrop = response.results[randomIndex].backdrop_path;
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieBackdrop}`;

    document.querySelector(".Background-Image").style.backgroundImage = `url(${backdropUrl})`;

    const imageContainer = document.getElementById("imageContainer");
    const carousel = document.createElement("div");
    carousel.classList = "carousel";

    const shuffledResults = response.results.sort(() => 0.5 - Math.random());

    shuffledResults.slice(0).forEach(movie => {
    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    img.alt = "Movie Poster";
    img.style.objectFit = "cover";
    img.width = 330;
    img.height = 190;
    carousel.appendChild(img);
    });

    imageContainer.innerHTML = "";
    imageContainer.appendChild(carousel);

  })
  .catch(err => console.error(err));