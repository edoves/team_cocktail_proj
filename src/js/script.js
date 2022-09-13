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