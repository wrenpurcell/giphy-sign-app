import {
    fetchGiphy
}
    from './fetch-giphy.mjs';

function main() {
    let div = document.querySelector('div');
    let imgList = div.querySelectorAll('img');
    imgList.forEach(img => {
        img.addEventListener("click", function () {
            fetchGiphy(img.id);
            //add border style to img 
        });
    });
   
    
}

main();