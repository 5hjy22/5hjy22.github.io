const form = document.querySelector(".inputName-js"),
  inputName = form.querySelector("input"),
  userName = document.querySelector(".name-js");

const USERNAME_LS = "User";
const SHOW = "show";

function saveUser(user) {
  localStorage.setItem(USERNAME_LS, user);
}

function handleSubmit(e) {
  e.preventDefault();
  const currUser = inputName.value;
  paintName(currUser);
  saveUser(currUser);
}

function askName() {
  form.classList.add(SHOW);
  form.addEventListener("submit", handleSubmit);
}

function paintName(text) {
  form.classList.remove(SHOW);
  userName.classList.add(SHOW);
  userName.innerText = `Welcom ${text}`;
}

function loadName() {
  const user = localStorage.getItem(USERNAME_LS);
  if (user === null) {
    askName();
  } else {
    paintName(user);
  }
}

function init() {
  loadName();
}

init();
