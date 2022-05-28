const BASE_URL = 'http://localhost:3000/api';
// const token = localStorage.getItem('groupUserToken');
const billsContainerEl = document.querySelector('.bills-table');

function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

function createBillCard(newCardObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'card-group';
  makeEl('h3', `${newCardObj.group_id}`, articleEl);
  makeEl('p', `${newCardObj.amount}`, articleEl);
  makeEl('p', `${newCardObj.description}`, articleEl);

  //   articleEl.addEventListener('click', () => {
  //     window.location.href = `bills.html?group_id=${obj.group_id}+${obj.name}`;
  //     console.log('click');
  //   });

  return articleEl;
}
