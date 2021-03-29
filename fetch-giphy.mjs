function getIconId(iconId){
    //for all images, run when clicked
    //when image is clicked get Id and use that for searchKey and run fetchGiphy
    //highlight current icon, add border? 

}

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
            // console.log(responseGif);
            addGifToPage(responseGif);
        })
        .catch(err => console.log(err));
}

function addGifToPage(gifURL){
    //1 gif at a time on page 
    //embed URL in gif div 
    document.querySelector('#gif1').src= gifURL;
}

export {
    fetchGiphy
};