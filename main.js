const newDiv = document.getElementById("newDIV");
const faceDiv = document.getElementById("imageDIV");
const faceImg = document.getElementById("imagefaceID");
const mainDiv = document.getElementById("mainDIV");
const questionText = document.getElementById("questionID");
const expressionText = document.getElementById("expressionID");
const yesButton = document.getElementById("yesbuttonID");
const noButton = document.getElementById("nobuttonID");

const imageCreate = document.createElement("img");
const textCreate = document.createElement("h1");

const phrasesArr = [
  "",
  "w-what",
  "n-n-n-n-no...but w-why",
  "grrr, daddy's getting real mad",
];
const expressionsArr = ["", "!!!", "...", "😡😡😡"];
const noButtonTextArr = [
  "",
  "haha virgin!!!",
  "cuz fuck you",
  "oh no...pls don't hurt me daddy...",
];

let countClicker = 0;

noButton.onclick = function () {
  countClicker++;
  faceImg.src = `assets/tine/face${countClicker}.png`;
  questionText.innerHTML = phrasesArr[countClicker];
  expressionText.innerHTML = expressionsArr[countClicker];
  noButton.innerHTML = noButtonTextArr[countClicker];
  if (countClicker > 3) {
    document.querySelector("body").style =
      "background-color: black; color: white;";
    textCreate.innerHTML =
      "cursed to be realistic oil painting deku, truly an unfortunate fate.";
    textCreate.setAttribute("style", `font-family: Courier`);
    imageCreate.setAttribute("src", `assets/tine/deku.png`);

    newDiv.appendChild(textCreate);
    newDiv.appendChild(imageCreate);

    faceDiv.remove();
    mainDiv.remove();
  }
};

yesButton.onclick = function () {
  imageCreate.setAttribute("src", `assets/valentines/adacher.gif`);
  document.querySelector("body").style = "background-color: pink;";

  newDiv.appendChild(imageCreate);

  faceDiv.remove();
  mainDiv.remove();
};
