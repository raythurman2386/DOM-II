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
const buttons = document.querySelectorAll('.btn');
const sound = document.querySelector('audio');



// Image Click Event
letsGoImg.addEventListener('mouseover', e => {
  e.target.setAttribute('src', 'img/fun.jpg');
})

adventureImg.addEventListener('mouseover', e => {
  e.target.setAttribute('src', 'img/adventure.jpg');
})


// Random container event listener
container.style.opacity = '1';
container.style.transition = '2s';

container.addEventListener('loadend', e => {
  e.target.style.opacity = '0';
})

// Button click event
buttons.forEach(button => {
  button.addEventListener('click', playSound);
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    alert(`Don't Click Me!`);
  });
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.style.color !== '#fff') {
      e.target.style.color = 'crimson';
    } else {
      e.target.style.color.toggle = 'white';
    }
  });
});

// window.addEventListener('click', playSound);



function playSound(e) {
  sound.currentTime = 0;
  sound.play();
}