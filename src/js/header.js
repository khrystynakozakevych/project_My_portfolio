// Отримуємо елементи з DOM
const menuButton = document.querySelector('.menu-button'); // Кнопка відкриття мобільного меню
const mobileMenu = document.querySelector('.mobile-menu'); // Елемент мобільного меню
const closeMenuButton = document.querySelector('.close-menu'); // Кнопка закриття мобільного меню
const tabletMenuButton = document.querySelector('.menu-text'); // Текстова кнопка "Menu" для планшета
const tabletMenu = document.querySelector('.tablet-menu'); // Елемент меню для планшетів
const mobileMenuLinks = mobileMenu.querySelectorAll('a'); // Усі посилання (якорі) в мобільному меню
const tabletMenuLinks = tabletMenu.querySelectorAll('a'); // Усі посилання (якорі) в меню для планшетів

// Відкриття мобільного меню
menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active'); // Додаємо клас, щоб зробити мобільне меню видимим
});

// Закриття мобільного меню
closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active'); // Видаляємо клас, щоб приховати мобільне меню
});

// Відкриття/закриття меню для планшетів
tabletMenuButton.addEventListener('click', () => {
  tabletMenu.classList.toggle('active'); // Перемикаємо клас active для меню планшетів
});

// Закриття мобільного меню при кліку на посилання
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Приховуємо мобільне меню
  });
});

// Закриття меню для планшетів при кліку на посилання
tabletMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    tabletMenu.classList.remove('active'); // Приховуємо меню для планшетів
  });
});
