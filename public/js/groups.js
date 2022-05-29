import { getFetch } from './modules/fetch.js';

const token = localStorage.getItem('groupUserToken');
const cardContainerEl = document.querySelector('.group-container');

function makeEl(tagName, text, elClass, dest) {
  const el = document.createElement(tagName);
  el.textContent = text;
  el.className = elClass;
  dest.append(el);
  return el;
}

function renderGroups(arr, dest) {
  dest.innerHTML = '';
  arr.forEach((cObj) => {
    const groupArticleEl = makeEl('article', '', 'card-group', dest);
    makeEl('h3', `ID: ${cObj.group_id}`, 'card-id', groupArticleEl);
    makeEl('p', `${cObj.name}`, 'card-group-title', groupArticleEl);
    groupArticleEl.addEventListener('click', () => {
      window.location.href = `bills.html?group_id=${cObj.group_id} + ${cObj.name}`;
    });
  });
}

async function getAccounts(userToken) {
  const resp = await getFetch('accounts', userToken);
  if (!Array.isArray(resp)) {
    alert('Your session has expired!');
    window.location.href = 'login.html';
  }

  renderGroups(resp, cardContainerEl);
}

getAccounts(token);
