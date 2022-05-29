export const BASE_URL = 'http://localhost:3000/api';

// eslint-disable-next-line import/prefer-default-export
export async function getFetch(endpoint, token) {
  try {
    const resp = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    console.warn('error in fetch', error);
  }
}
