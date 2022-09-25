console.log(3, "Third Load");


class UI {
  displayCategory(cat, containerId) {
    cockTailAPI.getCategories(cat).then(({ drinks }) => {
      drinks.map(function (item, index) {
        //Append to the card__container class
        containerId.innerHTML +=
          `<div class="card__item" key=${index}>
            <div class="card_image">
              <img src="${item.strDrinkThumb}" alt="category">
            </div>
            <div class="card__desc">
              <p>${item.strDrink}</p>
            </div>
          </div>`;
      });
    });  
  }
}