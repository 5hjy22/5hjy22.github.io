const schForm = document.querySelector(".scheduleForm-js"),
  schInput = schForm.querySelector("input"),
  schList = document.querySelector(".scheduleList-js");

const SCHEDULE_LS = "ScheduleList";
const LINETHROUGH = "finishLine";
const BEFORE_CLICK = "beforeClickCheckBox";
const AFTER_CLICK = "afterClickCheckBox";

let schedules = [];
let idNum = 0;

function saveSchedule() {
  localStorage.setItem(SCHEDULE_LS, JSON.stringify(schedules));
}

function checkListPaint(checking) {
  const check = checking.check;
  const li = document.createElement("li");
  const span = document.createElement("span");
  let id = ++idNum;

  li.addEventListener("click", handleClick);

  span.innerText = checking.text;
  if (check === "checked") {
    li.classList.add(AFTER_CLICK);
    span.classList.add(LINETHROUGH);
  } else {
    li.classList.add(BEFORE_CLICK);
  }

  li.appendChild(span);
  li.id = `${id}${span.innerText}`;
  schList.appendChild(li);
  schedules.push(checking);
  saveSchedule();
}

function handleClick(e) {
  const li = e.target;
  const sche = li.childNodes[0];

  schedules.forEach((schedule) => {
    if (li.id === schedule.id && schedule.check === "false") {
      li.classList.remove(BEFORE_CLICK);
      li.classList.add(AFTER_CLICK);
      sche.classList.add(LINETHROUGH);
      schedule.check = "checked";
    } else if (li.id === schedule.id && schedule.check === "checked") {
      li.classList.remove(AFTER_CLICK);
      li.classList.add(BEFORE_CLICK);
      sche.classList.remove(LINETHROUGH);
      schedule.check = "false";
    }
  });
  saveSchedule();
}

function paintSchedule(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  let id = ++idNum;

  li.classList.add(BEFORE_CLICK);
  li.addEventListener("click", handleClick);

  span.innerText = text;
  li.appendChild(span);
  li.id = `${id}${text}`;
  schList.appendChild(li);

  const schedule = {
    text: text,
    id: `${id}${text}`,
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
  const hasName = localStorage.getItem("User");
  if (hasName) console.log("I have UserName");
  const currSche = localStorage.getItem(SCHEDULE_LS);
  if (currSche !== null) {
    const parsedSchedules = JSON.parse(currSche);
    parsedSchedules.forEach((schedule) => checkListPaint(schedule));
  }
}

function init() {
  loadSchedule();
  schForm.addEventListener("submit", handleSubmit);
}

init();
