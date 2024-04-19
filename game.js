let timer;
let seconds = 14;
let counting = false;
let level = 0;
let mistakes = 0;
let blockAmount = 4;
let clockHurry = false;
let secondsHurry = 10;

const pressBlock = () => {
  if (counting) {
    seconds = 15;
    if (clockHurry) {
      clearInterval(timerHurry);
      document.getElementById("hurry-seconds").textContent = "";
      document.getElementById("timer").classList.remove("hurry");
      clockHurry = false;
    }
  } else {
    timer = setInterval(myClock, 1000);
  }

  renderCounters();

  counting = true;
  level++;

  document.querySelector(".level").textContent = level;

  renderBlocks();
};

const myClock = () => {
  document.getElementById("seconds").textContent = --seconds;
  if (!clockHurry && seconds <= 5) {
    document.getElementById("timer").classList.add("hurry");
    timerHurry = setInterval(function () {
      if (secondsHurry <= 0) {
        secondsHurry = 10;
      }
      document.getElementById("hurry-seconds").textContent =
        "." + --secondsHurry;
    }, 100);
    clockHurry = true;
  }
  if (seconds < 0) {
    youLoose();
  }
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * (max - 1 + 1) + 1);
};
const getRandomColor = (level) => {
  let levelContrast = [
    105, 75, 60, 45, 30, 20, 18, 16, 15, 15, 15, 14, 14, 14, 13, 13, 13, 12, 12,
    12, 11, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4,
    4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  ];

  let r = Math.floor(Math.random() * (255 - levelContrast[level]));
  let g = Math.floor(Math.random() * (255 - levelContrast[level]));
  let b = Math.floor(Math.random() * (255 - levelContrast[level]));

  let cr = r + levelContrast[level];
  let cg = g + levelContrast[level];
  let cb = b + levelContrast[level];
  return [
    "rgb(" + r + ", " + g + ", " + b + ")",
    "rgb(" + cr + ", " + cg + ", " + cb + ")",
  ];
};

const renderCounters = () => {
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("hurry-seconds").textContent = "";
  document.querySelector(".level").textContent = level;
  document.querySelector(".mistakes").textContent = mistakes;
};

const renderBlocks = () => {
  const elGame = document.getElementById("game");
  elGame.textContent = "";

  switch (true) {
    case level <= 1:
      elGame.style.gridTemplateColumns = "repeat(2, 1fr)";
      break;
    case level <= 3:
      blockAmount = 9;
      elGame.style.gridTemplateColumns = "repeat(3, 1fr)";
      break;
    case level <= 7:
      blockAmount = 16;
      elGame.style.gridTemplateColumns = "repeat(4, 1fr)";
      break;
    case level <= 11:
      blockAmount = 25;
      elGame.style.gridTemplateColumns = "repeat(5, 1fr)";
      break;
    case level <= 20:
      blockAmount = 36;
      elGame.style.gridTemplateColumns = "repeat(6, 1fr)";
      break;
    case level <= 30:
      blockAmount = 49;
      elGame.style.gridTemplateColumns = "repeat(7, 1fr)";
      break;
    case level <= 34:
      blockAmount = 64;
      elGame.style.gridTemplateColumns = "repeat(8, 1fr)";
      break;
    case level <= 38:
      blockAmount = 81;
      elGame.style.gridTemplateColumns = "repeat(9, 1fr)";
      break;
    case level <= 42:
      blockAmount = 100;
      elGame.style.gridTemplateColumns = "repeat(10, 1fr)";
      break;
    case level <= 46:
      blockAmount = 121;
      elGame.style.gridTemplateColumns = "repeat(11, 1fr)";
      break;
  }

  let chosen = randomNumber(blockAmount);
  let blockColor = getRandomColor(level);

  for (let i = 1; i <= blockAmount; i++) {
    const block = document.createElement("div");
    block.classList.add("color-block");
    block.style.background = blockColor[0];
    if (i == chosen) {
      block.style.background = blockColor[1];
      block.addEventListener("click", pressBlock);
    } else {
      block.addEventListener("click", function () {
        if (counting) {
          mistakes++;
          seconds -= 3;
          document.querySelector(".mistakes").textContent = mistakes;
        }
      });
    }
    document.getElementById("game").appendChild(block);
  }
};

renderBlocks();

const getCookie = (name) => {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
};

const youLoose = () => {
  if (getCookie("record") < level) {
    document.cookie = `record=${level}`;
  }

  document.getElementById("popup-bg").style.display = "flex";
  clearInterval(timer);
  clearInterval(timerHurry);
  document.querySelector(".score-record").textContent = getCookie("record");
  document.querySelector(".score-level").textContent = level;
  document.querySelector(".score-mistakes").textContent = mistakes;
  document.getElementById("timer").classList.remove("hurry");
  timer;
  counting = false;
  seconds = 15;
  level = 0;
  mistakes = 0;
  blockAmount = 4;
  clockHurry = false;
  secondsHurry = 10;
  renderCounters();
  renderBlocks();
};

const playAgain = () => {
  document.getElementById("popup-bg").style.display = "none";
};
console.log(document.getElementById("timer").textContent);
