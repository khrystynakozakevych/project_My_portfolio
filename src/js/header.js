document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button'); // Кнопка-гамбургер
    const menuTextButton = document.querySelector('.menu-text'); // Кнопка "Menu"
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu');

    // Відкрити мобільне меню з кнопки-гамбургера
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Відкрити мобільне меню з кнопки "Menu"
    menuTextButton.addEventListener('click', (event) => {
        event.preventDefault(); // Щоб уникнути переходу за посиланням
        mobileMenu.classList.add('active');
    });

    // Закрити мобільне меню з кнопки ✕
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Закривати меню після кліку на посилання в мобільному меню
    document.querySelectorAll('.mobile-menu nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});