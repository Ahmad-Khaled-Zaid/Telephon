"use strict";
let phonesSection = document.getElementById("phoneSection");
let phonesArray = [];
function Phone(name, price, picture) {
  this.name = name;
  this.price = price;
  this.picture = picture;
  phonesArray.push(this);
  this.render();
}


// console.log(phonesArray);
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
  //   button.style.width="10rem";
  //   button.style.height="3rem";
  button.className = "phoneBtn";
};
new Phone("Galaxy S20", 100, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 200, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 300, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 400, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 500, "./img/samsung-galaxy-s20.jpg");
new Phone("Galaxy S20", 600, "./img/samsung-galaxy-s20.jpg");
