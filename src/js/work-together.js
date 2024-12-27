// Получение элементов
const footerContent = document.querySelector('.footer');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const emailInput = document.getElementById('email');
const statusMessage = document.getElementById('statusMessage');
const commentsInput = document.getElementById('comments');
const commentMessage = document.getElementById('commetMessage');

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

// Общая функция для валидации
function validateField(
  input,
  messageElement,
  validateFn,
  emptyMessage,
  errorMessage,
  successMessage
) {
  const value = input.value.trim();

  if (!value) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    messageElement.textContent = emptyMessage;
    messageElement.classList.add('error');
    messageElement.classList.remove('success');
    return false;
  }

  if (!validateFn(value)) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    messageElement.textContent = errorMessage;
    messageElement.classList.add('error');
    messageElement.classList.remove('success');
    return false;
  }

  input.classList.remove('invalid');
  input.classList.add('valid');
  messageElement.textContent = successMessage;
  messageElement.classList.remove('error');
  messageElement.classList.add('success');
  return true;
}

// Валидация email
function validateEmail(email) {
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

// Валидация комментариев
function validateComments(comments) {
  return comments.length >= 5; // Минимум 5 символов
}

// Сброс стилей полей и сообщений
function resetStyles() {
  emailInput.classList.remove('valid', 'invalid');
  commentsInput.classList.remove('valid', 'invalid');
  statusMessage.textContent = '';
  commentMessage.textContent = '';
  statusMessage.classList.remove('success', 'error');
  commentMessage.classList.remove('success', 'error');
}

// Обработка отправки формы
contactForm.addEventListener('submit', async e => {
  e.preventDefault(); // Отключение поведения браузера

  const isEmailValid = validateField(
    emailInput,
    statusMessage,
    validateEmail,
    'Email is required.',
    'Invalid email, try again.',
    'Valid email!'
  );

  const isCommentsValid = validateField(
    commentsInput,
    commentMessage,
    validateComments,
    'Comments are required.',
    'Comments must be at least 5 characters.',
    'Valid comments!'
  );

  if (!isEmailValid || !isCommentsValid) {
    return; // Если хотя бы одно поле некорректно, не отправлять форму
  }

  // Имитация отправки данных на сервер
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInput.value.trim(),
          comment: commentsInput.value.trim(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Server error: Unable to process your request.');
    }

    // Успешная отправка
    resetStyles(); // Очистка стилей после отправки
    contactForm.reset(); // Очистка формы
    openModal(); // Открытие модального окна
  } catch (error) {
    console.error(error.message);
    statusMessage.textContent = `Error: ${error.message}`;
    statusMessage.classList.add('error');
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
