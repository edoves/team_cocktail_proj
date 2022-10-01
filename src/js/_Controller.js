console.log(4, "Last Load");
const cockTailAPI = new CockTailAPI();
const ui = new UI();

//burger menu
let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

//dynamic year
document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));

//sticky menu when scroll

window.addEventListener("scroll", function() {
  
  const menuSticky = document.querySelector(".category__container");
  const scrolled = window.scrollY;

    if(scrolled >= 550 ) {
      menuSticky.classList.toggle("sticky", window.scrollY)
    } else {
      menuSticky.classList.remove('sticky', window.scrollY) 
    }
  }

)


//Get Categories
const categoryLinks = document.querySelector(".category__links");
const cardContainer = document.querySelectorAll(".card__container");
const search = document.querySelector(".search__form");
// cardContainer.firstChild;
/**
 *  * EventListners fires once page laoded
 */
eventListners();
function eventListners() {
  document.addEventListener("DOMContentLoaded", pageReady);
  // targeting the searhc input in cocktail page
  if (search) {
    search.addEventListener("submit", searchCocktail);
  }
}

function pageReady() {
  // ui.categoryUI();

  const btnArray = categoryLinks.querySelectorAll(".btn");
  // const btnArray = Array.from(btn);

  btnArray.forEach((btn) => {
    btn.addEventListener("click", function () {
      let newString;
      let containerId;
      let newCat;
      const catStrings = btn.dataset.action.split(" ");
      for (let i = 0; i < catStrings.length; i++) {
        catStrings[i] =
          catStrings[i].charAt(0).toUpperCase() + catStrings[i].substring(1);
      }
      newString = catStrings.join(" ");
      newCat = newString.replace(/\s/g, "");

      for (const buttons of btnArray) {
        buttons.classList.remove("active");
        buttons.removeAttribute("disabled");
      }

      this.classList.add("active");
      this.setAttribute("disabled", "");

      for (const card of cardContainer) {
        if (newCat !== card.getAttribute("id")) {
          card.classList.add("hide");
          card.innerHTML = "";
        } else {
          card.classList.remove("hide");
        }
      }
      containerId = document.querySelector("#" + newCat);
      ui.displayCategory(newString, containerId);
      // console.log("first");
    });
  });
}

function searchCocktail(e) {
  e.preventDefault();
  const searchInput = document.querySelector(".search__input").value;

  ui.displaySearch(searchInput);
}
