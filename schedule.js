const schForm = document.querySelector(".scheduleForm-js"),
  schInput = schForm.querySelector("input"),
  schList = document.querySelector(".scheduleList-js");

const SCHEDULE_LS = "ScheduleList";
const LINETHROUGH = "finishLine";

let schedules = [];
let idNum = 0;

function saveSchedule() {
  localStorage.setItem(SCHEDULE_LS, JSON.stringify(schedules));
}

function handleClick(e) {
  const li = e.target.parentNode;
  const inputChecked = li.childNodes[0];
  const sche = li.childNodes[1];

  if (inputChecked.checked) {
    sche.classList.add(LINETHROUGH);
  } else {
    sche.classList.remove(LINETHROUGH);
  }

  schedules.forEach((schedule) => {
    if (li.id === schedule.id) schedule.check = "checked";
  });
}

function paintSchedule(text) {
  const li = document.createElement("li");
  const chInput = document.createElement("input");
  const span = document.createElement("span");
  let id = ++idNum;

  chInput.type = "checkbox";
  chInput.value = text;
  chInput.addEventListener("click", handleClick);

  span.innerText = text;
  li.appendChild(chInput);
  li.appendChild(span);
  li.id = `${id}${chInput.value}`;
  schList.appendChild(li);

  const schedule = {
    text: text,
    id: `${id}${chInput.value}`,
    check: "false",
  };
  schedules.push(schedule);
  saveSchedule();
}

function handleSubmit(e) {
  e.preventDefault();
  const nowSche = schInput.value;
  paintSchedule(nowSche);
  schInput.value = "";
}

function loadSchedule() {
  const currSche = localStorage.getItem(SCHEDULE_LS);
  if (currSche !== null) {
    const parsedSchedules = JSON.parse(currSche);
    parsedSchedules.forEach((schedule) => paintSchedule(schedule.text));
  }
}

function init() {
  loadSchedule();
  schForm.addEventListener("submit", handleSubmit);
}

init();
