const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

document.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    let hexValue = Math.floor(Math.random() * hex.length);
    hexColor += hex[hexValue];
  }
  document.body.style.background = hexColor;
  color.textContent = hexColor;
});

// difference between this hex.html and index.html will be a for loop that will run 6 times to choose a random value in the hex array
