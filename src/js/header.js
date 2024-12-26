// Отримуємо елементи з DOM
const menuButton = document.querySelector('.menu-button'); // Кнопка відкриття меню
const closeMenuButton = document.querySelector('.close-menu'); // Кнопка закриття меню
const mobileMenu = document.querySelector('.mobile-menu'); // Елемент мобільного меню

// Функція для відкриття мобільного меню
menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active'); // Додаємо клас, щоб зробити меню видимим
});

// Функція для закриття мобільного меню
closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active'); // Видаляємо клас, щоб приховати меню
});
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-text'); // Кнопка "Menu"
  const tabletMenu = document.querySelector('.tablet-menu'); // Меню для планшета

  // Додаємо обробник події на кнопку "Menu"
  menuButton.addEventListener('click', function () {
    tabletMenu.classList.toggle('active'); // Перемикаємо клас active для меню
  });
});
