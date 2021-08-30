const body = document.querySelector("body");

const IMG_NUM = 6;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNum) {
  const image = new Image();
  image.src = `https://github.com/5hjy22/5hjy22.github.io/bgImg/${imgNum}.png`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM + 1);
  return number;
}

function init() {
  const randomNum = genRandom();
  paintImage(randomNum);
}

init();
