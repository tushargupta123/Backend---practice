// A mock function to mimic making an async request for data
export function signupApi(data) {
  fetch('http://localhost:8080/user/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }).then(res => res.json())
  .then(result => {
    return result;
  }).catch(err => {
    return err;
  })
}
export function loginApi(data) {
  fetch('http://localhost:8080/user/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  }).then(res => res.json())
  .then(result => {
    return result;
  }).catch(err => {
    return err;
  })
}
