const BASE_URL = 'http://localhost:3000/api';
const token = localStorage.getItem('groupUserToken');
const cardContainerEl = document.querySelector('.group-container');

function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

function createCard(newCardObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'card-group';
  makeEl('h3', `ID: ${newCardObj.id}`, articleEl);
  makeEl('p', `${newCardObj.name}`, articleEl);

  //   articleEl.addEventListener('click', () => {
  //     window.location.href = `bills.html?group_id=${obj.group_id}+${obj.name}`;
  //     console.log('click');
  //   });

  return articleEl;
}
function renderGroups(arr, dest) {
  dest.innerHTML = '';
  arr.forEach((cObj) => {
    const card = createCard(cObj);
    dest.append(card);
  });
}

async function getGroups(token) {
  try {
    const resp = await fetch(`${BASE_URL}/groups`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('resp ===', resp);

    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    // if (!Array.isArray(resp)) {
    //   console.log('Your session has expired!');
    //   window.location.href = 'login.html';
    // }
    renderGroups(dataInJs, cardContainerEl);
    console.log('dataInJs  ===', resp);
  } catch (error) {
    console.log('error in get groups ===', error);
  }
}
getGroups(token);
