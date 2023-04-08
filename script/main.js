/*
Author: Paul Kim
Date: April 5, 2023
Version: 1.0
Script for mini art gallery webapp img enlarge feature
*/

const images = document.querySelectorAll('.image');
const collapsibles = document.querySelectorAll('.collapsible');

let clickCount = 0;

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the "enlarged" CSS class on the clicked image
    image.classList.toggle('enlarged');
  });
});

collapsibles.forEach(collapsible  => {
  const pointer = collapsible.querySelector('.pointer');
  collapsible.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
      pointer.style.transform = "rotate(90deg)";
    }
    else{
      pointer.style.transform = "rotate(0deg)";
    }
  })
})