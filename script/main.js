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
const anchor1 = document.getElementById('anchor1');
const anchor2 = document.getElementById('anchor2');
const anchor3 = document.getElementById('anchor3');
const anchor4 = document.getElementById('anchor4');
const anchor5 = document.getElementById('anchor5');
const anchor6 = document.getElementById('anchor6');

let clickCount = 0;
let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;

  const pointer = document.getElementById('pointer1');
  collapsible1.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      pointer.style.transform = "rotate(90deg)";
      anchor1.style.backgroundColor = "#FF896F";
    }
    else{
      pointer.style.transform = "rotate(0deg)";
      anchor1.style.backgroundColor =  "#FD554A";
    }
  })


  const pointer2 = document.getElementById('pointer2');
  collapsible2.addEventListener('click', () => {
    clickCount2++;
    if (clickCount2 % 2 !== 0) {
      pointer2.style.transform = "rotate(90deg)";
      anchor2.style.backgroundColor = "#FF896F";
    }
    else{
      pointer2.style.transform = "rotate(0deg)";
      anchor2.style.backgroundColor =  "#FD554A";
    }
  })

  const pointer3 = document.getElementById('pointer3');
  collapsible3.addEventListener('click', () => {
    clickCount3++;
    if (clickCount3 % 2 !== 0) {
      pointer3.style.transform = "rotate(90deg)";
      anchor3.style.backgroundColor = "#FF896F";
    }
    else{
      pointer3.style.transform = "rotate(0deg)";
      anchor3.style.backgroundColor =  "#FD554A";
    }
  })

  const pointer4 = document.getElementById('pointer4');
  collapsible4.addEventListener('click', () => {
    clickCount4++;
    if (clickCount4 % 2 !== 0) {
      pointer4.style.transform = "rotate(90deg)";
      anchor4.style.backgroundColor = "#FF896F";
    }
    else{
      pointer4.style.transform = "rotate(0deg)";
      anchor4.style.backgroundColor =  "#FD554A";
    }
  })

  const pointer5 = document.getElementById('pointer5');
  collapsible5.addEventListener('click', () => {
    clickCount5++;
    if (clickCount5 % 2 !== 0) {
      pointer5.style.transform = "rotate(90deg)";
      anchor5.style.backgroundColor = "#FF896F";
    }
    else{
      pointer5.style.transform = "rotate(0deg)";
      anchor5.style.backgroundColor =  "#FD554A";
    }
  })

  const pointer6 = document.getElementById('pointer6');
  collapsible6.addEventListener('click', () => {
    clickCount6++;
    if (clickCount6 % 2 !== 0) {
      pointer6.style.transform = "rotate(90deg)";
      anchor6.style.backgroundColor = "#FF896F";
    }
    else{
      pointer6.style.transform = "rotate(0deg)";
      anchor6.style.backgroundColor =  "#FD554A";
    }
  })

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
