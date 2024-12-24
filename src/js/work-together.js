// Получение элементов
// const pageContent = document.querySelector('.page-content');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalClose = document.querySelector('.modal-close');

// Функция для открытия модального окна
function openModal() {
  modal.classList.remove('hidden');
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
  //   pageContent.classList.add('blurred');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.add('hidden');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  //   pageContent.classList.remove('blurred');
}

// Закрытие модального окна с клавой
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Обработка формы
contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const comments = document.getElementById('comments').value.trim();

  // Простая проверка на заполненность
  if (!email || !comments) {
    alert('Please fill out all required fields.');
    return;
  }

  // Имитация отправки данных на сервер
  try {
    // Показываем процесс "отправки данных"
    console.log('Отправка данных на сервер...');
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Меняем условие для тестирования ошибок
        const isSuccess = true; // Поменяйте на false для тестирования ошибки
        if (isSuccess) {
          resolve(); // Успешный ответ
        } else {
          reject(new Error('Server error: Unable to process your request.'));
        }
      }, 0); // Имитация задержки 1.5 секунды
    });

    // Успешная отправка
    contactForm.reset(); // Очистка формы
    openModal(); // Открытие модального окно вызыв функция
  } catch (error) {
    // Обработка ошибки
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
});
