// Add Your Code Here...
//Collaboration between Linds (Lindsey) Fisher and Billy Yip
//Thank you Mike A. for assisting with getting the disks in order
// Thanks to Randy Cox for big hints through the demo
//Thank you Alex Mourtos for helping with the hand box issue
// Thanks to Meagan Ramey for helping us reword our conditional statement.

let towerClick = function (event) {
  let selectedTower = event.currentTarget;
  let handItem = document.querySelector("#hand");
  let topCircle = selectedTower.firstElementChild;
  let dropItem = handItem.firstElementChild;
  let dropChild = event.currentTarget.clientWidth;

  let winMsg = document.createTextNode("Congratulations! You won!");

  // pick up
  if (handItem.childElementCount === 0) {
    handItem.appendChild(topCircle);
  } else if (handItem.childElementCount === 1 && topCircle === null) {
    selectedTower.prepend(dropItem);
    // console.log(dropItem);
    // console.log(topCircle.clientWidth);
  } else if (
    handItem.childElementCount === 1 &&
    dropItem.clientWidth < topCircle.clientWidth
  ) {
    selectedTower.prepend(dropItem);
  }
  if (towerThree.childElementCount === 4) {
    document.getElementById("msg");
    msg.innerHTML = "Congratulations! You won!";
  } else if (towerThree.childElementCount < 4) {
    document.getElementById("msg");
    msg.innerHTML = "";
  } else {
    return;
  }
};
// You want to use a conditional that checks the width of the block you're holding against the block you're going to set it on, ie the current containers top block

let towerOne = document.querySelector("#towerOne");
let towerTwo = document.querySelector("#towerTwo");
let towerThree = document.querySelector("#towerThree");

towerOne.addEventListener("click", towerClick);
towerTwo.addEventListener("click", towerClick);
towerThree.addEventListener("click", towerClick);

// Winning message : 'Congratulations! P.S. No children were harmed in the making of this game

// let pickUp = function (event) {
//   let pickedUpObject = event.target;
//   if (pickedUpObject.className === "circles") {
//     console.log("Circle has been picked up");
//     document.getElementById("span");
//   } else {
//     console.log("This is not a circle");
//   }
//   console.log(event.target);
//   let dropObject = function (event) {
//     let dropObject = event.target;
//     dropObject.prepend(pickedUpObject);
//     console.log("not a tower"); // works but needs guard clause and overflow prevention
//   };
//   let drop = document.querySelector("div");
//   drop.addEventListener("click", dropObject);
// };
// let grab = document.querySelector(".circles");
// grab.addEventListener("click", pickUp);

// let dropObject = function (event) {
//   let dropObject = event.target;
//   if (dropObject.className === "tower") {
//     dropObject.appendChild(pickedUpObject);
//   } else {
//     console.log("not a tower");
//     console.log(event.target);
//   }
// };

// let drop = document.querySelector("div");
// drop.addEventListener("click", dropObject);
