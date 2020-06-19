
const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printSeconds();
  printMinutes();
}

function printMinutes() {
  // ... your code goes here
  var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = sec[0];
  secUni.textContent = sec[1]; 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  var time = chronometer.splitClick();
  splits.innerHTML += `<li> ${time} </li>`;
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML ="";
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML="START"
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");

  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML="RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");


}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if (btnLeft.innerHTML === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  }

else {
  setStartBtn();
  setResetBtn();
  chronometer.stopClick();
}

  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerHTML === "RESET") {
    clearSplits();
    printTime();
    chronometer.resetClick();
  }
  else {
    printSplit();
  }

});
