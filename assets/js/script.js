"use strict";

//add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

//PRELOADER
//preloader will be visible until document load
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

//MOBILE NAVBAR
//Show the mobile navbar when clicking the menu btn
//and hiding after clicking menu close btn or overlay

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const backTopBtn = document.querySelector(".back-top-btn");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

//HEADER & BackToTop Btn
//Active header when window scroll down to 100px
const header = document.querySelector("[data-header]");
const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);


//SCROLL REVEAL

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function(){
  for (let i = 0; i < revealElements.length; i++){
    if(revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15){
      revealElements[i].classList.add('revealed');
    }else{
      revealElements[i].classList.remove('revealed');
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);