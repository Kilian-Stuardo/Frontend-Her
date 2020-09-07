// JavaScript Document
let navigation = document.querySelector("#navigation");
let button = document.querySelector("#Menu");
let lastScrollPosition;


button.addEventListener("click", function(){
navigation.style.top=0;
lastScrollPosition = window.scrollY;
});

window.addEventListener("scroll", function(){
  let positionDifference = lastScrollPosition - window.scrollY;

  if (positionDifference > 200 || positionDifference < -200) {

    navigation.style.top= "-9em";
  }


});
