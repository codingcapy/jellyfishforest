/*
Author: Paul Kim
Date: April 5, 2023
Version: 1.0
Script for mini art gallery webapp features
*/

/*Category collapse feature */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/*Pointer rotation + anchor color change feature */
const collapsible1 = document.getElementById('category1');
const collapsible2 = document.getElementById('category2');
const collapsible3 = document.getElementById('category3');
const collapsible4 = document.getElementById('category4');
const collapsible5 = document.getElementById('category5');
const collapsible6 = document.getElementById('category6');
const collapsible7 = document.getElementById('category7');
const collapsible8 = document.getElementById('category8');
const collapsible9 = document.getElementById('category9');
const collapsible10 = document.getElementById('category10');
const anchor1 = document.getElementById('anchor1');
const anchor2 = document.getElementById('anchor2');
const anchor3 = document.getElementById('anchor3');
const anchor4 = document.getElementById('anchor4');
const anchor5 = document.getElementById('anchor5');
const anchor6 = document.getElementById('anchor6');
const anchor7 = document.getElementById('anchor7');
const anchor8 = document.getElementById('anchor8');
const anchor9 = document.getElementById('anchor9');
const anchor10 = document.getElementById('anchor10');

function styleCategories(inputPointer, inputCollapsible, inputAnchor){
  let clickCount = 0;
  const pointer = document.getElementById(inputPointer);
  inputCollapsible.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      pointer.style.transform = "rotate(180deg)";
      inputAnchor.style.backgroundColor = "#FF896F";
    }
    else{
      pointer.style.transform = "rotate(0deg)";
      inputAnchor.style.backgroundColor =  "#FD554A";
    }
  })
}

styleCategories('pointer1', collapsible1, anchor1);
styleCategories('pointer2', collapsible2, anchor2);
styleCategories('pointer3', collapsible3, anchor3);
styleCategories('pointer4', collapsible4, anchor4);
styleCategories('pointer5', collapsible5, anchor5);
styleCategories('pointer6', collapsible6, anchor6);
styleCategories('pointer7', collapsible7, anchor7);
styleCategories('pointer8', collapsible8, anchor8);
styleCategories('pointer9', collapsible9, anchor9);
styleCategories('pointer10', collapsible10, anchor10);

  /*Enlarge image feature*/
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('enlarged');
    });
  });

/*To top button*/
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
