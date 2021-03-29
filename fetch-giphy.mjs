//use img id as seachKey
//run when img is clicked
//fetch request to search Giphy and return gif
function fetchGiphy(searchKey) {
    let apiKey = 'hlXLDsw1pDI6sCcc7fW4cFEMRmw1jx5Q';
    let searchPhrase = `sign+with+robert+${searchKey}`;
    let giphyURL = `http://api.giphy.com/v1/gifs/search?q=${searchPhrase}&api_key=${apiKey}`

    fetch(giphyURL)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let responseGif = json.data[0].images.original.url
            addGifToPage(responseGif);
        })
        .catch(err => console.log(err));
}

function addGifToPage(gifURL){
    document.querySelector('#gif1').src= gifURL;
}

export {
    fetchGiphy
};