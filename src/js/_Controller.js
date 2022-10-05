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

//Get Categories
const categoryLinks = document.querySelector(".category__links");
const cardContainer = document.querySelectorAll(".card__container");




// cardContainer.firstChild;
/**
 *  * EventListners fires once page laoded
 */
eventListners();
function eventListners() {
  document.addEventListener("DOMContentLoaded", pageReady);
  
}
  // const btnArray = Array.from(btn);
  
  
  //load More Button
  let loadMoreBtn = document.querySelector(".loadMoreBtn");
  
function pageReady() {
  // ui.categoryUI();

  const btnArray = categoryLinks.querySelectorAll(".btn");
  
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
          ui.loader(containerId, card);
          ui.displayCategory(newString, containerId,loadMoreBtn);
        }
      }
      // console.log("first");
    });
  });
}