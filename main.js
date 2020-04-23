const searchInput = document.getElementById("search");

const imagesCollection = [...document.getElementsByTagName('a')];
let searchValue;

function myFunction() {
    searchInput.value = searchInput.value.toLowerCase();
    searchValue = searchInput.value
    // console.log(searchValue)
    for (let i = 0; i < imagesCollection.length; i++) {
        let attr = imagesCollection[i].getAttribute('data-title').toLowerCase();
        if (attr.includes(searchValue)) {
            imagesCollection[i].style.display = 'block';
            console.log(imagesCollection[i])
            console.log(searchValue)
        } else {
            imagesCollection[i].style.display = 'none'
        }
    }
}

searchInput.addEventListener("keyup", myFunction)