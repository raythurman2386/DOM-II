// Your code goes here
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach((i) => {
  i.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const container = document.querySelector('.container.home');
const letsGoImg = document.querySelector('.letsGo');
const adventureImg = document.querySelector('.adventureImg');
const headerImg = document.querySelector('.headerImg');
const buttons = document.querySelectorAll('.btn');
const sound = document.querySelector('audio');

// Image mouse Event
letsGoImg.addEventListener('mouseover', (e) => {
  e.target.setAttribute('src', 'img/fun.jpg');
});

adventureImg.addEventListener('mouseover', (e) => {
  e.target.setAttribute('src', 'img/adventure.jpg');
});

// Header Image Mouse over event
headerImg.addEventListener('mouseover', (e) => {
  e.target.style.transform = 'scale(1.1)';
});

headerImg.addEventListener('mouseout', (e) => {
  e.target.style.transform = 'scale(1)';
});

// Random container event listener
window.addEventListener('load', (e) => {
  container.style.transition = '2s';
  container.style.opacity = '1';
});

// Button click event
buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(`Don't Click Me!`);
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
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

// Ambient light event listener
window.addEventListener('devicelight', (e) => {
  console.log('hello');
});

const randomColor = () => {
  const char = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += char[Math.floor(Math.random() * 16)];
  }
  return color;
};

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', () => {
    paragraph.style.color = randomColor();
  });
});
