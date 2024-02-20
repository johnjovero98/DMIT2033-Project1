const menuBttn = document.querySelector(".menu-button")
const navMenu = document.querySelector('nav');


menuBttn.addEventListener("click", function(){
    navMenu.classList.toggle('show-nav');
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
})


