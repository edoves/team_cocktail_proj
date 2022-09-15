//burger menu 
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

//dynamic year
document.getElementById('copyright')
.appendChild(document.createTextNode(new Date()
.getFullYear()))

// <!--################## Category section start ##################-->

//category items
// api url
const api_url = "http://localhost:3000/src/js/data.json";
// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    show(data)
}
// Calling that async function
getapi(api_url);

//Return the elements in the categoryList array;
function show(data) {
  let cardContainer = document.querySelector(".card__container");
  var categoryItem = []
  categoryItem = data.categoryList;
  //Map to the array of categoryItem
  categoryItem.map(function (item, index) {
    //Append to the card__container class
    cardContainer.innerHTML += 
    `<div class="card__item" key=${index}>
      <div class="card_image">
        <img src="/src/images/${item.image}" alt="category">
      </div>
      <div class="card__desc">
        <p>${item.title}</p>
        <p>${item.description}</p>
      </div>
    </div>`
  });
}

// <!--################## Category section end ##################-->
    