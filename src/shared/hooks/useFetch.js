const baseURL = 'https://apps.cdldelivers.com/reportportalserver';

export const useFetchWithQuery = (endpoint, method = 'GET') => {

  const url = `${baseURL}${endpoint}`;
  return fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json'
    }
  });

};

export const useFetch = (endpoint, data, method = 'GET') => {

  const url = `${baseURL}${endpoint}`;

  return fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });

};