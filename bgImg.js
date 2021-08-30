const body = document.querySelector("body");

const IMG_NUM = 6;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNum) {
  const image = new Image();
  image.src = `./bgImg/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUM + 1);
  return number;
}

function init() {
  const randomNum = getRandom();
  paintImage(randomNum);
}

init();
