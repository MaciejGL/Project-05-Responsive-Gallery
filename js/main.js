const searchInput = document.getElementById("search");

const imagesCollection = [...document.getElementsByTagName('a')];
let searchValue;

function myFunction() {
    let searchInputValue = searchInput.value.toLowerCase();
    searchValue = searchInputValue;

    for (let i = 0; i < imagesCollection.length; i++) {
        let attr = imagesCollection[i].getAttribute('data-title').toLowerCase();
        if (attr.includes(searchValue)) {
            imagesCollection[i].style.display = 'block';
            console.log(imagesCollection[i]);
            console.log(searchValue);
        } else {
            imagesCollection[i].style.display = 'none';
        }
    }
}

searchInput.addEventListener("keyup", myFunction);