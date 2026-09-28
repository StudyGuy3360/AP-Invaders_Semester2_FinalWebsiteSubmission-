
class MediaItem {
    constructor(_title, _type, _url, _image) {
        this.title = _title;
        this.type = _type;
        this.url = _url;
        this.image = _image;
    }
}

const url = 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '909317954bmsh047dcfcbb2d2b16p184cd1jsn158d7469b822',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};



let data = await fetch(url, options)
.then((response) => response.json())
.then((result) => { return result })
.catch((error) => console.error(error));

console.log("Fetched data:", data);



    let title = data[0].primaryTitle;
    let type = data[0].type;
    let itemUrl = data[0].url;
    let image = data[0].primaryImage;

    let mediaItem = new MediaItem(
        title, type, itemUrl, image
    );

    document.getElementById('title').innerHTML = mediaItem.title;
    document.getElementById('content').innerHTML = mediaItem.type + "<br>" + mediaItem.url + "<br>"
    + "<img src='" + mediaItem.image + "'>";

    console.log(mediaItem);
