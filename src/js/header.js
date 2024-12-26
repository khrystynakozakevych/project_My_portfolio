// Mobile menu
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Toggle for mobile menu
menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Tablet menu
const tabletMenuButton = document.querySelector('.tablet-menu');
const navTabletMenu = document.querySelector('.nav-tablet');
const tabletLinks = document.querySelectorAll('.nav-tablet a, .order-button');

// Toggle for tablet menu
tabletMenuButton.addEventListener('click', () => {
  navTabletMenu.classList.toggle('active');
});

tabletLinks.forEach(link => {
  link.addEventListener('click', () => {
    navTabletMenu.classList.remove('active');
  });
});
