console.log(3, 'Third Load');

class UI {
  displayCategory(cat, containerId, loadMoreBtn) {
    cockTailAPI.getCategories(cat).then(({ drinks }) => {
      drinks.slice(0,9).map(function (item, index) {
        //Append to the card__container class
        setTimeout(() => {
          containerId.innerHTML +=
          `<div class="card__item" key=${index}>
            <div class="card_image">
              <img src="${item.strDrinkThumb}" alt="category">
            </div>
            <div class="card__desc">
              <p>${item.strDrink}</p>
            </div>
          </div>`;
        }, 1500);
      });
      drinks.slice(9).map(function (item, index) {
        //Append to the card__container class
        setTimeout(() => {
          containerId.innerHTML +=
          `<div class="card__item hide" key=${index}>
            <div class="card_image">
              <img src="${item.strDrinkThumb}" alt="category">
            </div>
            <div class="card__desc">
              <p>${item.strDrink}</p>
            </div>
          </div>`;
        }, 1500);
      });
      console.log(drinks)
    });  
    loadMoreBtn.classList.remove('hide');
  }

  

  //new
  loadMore(containerId, loadMoreBtn) {
    var collection;
    collection = containerId.querySelectorAll('.hide');
    if (collection.length > 0) {
      var slicedCollection = Array.from(collection).slice(0, 3);
      for (const sliceChild of slicedCollection) {
        sliceChild.classList.remove('hide');
      }
    } else {
      loadMoreBtn.classList.add('hide');
    }
    console.log(collection.length);
  }
  //new

  
  displaySearch({ drinks }) {
    const cardsContainer = document.querySelector('.cards__container');
    this.loader(cardsContainer);
    drinks
      .sort(() => 0.5 - Math.random())
      .map((drink) => {
        setTimeout(() => {
          cardsContainer.innerHTML += `
            <article class="cards__item">
                <figure class="cards__thumbnail">
                  <img src=${drink.strDrinkThumb} />
                </figure>
              <div class="cards__content">
                  <div class="cards__desc">
                    <h2>${drink.strDrink}</h2>
                    <h3>Instructions:</h3>
                    <p>
                      ${drink.strInstructions}
                    </p>
                  </div>
                  <div class="cards__title">
                    <p>Ingredients</p>
                  </div>
                  <div class="cards__ingredients">        
                  <ul>
                  ${this.#dispayIngList(drink)}
                  </ul>
                 </div>
              </div>
            </article>
            `;
        }, 2000);
      });
  }

  #dispayIngList(ingObj) {
    const arrItems = [];
    for (let i = 1; i < 10; i++) {
      const ingredients = {};
      if (ingObj[`strIngredient${i}`] !== null) {
        ingredients.ingredient = ingObj[`strIngredient${i}`];
        arrItems.push(ingredients);
      }
    }

    return arrItems
      .map((arrItems) => `<li>${arrItems.ingredient}</li>`)
      .join('');

    //########### Testing *for in Loop" way ###########//
    // arrItems.map(({ ingredient }) => console.log(ingredient));
    // const items1 = [];
    // for (const prop in ingObj) {
    //   const ingredients1 = {};
    //   if (ingObj[prop] !== null) {
    //     ingredients1.ingredient = ingObj[prop];
    //     items1.push(ingredients1);
    //   }
    // }
    // console.log(items1);
  }

  loader(cardContainerElement) {
    const loaderContainer = cardContainerElement.parentElement;
    const loaderImg = document.createElement('img');
    loaderImg.classList = 'loader';
    loaderImg.src = '../src/images/loader.gif';
    loaderContainer.insertBefore(loaderImg, loaderContainer.firstChild);
    cardContainerElement.innerHTML = '';
    setTimeout(() => {
      loaderImg.remove();
    }, 2000);
  }

  //emman code
  // loader(cardContainerElement, card) {
  //   const loaderContainer = cardContainerElement.parentElement;
  //   const loaderImg = document.createElement("img");
  //   loaderImg.classList = "loader";
  //   loaderImg.src = "../src/images/loader.gif";
  //   loaderContainer.insertBefore(loaderImg, loaderContainer.firstChild);
  //   this.fadeOutEffect(loaderImg, card);
  // }

  // fadeOutEffect(img, card) {
  //   var fadeEffect = setInterval(function () {
  //       if (!img.style.opacity) {
  //           img.style.opacity = 1;
  //       }
  //       if (img.style.opacity > 0) {
  //           img.style.opacity -= 0.1;
  //       } else {
  //         img.remove();
          
  //         clearInterval(fadeEffect);
  //       }
  //   }, 150);
  // }
  //emman code
  
  displayMessage(msg, className, el) {
    const msgEl = document.createElement('p');
    msgEl.classList = className;
    msgEl.textContent = msg;
    const containerDiv = el.parentElement.parentElement;
    containerDiv.insertBefore(msgEl, containerDiv.firstChild);

    setTimeout(() => {
      msgEl.remove();
    }, 2000);
  }
}


  