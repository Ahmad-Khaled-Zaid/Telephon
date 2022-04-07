"use strict";
let phonesSection = document.getElementById("phoneSection");
let cartItems = document.getElementById("cart-items");
let phonesArray = [];
let objectsArray = [];

//******************************************** */
//             PHONE CONSTRUCTOR
//******************************************** */
function Phone(name, price, picture, memory, color) {
  this.name = name;
  this.price = price;
  this.picture = picture;
  this.memory = memory;
  this.color = color;
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
  button.textContent = "إضافة إلى السلة ";
  button.className = "phoneBtn";
  button.id = this.name;
  button.addEventListener("click", buy);
};
function buy(event) {
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "تمت الإضافة إلى السلة   ",
    showConfirmButton: false,
    timer: 1000,
    width: 300,
  });
  setTimeout(location.reload.bind(location), 600);


  if (localStorage.getItem("phones") !== null) {
    reloadCart();
  }
  event.preventDefault();
  for (let i = 0; i < phonesArray.length; i++) {
    if (event.target.id == phonesArray[i].name) {
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
new Phone("Galaxy S20", 100, "./img/samsung-galaxy-s20-edit.jpg", 256, "أسود");
new Phone("Galaxy S19", 200, "./img/samsung-galaxy-s20-edit.jpg", 128, "أبيض");
new Phone("Galaxy S18", 300, "./img/samsung-galaxy-s20-edit.jpg", 128, "أسود");
new Phone("Galaxy S17", 400, "./img/samsung-galaxy-s20-edit.jpg", 256, "رمادي");
new Phone("Galaxy S16", 500, "./img/samsung-galaxy-s20-edit.jpg", 64, "أبيض");
new Phone("Galaxy S15", 600, "./img/samsung-galaxy-s20-edit.jpg", 64, "رمادي");



function reloadCart() {
  let getItems = localStorage.getItem("phones");
  let parsedArray = JSON.parse(getItems);
  objectsArray = parsedArray;
}

function countCartItems() {
  let parsedArray = JSON.parse(localStorage.getItem("phones"));
  console.log(parsedArray.length);
  cartItems.textContent = parsedArray.length;
}
countCartItems();
