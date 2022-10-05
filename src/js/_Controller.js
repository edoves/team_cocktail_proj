console.log(4, 'Last Load');
const cockTailAPI = new CockTailAPI();
const ui = new UI();

//burger menu
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
});

//dynamic year
document
  .getElementById('copyright')
  .appendChild(document.createTextNode(new Date().getFullYear()));

//sticky menu when scroll

window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;

  const menuSticky = document.querySelector('.category__container');

  if (scrolled >= 550) {
    menuSticky.classList.toggle('sticky', window.scrollY);
  } else {
    menuSticky.classList.remove('sticky', window.scrollY);
  }
});

//Get Categories
const cardContainer = document.querySelectorAll('.card__container');
const categoryLinks = document.querySelector('.category__links');

// cardContainer.firstChild;
/**
 *  * EventListners fires once page laoded
 */
eventListners();
function eventListners() {
  document.addEventListener('DOMContentLoaded', pageReady);
  // targeting the searhc input in cocktail page
  const search = document.querySelector('.search__form');
  if (search) {
    search.addEventListener('submit', searchCocktails);
  }
}
  // const btnArray = Array.from(btn);
  
  
  //load More Button
  let loadMoreBtn = document.querySelector(".loadMoreBtn");
  
function pageReady() {
  // ui.categoryUI();

  const btnArray = categoryLinks.querySelectorAll('.btn');
  // const btnArray = Array.from(btn);

  btnArray.forEach((btn) => {
    btn.addEventListener('click', function () {
      let newString;
      let containerId;
      let newCat;
      const catStrings = btn.dataset.action.split(' ');
      for (let i = 0; i < catStrings.length; i++) {
        catStrings[i] =
          catStrings[i].charAt(0).toUpperCase() + catStrings[i].substring(1);
      }
      newString = catStrings.join(' ');
      newCat = newString.replace(/\s/g, '');

      for (const buttons of btnArray) {
        buttons.classList.remove('active');
        buttons.removeAttribute('disabled');
      }
      this.classList.add('active');
      this.setAttribute('disabled', '');
      
      containerId = document.querySelector("#" + newCat);
      //new
      loadMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        ui.loadMore(containerId, loadMoreBtn);
      });
      //new
      for (const card of cardContainer) {
        if (newCat !== card.getAttribute('id')) {
          card.classList.remove('fade-in');
          card.innerHTML = ""
        } else {
          ui.loader(containerId);
          card.classList.add('fade-in');
          ui.displayCategory(newString, containerId,loadMoreBtn);
        }
      }
      // console.log("first");
    });
  });
}

function searchCocktails(e) {
  e.preventDefault();
  const searchInput = document.querySelector('.search__input');
  const sQuery = searchInput.value;
  if (!sQuery) {
    ui.displayMessage(`The input field is empty`, 'alert', searchInput);
  } else {
    cockTailAPI.getCocktailByName(sQuery).then((data) => {
      if (data.drinks === null) {
        ui.displayMessage(
          `The item "${sQuery}" is not available`,
          'alert',
          searchInput
        );
      } else {
        ui.displayMessage(
          `Here are the info about ${sQuery.toUpperCase()}`,
          'success',
          searchInput
        );
        ui.displaySearch(data);
        this.reset();
      }
    });
  }
}
