let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/liondiscord.png') {
    myImage.setAttribute ('src','images/excellentss161200012.jpg');
  } else {
    myImage.setAttribute ('src','images/liondiscord.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Brickhouse is brilliant, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Brickhouse is brilliant, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

let work = 'unfinished';
if(work === 'finished') {
  alert('This website is finished.');
} else {
  alert('This website is not finished.');
}


function add(num1,num2) {
  let result = num1 + num2;
  return result;
}

function minus(num1,num2) {
  let result = num1 - num2;
  return result;
}

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

function divide(num1,num2) {
  let result = num1 / num2;
  return result;
}
