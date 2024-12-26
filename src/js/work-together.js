// Получение элементов
const footerContent = document.querySelector('.footer');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const emailInput = document.getElementById('email');
const statusMessage = document.getElementById('statusMessage');
const commentsInput = document.getElementById('comments');

// Функция для открытия модального окна
function openModal() {
  modal.classList.remove('hidden');
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
  footerContent.classList.add('page-content');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.add('hidden');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  footerContent.classList.remove('page-content');
}

// Закрытие модального окна
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Валидация email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

// Сброс стилей полей и сообщений
function resetStyles() {
  emailInput.classList.remove('valid', 'invalid');
  commentsInput.classList.remove('valid', 'invalid');
  statusMessage.textContent = '';
  statusMessage.classList.remove('success', 'error');
}

// Обработка отправки формы
contactForm.addEventListener('submit', async e => {
  e.preventDefault(); // Отключение поведения браузера

  const emailValue = emailInput.value.trim();
  const commentsValue = commentsInput.value.trim();

  // Проверка на обязательное заполнение email
  if (!emailValue) {
    emailInput.classList.add('invalid');
    statusMessage.textContent = 'Email is required.';
    statusMessage.classList.add('error');
    return;
  }

  // Проверка на валидность email
  if (!validateEmail(emailValue)) {
    emailInput.classList.add('invalid');
    statusMessage.textContent = 'Invalid email, try again';
    statusMessage.classList.add('error');
    return;
  }

  // Если email валиден
  emailInput.classList.remove('invalid');
  emailInput.classList.add('valid');
  statusMessage.textContent = 'Success!';
  statusMessage.classList.remove('error');
  statusMessage.classList.add('success');

  // Проверка на обязательное заполнение комментария
  if (!commentsValue) {
    commentsInput.classList.add('invalid');
    alert('Comments are required.');
    return;
  } else {
    commentsInput.classList.remove('invalid');
    commentsInput.classList.add('valid');
  }

  // Имитация отправки данных на сервер
  try {
    console.log('Отправка данных на сервер...');
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true; // Успешный или неуспешный ответ
        if (isSuccess) {
          resolve();
        } else {
          reject(new Error('Server error: Unable to process your request.'));
        }
      }, 1500);
    });

    // Успешная отправка
    resetStyles(); // Очистка стили после отправка валидност
    contactForm.reset(); // Очистка формы
    openModal(); // Открытие модального окна
  } catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
});

// Добавление стилей для валидации
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .valid {
    border-color: #3cbc81;
  }
  .invalid {
    border-color: #e74a3b;
  }
  .success {
    color: #3cbc81;
  }
  .error {
    color: #e74a3b;
  }
`;
document.head.appendChild(styleSheet);
