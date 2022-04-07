"use strict";
let list = document.getElementById("emptyList");
let itemsList = document.getElementById("shoppingList");
let cartItems = document.getElementById("cart-items");
let clearButton = document.getElementById("btn");
let invoice = document.getElementById("invoice");
let deliver = document.getElementById("deliver");
let select = document.getElementById("select");

select.addEventListener("change", selector);
let selectOnChange = "عمان";


function selector(event) {
  console.log(event.target.value);
  console.log(event);
  selectOnChange = event.target.value;
  order.textContent = `اطلب الآن واستلم في ${selectOnChange}`;
  Exhibition.textContent = `الاستلام في المعرض في ${selectOnChange}`;
}

// *********************************************** */
//       FUNCTION TO CHECK THE LOCAL STORAGE
// *********************************************** */
function check_cart() {
  if (localStorage.getItem("phones") !== null) {
    list.style.display = "none";
    clearButton.hidden = false;
    invoice.hidden = false;
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
  cartItems.textContent = getCartItem().length;
}
clearButton.addEventListener("click", clear_cart);
countCartItems();
function clear_cart() {
  localStorage.clear();
  location.reload();
}

// *********************************************** */
// *********************************************** */
let order;
let Exhibition;
function invoice_place() {
  order = document.createElement("p");
  invoice.appendChild(order);
  order.textContent = `اطلب الآن واستلم في ${selectOnChange}`;
  let orderCity = document.createElement("p");
  invoice.appendChild(orderCity);
  orderCity.textContent = "غداً";
  orderCity.className = "cityTextColor";
  let line = document.createElement("p");
  invoice.appendChild(line);
  line.textContent = "_________________________________أو________________________________";
  line.className="lineClass";
  Exhibition = document.createElement("p");
  invoice.appendChild(Exhibition);
  Exhibition.textContent = `الاستلام في المعرض في ${selectOnChange}`;
  let ExhibitionCity = document.createElement("p");
  invoice.appendChild(ExhibitionCity);
  ExhibitionCity.textContent = "اليوم بعد ساعة واحدة";
  ExhibitionCity.className = "cityTextColor";
  let line2 = document.createElement("p");
  invoice.appendChild(line2);
  line2.textContent = "___________________________________________________________________";
  line2.className = "lineClass";

  invoice_Price();
  let line3 = document.createElement("p");
  invoice.appendChild(line3);
  line3.textContent = "___________________________________________________________________";
  line3.className = "lineClass";


  let grandTotalBox = document.createElement("div");
  grandTotalBox.id = "grandTotalBox";
  invoice.appendChild(grandTotalBox);
  let grandTotalText = document.createElement("p");
  grandTotalBox.appendChild(grandTotalText);
  grandTotalText.textContent = `المجموع الإجمالي `;
  grandTotalText.id = 'grandTotalText';
  let grandTotalAmount = document.createElement("p");
  grandTotalBox.appendChild(grandTotalAmount);
  grandTotalAmount.textContent = `${priceCalculation()[2]} د.أ `;
  let line4 = document.createElement("p");
  invoice.appendChild(line4);
  line4.textContent = "___________________________________________________________________";
  line4.className="lineClass";
  let acceptConditions = document.createElement("p");
  invoice.appendChild(acceptConditions);
  acceptConditions.textContent =
    "بالضغط على '' انهاء التسوق '' فانت توافق على الشروط والأحكام و سياسة الخصوصية";
  let purchase = document.createElement("button");
  invoice.appendChild(purchase);
  purchase.textContent = "إنهاء التسوق";
  purchase.id = "purchaseButton";
}
invoice_place();

function priceCalculation() {
  let subTotal = 0;
  for (let i = 0; i < getCartItem().length; i++) {
    subTotal += getCartItem()[i].price;
  }
  let shippingPrice = subTotal * 0.1;
  let grandTotal = shippingPrice + subTotal;
  return [subTotal, shippingPrice, grandTotal];
}

function invoice_Price() {
  let subTotalBox = document.createElement("div");
  subTotalBox.id = "subTotalBox";
  invoice.appendChild(subTotalBox);
  let subTotalText = document.createElement("p");
  subTotalBox.appendChild(subTotalText);
  subTotalText.textContent = `المجموع الفرعي `;
  subTotalText.className="totalText";
  let subTotalAmount = document.createElement("p");
  subTotalBox.appendChild(subTotalAmount);
  subTotalAmount.textContent = `${priceCalculation()[0]} د.أ `;

  let shippingPriceBox = document.createElement("div");
  shippingPriceBox.id = "shippingPriceBox";
  invoice.appendChild(shippingPriceBox);
  let shippingPriceText = document.createElement("p");
  shippingPriceBox.appendChild(shippingPriceText);
  shippingPriceText.textContent = `اجمالي رسوم الشحن `;
  shippingPriceText.className = "totalText";

  let shippingPriceAmount = document.createElement("p");
  shippingPriceBox.appendChild(shippingPriceAmount);
  shippingPriceAmount.textContent = `${priceCalculation()[1]} د.أ`;
}
