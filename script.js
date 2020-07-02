
// var menu = document.getElementById('menu');
// var nav = document.getElementById('nav');
// var exit = document.getElementById('exit');

// menu.addEventListener('click', function(e) {
//     nav.classList.toggle('hide-desktop');
//     e.preventDefault();
// });

// exit.addEventListener('click', function(e) {
//     nav.classList.add('hide-mobile');
//     e.preventDefault();
// });
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});



