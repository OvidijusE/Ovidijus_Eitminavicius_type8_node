import { BASE_URL } from './modules/moduleConfig.js';
import { clearErrorsArr, checkInput, errorsArr } from './modules/validation.js';

const formEl = document.querySelector('.register-form');
const errorMsgEl = document.querySelector('.error-msg');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    full_name: formEl.elements.full_name.value.trim(),
    email: formEl.elements.full_name.value.trim(),
    password: formEl.elements.password.value.trim(),
    repeat_password: formEl.elements.repeat_password.value.trim(),
  };
  //   clearErrors();

  checkInput(formData.full_name, 'full_name', ['required', 'minLength-4', 'full_name']);
  checkInput(formData.email, 'email', ['required', 'minLength-4', 'email']);
  checkInput(formData.password, 'password', ['required', 'minLength-5', 'maxLength-20']);
  checkInput(formData.repeat_password, 'repeat_password', [
    'required',
    'minLength-5',
    'maxLength-20',
  ]);

  if (errorsArr.length) {
    handleError(errorsArr);
    return;
  }
  if (formData.password !== formData.repeat_password) {
    handleError('Passwords does not match');
    return;
  }
  registerFetch(formData.email, formData.password, formData.repeat_password);
});

function handleError(msg) {
  errorMsgEl.textContent = '';
  if (typeof msg === 'string') {
    errorMsgEl.textContent = msg;
  }
  if (Array.isArray(msg)) {
    msg.forEach((eObj) => {
      const elWithError = formEl.elements[eObj.field];
      elWithError.classList.add('invalid-input');
      elWithError.nextElementSibling.textContent = eObj.message;
    });
  }
}

async function registerFetch(email, password, repeatPassword) {
  const registerObj = { email, password, repeatPassword };
  const resp = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerObj),
  });
  if (resp.status === 201) {
    handleError('User created');
    window.location.href = 'login.html';
  } else {
    handleError(await resp.json());
  }
}

function clearErrors() {
  // errorsArr = [];
  clearErrorsArr();
  errorMsgEl.forEach((htmlElement) => {
    // eslint-disable-next-line no-param-reassign
    htmlElement.textContent = '';
    htmlElement.previousElementSibling.classList.remove('invalid-input');
  });
}
