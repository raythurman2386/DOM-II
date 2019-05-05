// Your code goes here
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(i => {
  i.addEventListener("click", e => {
    e.preventDefault();
  });
});

const container = document.querySelector('.container.home');
const letsGoImg = document.querySelector('.letsGo');
const adventureImg = document.querySelector('.adventureImg');


// Random container event listener
container.style.opacity = '1';
container.style.transition = '2s';

container.addEventListener('load', e => {
  e.target.style.opacity = '0';
})