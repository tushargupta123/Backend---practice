// A mock function to mimic making an async request for data
export function signupApi(data) {
  const formData = new URLSearchParams();
  formData.append("email", data.email);
  formData.append("password", data.password);
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: formData.toString(),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function loginApi(data) {
  const formData = new URLSearchParams();
  formData.append("email", data.email);
  formData.append("password", data.password);
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: formData.toString(),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
