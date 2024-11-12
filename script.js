"use strict";
let textTag = document.querySelector(".section1 h1");
let text = textTag.textContent;
let logo = document.querySelector(".mylogo");

//reload klikom na logo
logo.addEventListener("click", function () {
  location.reload();
});

let splittedText = text.split("");
textTag.innerHTML = "";

for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] == " ") {
    splittedText[i] = "&nbsp";
  }
  textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let k = 0;
let interval = setInterval(() => {
  let spans = textTag.querySelectorAll("span");
  let singleSpan = spans[k];
  singleSpan.className = "fadeMove";
  k++;

  if (k === spans.length) {
    clearInterval(interval);
  }
}, 70);

//BORDER LINE ANIMACIJA i Spajanje auta
let border = document.querySelector(".border-line");
let animationWidth = 0;
window.onscroll = () => {
  if (this.oldScroll > this.scrollY) {
    //gore
    animationWidth -= 2;
  } else {
    //dolje
    animationWidth += 2;
  }
  if (animationWidth >= 100) {
    animationWidth = 100;
  }
  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + "%";
  this.oldScroll = this.scrollY;

  imageAnimation();
};

const imageAnimation = () => {
  let sectionForAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPostion = window.innerHeight;
  let leftImage = document.querySelector(".slideFromLeft");
  let rightImage = document.querySelector(".slideFromRight");

  if (sectionPosition < screenPostion) {
    leftImage.classList.add("animated");
    rightImage.classList.add("animated");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // JavaScript kod koji ima pristup svim HTML elementima
  let nekiElement = document.getElementById("sometext");
  console.log("Pristup HTML elementu:", nekiElement);
});
