const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const counter = event.currentTarget.classList;
    let number = counter.contains('increase')
      ? count++
      : counter.contains('decrease')
      ? count--
      : (count = 0);

    let color =
      count > 0
        ? (value.style.color = 'green')
        : count < 0
        ? (value.style.color = 'red')
        : (value.style.color = 'black');
    value.textContent = count;
  });
});

// first, we need to target the counter value and buttons
// second, we need to set a count variable to zero in order to change it later with the buttons
// next, we will use a forEach method to select all three buttons rather than creating separate functions for each; will need a parameter to accept each button
// in the forEach method, we want to create a click event listener; for the callback function, we will need a parameter to accept each input from the clicks
// we want to target the classes for each button so we can use conditional statements to change the counter based on the class name
// use a ternary operator for the count to increase/decrease/reset
// use a ternary operator for the value to change its color
