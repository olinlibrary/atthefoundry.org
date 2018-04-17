// subset of colors from https://tachyons.io/
const COLORS = [
  "#ff4136",  // read
  "#ff6300",  // orange
  "#ffb700",  // gold
  "#5e2ca5",  // purple
  "#d5008f",  // dark-pink
  "#137752",  // dark-green
  "#00449e",  // dark-blue
];

function getRandomColor(){
  return COLORS[Math.floor(Math.random()*COLORS.length)];
}

function setBackgroundColor(color) {
  document.body.style.background = color;
}

function setBackgroundGradient(color) {
  gradient = "linear-gradient("+color+",#333)";
  document.body.style.background = gradient;
}

async function loopThroughColors() {
  for (var i = 0; i < COLORS.length; i++) {
    setBackgroundColor(COLORS[i]);
    console.log(COLORS[i])
    await sleep(1000);
  }
}

// sleep function as recommended by https://stackoverflow.com/a/39914235
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
