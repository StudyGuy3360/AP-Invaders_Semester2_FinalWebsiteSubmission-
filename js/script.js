
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

    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error("Data is empty or not an array");
        return;
    }

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
