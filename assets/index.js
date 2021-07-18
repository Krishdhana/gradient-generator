const body = document.querySelector("body");
const outputText = document.getElementsByClassName("generated")[0];
const color1 = document.getElementsByClassName("color-option")[0];
const color2 = document.getElementsByClassName("color-option")[1];
const copyBtn = document.getElementsByClassName("btn")[0];

//Default Background styling
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
outputText.innerHTML = `background: linear-gradient(to right, ${color1.value}, ${color2.value})`;

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

function setBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  outputText.innerHTML = `background: linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

copyBtn.addEventListener("click", function () {
  let clipItem = outputText.innerHTML;
  navigator.clipboard.writeText(clipItem);
  copyBtn.innerHTML = "Copied!!!";
  setTimeout(function () {
    copyBtn.innerHTML = "Copy CSS Value";
  }, 2000);
});
