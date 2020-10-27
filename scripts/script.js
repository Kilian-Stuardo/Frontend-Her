// variables
// je pakt de header
const header = document.querySelector('header');
// sla de positie op 
let savedPosition = 0;

const fullScreen = document.querySelector(".fullscreen-menu");
const hamburger = document.querySelector('#fullimage');
const hamburgerCross = document.querySelector('.cross');

// Hamburger menu click
// Inspiratie Bron: https://stackoverflow.com/questions/35579569/hide-show-menu-onclick-javascript

console.log(hamburger);

hamburger.addEventListener('click', function(event) {
    fullScreen.style.display = 'block';

}, false)

hamburgerCross.addEventListener('click', function(event) {
    console.log(hamburgerCross)
    fullScreen.style.display = 'none';
}, false)


// Header scroll hide / show
// Inspiratie Bron: https://stackoverflow.com/questions/35579569/hide-show-menu-onclick-javascript

// je wilt op interval weten wat de huidige positie is
window.setInterval(() => {
    // je variabelen opvullen met de huidige pageYOffset
    savedPosition = window.pageYOffset;
    // hier log ik de positie om te saven (even een check)
    console.log('saved', savedPosition)
        // tijd in ms (kan ik nog mee spelen)
}, 3500)

// Je luistert naar scroll
window.addEventListener('scroll', () => {
    /* console.log de berekening wat het verschil is OMHOOG
    van de scroll positie om dan het menu weer te tonen. Je voegt 
    hier de classList toe. */
    // console.log('asda', savedPosition - window.scrollY > 200);
    // if statement opgeslagen positie - scroll = verschil en is het verschil groter dan 200? toon
    if (savedPosition - window.scrollY > 200) {
        // hide
        header.classList.remove('hide');
        // show
        header.classList.add('show');
        // is scroll van de pagina kleiner dan 200? toon.
    } else if (window.scrollY <= 200) {
        header.classList.remove('hide');
        header.classList.add('show');
        // iets anders? HIDE
    } else {
        header.classList.remove('show');
        header.classList.add('hide');
    }
})