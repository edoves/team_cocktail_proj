console.log(3, "Third Load");

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

  loader(cardContainerElement, card) {
    const loaderContainer = cardContainerElement.parentElement;
    const loaderImg = document.createElement("img");
    loaderImg.classList = "loader";
    loaderImg.src = "../src/images/loader.gif";
    loaderContainer.insertBefore(loaderImg, loaderContainer.firstChild);
    this.fadeOutEffect(loaderImg, card);
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

  fadeOutEffect(img, card) {
    var fadeEffect = setInterval(function () {
        if (!img.style.opacity) {
            img.style.opacity = 1;
        }
        if (img.style.opacity > 0) {
            img.style.opacity -= 0.1;
        } else {
          img.remove();
          card.classList.add('fade-in');
          clearInterval(fadeEffect);
        }
    }, 150);
  }
}


