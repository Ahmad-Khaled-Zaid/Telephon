"use strict";
let list = document.getElementById("emptyList");
let itemsList = document.getElementById("shoppingList");
let cartItems = document.getElementById("cart-items");

// *********************************************** */
//       FUNCTION TO CHECK THE LOCAL STORAGE
// *********************************************** */
function check_cart() {
  if (localStorage.getItem("phones") !== null) {
    list.style.display = "none";
  } else {
    show_List();
  }
}
check_cart();

// *********************************************** */
//         FUNCTION TO SHOW THE CART iTEMS
// *********************************************** */
function show_List() {
  for (let i = 0; i < getCartItem().length; i++) {
    // create New phone div
    let itemBox = document.createElement("div");
    itemsList.appendChild(itemBox);
    itemBox.className = "phones-box";

    // create picture Element
    let itemPic = document.createElement("img");
    itemBox.appendChild(itemPic);
    itemPic.setAttribute("src", getCartItem()[i].picture);

    // create Name Element
    let itemName = document.createElement("h2");
    itemBox.appendChild(itemName);
    itemName.textContent = getCartItem()[i].name;

    // create Price Element
    let itemPrice = document.createElement("p");
    itemBox.appendChild(itemPrice);
    itemPrice.textContent = `${getCartItem()[i].price} د.أ`;
    itemPrice.className = "items_price";

    // create Memory and color paragraph
    let itemMemory = document.createElement("p");
    itemMemory.className = "phonesMemory";
    itemBox.appendChild(itemMemory);
    itemMemory.textContent = `سعة ${getCartItem()[i].memory} جيجابايت، لون ${
      getCartItem()[i].color
    }`;

    // create break-line
    let line = document.createElement("p");
    itemBox.appendChild(line);
    line.textContent =
      "________________________________________________________________________________________________________";
    line.id = "line";

    // create deleteButton
    let deleteButton = document.createElement("button");
    deleteButton.id = getCartItem()[i].name;
    deleteButton.className = "deletePhones";
    itemBox.appendChild(deleteButton);
    deleteButton.textContent = "حذف";
    deleteButton.addEventListener("click", deleteFunction);
  }
}
show_List();

function deleteFunction(event) {
  let newArray = getCartItem();
  console.log(newArray);
  for (let i = 0; i < getCartItem().length; i++) {
    if (event.target.id === newArray[i].name) {
      newArray.splice(i, 1);
      console.log(newArray);
      let updatedArray = JSON.stringify(newArray);
      localStorage.setItem("phones", updatedArray);
      check_cart();
      location.reload();
      if (getCartItem().length === 0) {
        localStorage.clear();
      }
      break;
    }
  }
}

// *********************************************** */
//     FUNCTION TO GET THE LOCAL STORAGE ITEMS
// *********************************************** */
function getCartItem() {
  let itemsArray = JSON.parse(localStorage.getItem("phones"));
  return itemsArray;
}
function countCartItems() {
  cartItems.textContent=getCartItem().length
}

countCartItems();