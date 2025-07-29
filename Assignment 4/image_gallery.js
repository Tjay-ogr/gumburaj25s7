const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

/* Declaring the alternative text for each image file */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Wavy rock',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'Wall from ancient Egypt',
  'pic5.jpg': 'Butterfly on a leaf'
};

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.setAttribute('alt', altTexts[i - 1]);
  thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function (e) {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
        displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
  if (btn.className === 'dark') {
    btn.className = 'light';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
