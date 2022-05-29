import { BASE_URL } from './modules/fetch.js';
import { clearErrorsArr, checkInput, errorsArr } from './modules/validation.js';

const formEl = document.querySelector('.register-form');
const errorMsgEl = document.querySelectorAll('.error-msg');
const successMsgEl = document.querySelector('.success-msg');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    full_name: formEl.elements.full_name.value.trim(),
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
    repeat_password: formEl.elements.repeat_password.value.trim(),
  };
  clearErrors();

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

  registerFetch(formData.full_name, formData.email, formData.password);
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

function successMsg(msg) {
  successMsgEl.textContent = '';
  if (typeof msg === 'string') {
    successMsgEl.textContent = msg;
  }
  if (Array.isArray(msg)) {
    msg.forEach((sObj) => {
      const elWithSuccess = formEl.elements[sObj.field];
      elWithSuccess.classList.add('success-msg');
      elWithSuccess.nextElementSibling.textContent = sObj.message;
    });
  }
}

async function registerFetch(full_name, email, password) {
  const registerObj = { full_name, email, password };
  const resp = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerObj),
  });
  const dataInJs = await resp.json();
  if (resp.status === 201) {
    successMsg('Success!');
    window.location.href = 'login.html';
  } else {
    handleError(await resp.json());
  }
}

function clearErrors() {
  clearErrorsArr();
  errorMsgEl.forEach((htmlElement) => {
    htmlElement.textContent = '';
    htmlElement.previousElementSibling.classList.remove('invalid-input');
  });
}
