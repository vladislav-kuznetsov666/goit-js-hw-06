const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (userData.email && userData.password) {
    console.log("User Data:", userData);
    loginForm.reset();
  } else {
    alert("please fill in all fields of the form.");
  }
});

