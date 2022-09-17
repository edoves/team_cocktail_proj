console.log(1, "First Load");

class CockTailAPI {
  getCategories() {
    categoryList.map(function (item, index) {
      //Append to the card__container class
      cardContainer.innerHTML += `<div class="card__item" key=${index}>
                  <div class="card_image">
                    <img src="/src/images/${item.image}" alt="category">
                  </div>
                  <div class="card__desc">
                    <p>${item.title}</p>
                    <p>${item.description}</p>
                  </div>
                </div>`;
    });
  }
}
