document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menuText = document.querySelector('.menu-text');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Відкриття меню через кнопку або текст "Menu"
    const openMenu = () => {
        mobileMenu.classList.add('active');
    };

    menuButton.addEventListener('click', openMenu);
    menuText.addEventListener('click', openMenu);

    // Закриття меню
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Закриття меню після кліку на посилання
    document.querySelectorAll('.mobile-menu nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Плавний скрол до секцій
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
});