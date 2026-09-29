
class MediaItem {
    constructor(_title, _type, _url, _image, _description) {
        this.title = _title;
        this.type = _type;
        this.url = _url;
        this.image = _image;
        this.desc = _description;
    }
}

// const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '909317954bmsh047dcfcbb2d2b16p184cd1jsn158d7469b822',
// 		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };



let data = await fetch(url, options)
.then((response) => response.json())
.then((result) => { return result })
.catch((error) => console.error(error));

console.log("Fetched data:", data);



    let title = data[0].primaryTitle;
    let type = data[0].type;
    let itemUrl = data[0].url;
    let image = data[0].primaryImage;
    let desc = data[0].description

    let mediaItem = new MediaItem(
        title, type, itemUrl, image, desc,
    );

  
document.getElementById('title').innerHTML = mediaItem.title;
document.querySelector('.desc').innerHTML = mediaItem.desc;
document.getElementById('content').src = mediaItem.image;

    console.log(mediaItem);



    // carousel

 var angle = 0;
function galleryspin(sign) { 

spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
// done


// like button
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
	this.classList.toggle('active');
});




















const getNav = document.querySelectorAll(".navLink");
const sections = document.querySelectorAll("main section");

const navLinks = Array.from(getNav);

let Activelink;

let cordsSection = [];
function getPos() {
  sections.forEach((section) =>
    cordsSection.push({
      page: section.textContent,
      link: `#${section.id}`,
      positionTop: Math.floor(section.offsetTop),
      positionBottom: section.offsetHeight + section.offsetTop,
      height: Math.floor(section.offsetHeight)
    })
  );
}

window.onload = () => getPos();

window.addEventListener(
  "scroll",
  function () {
    var top = this.scrollY;
    document.querySelector("header").className = top > 0 ? "scrolled" : "";
    const active = cordsSection.find(
      (section) => top >= section.positionTop && top <= section.positionBottom
    );
    navLinks.forEach((link) => link.classList.remove("active"));
    try {
      const link = navLinks.find(
        (link) => link.getAttribute("href") === active.link
      );
      link.classList.add("active");
    } catch (e) {}
  },
  false
);



