/*
Author: Paul Kim
Date: April 21, 2023
Version: 2.0
Script for art gallery web app features
*/

/*Category collapse feature */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
} // end for

/*Pointer rotation + anchor color change feature */
const collapsibleZelda = document.getElementById('category-zelda');
const collapsiblePokemon = document.getElementById('category-pokemon');
const collapsibleGenshin = document.getElementById('category-genshin');
const collapsibleOverwatch = document.getElementById('category-overwatch');
const collapsibleLotr = document.getElementById('category-lotr');
const collapsibleGhibli = document.getElementById('category-ghibli');
const collapsibleDbz = document.getElementById('category-dbz');
const collapsibleSailormoon = document.getElementById('category-sailormoon');
const collapsibleOther = document.getElementById('category-other');


const anchor1 = document.getElementById('anchor1');
const anchor2 = document.getElementById('anchor2');
const anchor3 = document.getElementById('anchor3');
const anchor4 = document.getElementById('anchor4');
const anchor7 = document.getElementById('anchor7');
const anchor8 = document.getElementById('anchor8');
const anchor9 = document.getElementById('anchor9');
const anchor10 = document.getElementById('anchor10');
const anchor5 = document.getElementById('anchor5');

function styleCategories(inputPointer, inputCollapsible, inputAnchor) {
  let clickCount = 0;
  const pointer = document.getElementById(inputPointer);
  inputCollapsible.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      pointer.style.transform = "rotate(180deg)";
      inputAnchor.style.backgroundColor = "#FF896F";
    }
    else {
      pointer.style.transform = "rotate(0deg)";
      inputAnchor.style.backgroundColor = "#FD554A";
    }
  }) // end event listener
} // end function

styleCategories('pointer1', collapsibleZelda, anchor1);
styleCategories('pointer2', collapsiblePokemon, anchor2);
styleCategories('pointer3', collapsibleGenshin, anchor3);
styleCategories('pointer4', collapsibleOverwatch, anchor4);
styleCategories('pointer7', collapsibleLotr, anchor7);
styleCategories('pointer8', collapsibleGhibli, anchor8);
styleCategories('pointer10', collapsibleSailormoon, anchor10);
styleCategories('pointer5', collapsibleOther, anchor5);


/*To top button*/
const mybutton = document.getElementById("myBtn");
let isScrolling;
let timeout;

function scrollFunction() {
  if (window.scrollY > 20) {
    mybutton.style.opacity = "1";
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      mybutton.style.opacity = "0";
    }, 1500);
  } else {
    mybutton.style.opacity = "0";
  }
  isScrolling = false;
}

function debounceScroll() {
  if (isScrolling) {
    return;
  }
  isScrolling = true;
  window.requestAnimationFrame(scrollFunction);
}

window.addEventListener("scroll", debounceScroll);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Lightbox feature */
const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    const fullSizeImage = document.createElement('img');
    fullSizeImage.src = image.src;
    fullSizeImage.classList.add('lightbox-image');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.appendChild(fullSizeImage);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.classList.add('fade-out');
      setTimeout(() => {
        document.body.removeChild(lightbox);
      }, 500);
    }); // end event listener

    setTimeout(() => {
      lightbox.classList.add('fade-in');
    }, 50);
  }); // end eventListener
}); // end forEach