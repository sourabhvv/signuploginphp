let form = document.querySelector("form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword"); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});

function handleInput() {
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();

  let hasErrors = false;

  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
    hasErrors = true;
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    hasErrors = true;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    hasErrors = true;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    hasErrors = true;
  } else if (passwordValue.length < 6 || passwordValue.length > 30) {
    setErrorFor(password, "Password length should be between 6 and 30");
    hasErrors = true;
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
    hasErrors = true;
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
    hasErrors = true;
  } else {
    setSuccessFor(confirmPassword);
  }

  if (!hasErrors) {
    form.submit();
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
