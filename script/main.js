/*
Author: Paul Kim
Date: April 5, 2023
Version: 1.0
Script for mini art gallery webapp img enlarge feature
*/

const images = document.querySelectorAll('.image');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the "enlarged" CSS class on the clicked image
    image.classList.toggle('enlarged');
  });
});