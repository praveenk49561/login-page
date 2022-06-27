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