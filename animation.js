//This is the whole robot.
let theRobot = document.querySelector("#sir_robot");
//This is the hat part.
let theHat = document.querySelector("#hat");
//These are individual parts in the head.
let headPart = document.querySelector("#head");
let theHead = document.querySelector("#the_head");
let theMoustache = document.querySelector("#moustache");
let oneEye = document.querySelector("#eye");
let theMonocle = document.querySelector("#monocle");
//This groups all the parts in the head.
let allHeadParts = [headPart, theHead, theMoustache, oneEye, theMonocle];
//These are individual parts in the body.
let theBody = document.querySelector("#the_body");
let bodyPart = document.querySelector("#body");
let theBowTie = document.querySelector("#bowtie");
let leftArm = document.querySelector("#left_arm");
let rightArm = document.querySelector("#right_arm");
//This groups all the parts in the body.
let allBodyParts = [theBody, bodyPart, theBowTie, leftArm, rightArm];

//This function clears the animation by remove animate class from all elements.
function clearAnimation() {
  theRobot.classList.remove('animate');
  theHat.classList.remove('animate');
  allHeadParts.forEach((allHeadParts) => {
    allHeadParts.classList.remove('animate');
  });
  allBodyParts.forEach((allBodyParts) => {
    allBodyParts.classList.remove('animate');
  });
}

//This function starts the animation by adding animate class to the elements.
function startAnimation(e) {
  e.preventDefault();
  theRobot.classList.add('animate');
  theHat.classList.add('animate');
  allHeadParts.forEach((allHeadParts) => {
    allHeadParts.classList.add('animate');
  });
  allBodyParts.forEach((allBodyParts) => {
    allBodyParts.classList.add('animate');
  });
}

//This assigns an appropriate function to each button.
document.querySelector("#start_ani").addEventListener("click", startAnimation);
document.querySelector("#stop_ani").addEventListener("click", clearAnimation);
