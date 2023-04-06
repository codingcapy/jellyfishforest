const images = document.querySelectorAll('.image');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the "enlarged" CSS class on the clicked image
    image.classList.toggle('enlarged');
  });
});