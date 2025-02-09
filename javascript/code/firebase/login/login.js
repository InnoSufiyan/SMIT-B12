import { login } from "../firebase.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const button = document.querySelector("button");

function loginHandler() {
  login(email.value, password.value);
}

button.addEventListener("click", loginHandler);
