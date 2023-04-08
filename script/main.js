/*
Author: Paul Kim
Date: April 5, 2023
Version: 1.0
Script for mini art gallery webapp img enlarge feature
*/

const images = document.querySelectorAll('.image');
const collapsible1 = document.getElementById('category1');
const collapsible2 = document.getElementById('category2');
const collapsible3 = document.getElementById('category3');
const collapsible4 = document.getElementById('category4');
const collapsible5 = document.getElementById('category5');
const collapsible6 = document.getElementById('category6');

let clickCount = 0;
let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the "enlarged" CSS class on the clicked image
    image.classList.toggle('enlarged');
  });
});

  const pointer = document.getElementById('pointer1');
  collapsible1.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      pointer.style.transform = "rotate(90deg)";
    }
    else{
      pointer.style.transform = "rotate(0deg)";
    }
  })


  const pointer2 = document.getElementById('pointer2');
  collapsible2.addEventListener('click', () => {
    clickCount2++;
    if (clickCount2 % 2 !== 0) {
      pointer2.style.transform = "rotate(90deg)";
    }
    else{
      pointer2.style.transform = "rotate(0deg)";
    }
  })

  const pointer3 = document.getElementById('pointer3');
  collapsible3.addEventListener('click', () => {
    clickCount3++;
    if (clickCount3 % 2 !== 0) {
      pointer3.style.transform = "rotate(90deg)";
    }
    else{
      pointer3.style.transform = "rotate(0deg)";
    }
  })

  const pointer4 = document.getElementById('pointer4');
  collapsible4.addEventListener('click', () => {
    clickCount4++;
    if (clickCount4 % 2 !== 0) {
      pointer4.style.transform = "rotate(90deg)";
    }
    else{
      pointer4.style.transform = "rotate(0deg)";
    }
  })

  const pointer5 = document.getElementById('pointer5');
  collapsible5.addEventListener('click', () => {
    clickCount5++;
    if (clickCount5 % 2 !== 0) {
      pointer5.style.transform = "rotate(90deg)";
    }
    else{
      pointer5.style.transform = "rotate(0deg)";
    }
  })

  const pointer6 = document.getElementById('pointer6');
  collapsible6.addEventListener('click', () => {
    clickCount6++;
    if (clickCount6 % 2 !== 0) {
      pointer6.style.transform = "rotate(90deg)";
    }
    else{
      pointer6.style.transform = "rotate(0deg)";
    }
  })
