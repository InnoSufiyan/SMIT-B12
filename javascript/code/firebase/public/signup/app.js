import { signup } from "../sufiyan.js";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("button");

function registerationHandler() {
  console.log(email.value);
  console.log(password.value);
  signup({
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
  });
}

console.log(button, "==>> button");
button.addEventListener("click", registerationHandler);
