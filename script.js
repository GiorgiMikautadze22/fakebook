const signUpPageBtn = document.getElementById("signUpPage-btn");
const signInPageBtn = document.getElementById("signInPage-btn");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

const userName = document.getElementById("name");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userRePassword = document.getElementById("rePassword");

const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");

const logInBtn = document.getElementById("logInBtn");
const signUpBtn = document.getElementById("signUpBtn");

let userArray = JSON.parse(localStorage.getItem("userArray")) || [];

signIn.addEventListener("submit", (e) => {
  e.preventDefault();
});

signUp.addEventListener("submit", (e) => {
  e.preventDefault();
});

logInBtn.addEventListener("click", () => {
  validateSignInInputs();
});

signUpBtn.addEventListener("click", () => {
  validateSignUpInputs();
});

function pageChange() {
  signUpPageBtn.addEventListener("click", () => {
    signIn.classList.add("hidden");
    signUp.classList.remove("hidden");
  });
  signInPageBtn.addEventListener("click", () => {
    signUp.classList.add("hidden");
    signIn.classList.remove("hidden");
  });
}
pageChange();

function validateSignUpInputs() {
  const nameValue = userName.value.trim();
  const lastNameValue = userLastName.value.trim();
  const emailValue = userEmail.value.trim();
  const passwordValue = userPassword.value.trim();
  const rePasswordValue = userRePassword.value.trim();

  if (nameValue === "") {
    setError(userName, "*Name is required");
  } else {
    setSuccess(userName);
  }
  if (lastNameValue === "") {
    setError(userLastName, "*Lastname is required");
  } else {
    setSuccess(userLastName);
  }
  if (emailValue === "") {
    setError(userEmail, "*Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(userEmail, "*Proveide valid email");
  } else {
    setSuccess(userEmail);
  }

  if (passwordValue === "") {
    setError(userPassword, "*Password is required");
  } else if (passwordValue.length < 8) {
    setError(userPassword, "*Password must include more then 8 charachters");
  } else if (passwordValue.length > 22) {
    setError(userPassword, "*Password must include less then 22 charachters");
  } else {
    setSuccess(userPassword);
  }

  if (rePasswordValue === "") {
    setError(userRePassword, "*Please confirm password");
  } else if (rePasswordValue !== passwordValue) {
    setError(userRePassword, "*Password does not match");
  } else {
    setSuccess(userRePassword);
    storeToLocalStorage(emailValue, passwordValue);
  }
}

function validateSignInInputs() {
  const signInEmailValue = signInEmail.value.trim();
  const signInPasswordValue = signInPassword.value.trim();

  userArray.forEach((el) => {
    if (!el.newUserEmail.includes(signInEmailValue)) {
      setError(signInEmail, "*User does not exist");
    } else {
      setSuccess(signInEmail);
    }
  });

  if (signInEmailValue === "") {
    setError(signInEmail, "*Email is required");
  } else if (!isValidEmail(signInEmailValue)) {
    setError(signInEmail, "*Proveide valid email");
  } else {
    setSuccess(signInEmail);
  }

  if (signInPasswordValue === "") {
    setError(signInPassword, "*Password is required");
  } else {
    setSuccess(signInPassword);
  }
}

function setError(input, message) {
  const inputControl = input.parentElement;
  const errorMessage = inputControl.querySelector(".error");

  errorMessage.innerText = message;
  input.classList.add("input-error");
  input.classList.remove("input-success");
}

function setSuccess(input) {
  const inputControl = input.parentElement;
  const errorMessage = inputControl.querySelector(".error");

  errorMessage.innerText = "";
  input.classList.add("input-success");
  input.classList.remove("input-error");
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function storeToLocalStorage(email, password) {
  let newUser = {
    newUserEmail: email,
    newUserPassword: password,
  };
  userArray.push(newUser);

  localStorage.setItem("userArray", JSON.stringify(userArray));

  console.log(userArray);
}
console.log(userArray);
