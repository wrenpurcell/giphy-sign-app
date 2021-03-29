import {
    fetchGiphy
}
    from './fetch-giphy.mjs';

function main() {

    let div = document.querySelector('div');
    let imgList = div.querySelectorAll('img');
    console.log(imgList);
    imgList.forEach(img => {
        img.addEventListener("click", function () {
            fetchGiphy(img.id);
        });
    });
}

main();