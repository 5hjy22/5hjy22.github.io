const clock = document.querySelector(".clock-js"),
  clkText = clock.querySelector("h1");

function loadClock() {
  const date = new Date();
  const hour = date.getHours();
  const minuite = date.getMinutes();
  const second = date.getSeconds();

  clkText.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minuite < 10 ? `0${minuite}` : minuite
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  setInterval(loadClock, 1000);
}

init();
