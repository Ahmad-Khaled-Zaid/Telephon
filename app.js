"use strict";
let phonesSection = document.getElementById("phoneSection");
let phonesArray = [];
let objectsArray = [];

//******************************************** */
//             PHONE CONSTRUCTOR
//******************************************** */
function Phone(name, price, picture) {
  this.name = name;
  this.price = price;
  this.picture = picture;
  phonesArray.push(this);
  this.render();
}

//******************************************** */
//   PROTOTYPE FUNCTION TO RENDER THE PHONES
//******************************************** */
Phone.prototype.render = function () {
  let phoneBox = document.createElement("div");
  phonesSection.appendChild(phoneBox);
  let phonePicture = document.createElement("img");
  phonePicture.className = "images";
  phoneBox.appendChild(phonePicture);
  phonePicture.setAttribute("src", this.picture);
  let phoneName = document.createElement("h2");
  phoneBox.appendChild(phoneName);
  phoneName.textContent = this.name;

  let phonePrice = document.createElement("h4");
  phoneBox.appendChild(phonePrice);
  phonePrice.textContent = `السعر:  ${this.price} د.أ`;
  let button = document.createElement("button");
  phoneBox.appendChild(button);
  button.textContent = "شراء";
  button.className = "phoneBtn";
  button.id = this.price;
  button.addEventListener("click", buy);
};
function buy(event) {
  if (localStorage.getItem("phones") !== null) {
    reloadCart();
  }
  event.preventDefault();
  for (let i = 0; i < phonesArray.length; i++) {
    if (event.target.id == phonesArray[i].price) {
    console.log(phonesArray[i]);
      objectsArray.push(phonesArray[i]);
      let data = JSON.stringify(objectsArray);
      localStorage.setItem("phones", data);
      console.log(objectsArray);
    }
  }
}

//******************************************** */
//                NEW INSTANCES
//******************************************** */
new Phone("Galaxy S20", 100, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 200, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 300, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 400, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 500, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 600, "./img/samsung-galaxy-s20.jpg");

function reloadCart() {
  let getItems = localStorage.getItem("phones");
  let parsedArray = JSON.parse(getItems);
  objectsArray = parsedArray;
}
