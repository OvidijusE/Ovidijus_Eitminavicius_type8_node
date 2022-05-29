const BASE_URL = 'http://localhost:3000/api';
const token = localStorage.getItem('groupUserToken');
const billsContainerEl = document.querySelector('.bills-table');

function makeEl(tagName, text, elClass, dest) {
  const el = document.createElement(tagName);
  el.textContent = text;
  el.className = elClass;
  dest.append(el);
  return el;
}

function renderBill(arr, dest) {
  dest.innerHTML = '';
  arr.forEach((tObj) => {
    const trEl = makeEl('tr', '', '', dest);
    makeEl('td', `${tObj.id}`, '', trEl);
    makeEl('td', `${tObj.description}`, '', trEl);
    makeEl('td', `${tObj.amount}`, '', trEl);
  });
}

async function getBills(token) {
  try {
    const resp = await fetch(`${BASE_URL}/bills/${groupID[1]}`, token{
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    console.log('resp ===', resp);
    // if (!Array.isArray(resp)) {
    //   console.log('Your session has expired!');
    //   window.location.href = 'login.html';
    // }

    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    renderBill(dataInJs, billsContainerEl);
    console.log('dataInJs  ===', resp);
  } catch (error) {
    console.log('error in get groups ===', error);
  }
}
getBills(token);
