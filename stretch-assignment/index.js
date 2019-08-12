const rockets = document.querySelectorAll('.blocks');
let travel;

console.log(rockets);

const addMargin = (e) => {
  console.log('clicky, clicky');
};

const subMargin = (e) => {
  console.log('noclicky, clicky');
};

rockets.forEach((rocket) => {
  rocket.addEventListener('mousedown', addMargin);
});

rockets.forEach((rocket) => {
  rocket.addEventListener('mouseup', subMargin);
});
