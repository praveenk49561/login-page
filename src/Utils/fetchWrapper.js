const baseUrl = 'http://localhost:8080/api';
const TIMEOUT = 300000;

function timeoutPromise(promise, timeout, error) {
  return new Promise((resolve, reject) => {
    const clearTimeOut = setTimeout(() => {
      reject(error);
    }, timeout);
    promise.then((data) => {
      clearTimeout(clearTimeOut);
      resolve(data);
    }, (data) => {
      clearTimeout(clearTimeOut);
      reject(data);
    });
  });
}

export const doGet = (url, timeOut = TIMEOUT, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
    }
  }),
), timeOut, 504)
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      return response;
    }
    return response.then((error) => { throw error; });
  });


export const doPost = (url, body, timeOut = TIMEOUT, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
  }),
), timeOut, 504)
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      return response;
    }
    return response.then((error) => { throw error; });
  });

  export const doPut = (url, body, timeOut = TIMEOUT, urlPrefix = baseUrl) => timeoutPromise(fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    }),
  ), timeOut, 504)
    .then((res) => {
      let response = null;
      response = res.json();
      if (res.ok) {
        return response;
      }
      return response.then((error) => { throw error; });
    });

  export const doDelete = (url, body, timeOut = TIMEOUT, urlPrefix = baseUrl) => timeoutPromise(fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    }),
  ), timeOut, 504)
    .then((res) => {
      let response = null;
      if (res.ok) {
        response = res.json();
      }
      return response;
    });