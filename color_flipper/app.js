const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const specialButton = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomPick = getRandomColor();
  document.body.style.background = colors[randomPick];
  color.textContent = colors[randomPick];
});

const getRandomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

// first, target the button with its id which we will add a click listener
// second, target the span tag inside the h2 tag which will change to the hex value/color name/etc once the button is clicked
// create the click event listener with a callback function which will change the background color based on the values in the array
// next, in the callback function we want to target the body background, span tag, and use a function that will generate a random number
// getRandomColor() will return a random number from 0 - 4 (length of the colors array)
// store that function into a variable inside the click event listener so a random number is stored
// the targeted objects will use that stored variable inside the array to randomly choose a value
// each click will run the getRandomColor() which will produce a different color
