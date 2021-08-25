//==============================================================

function alphaOnly(event) {
  var key = event.keyCode;
  return (key >= 65 && key <= 90) || key == 8;
}

function getAndUpdate() {
  location.reload();
  let pname = document.getElementById("name").value;
  let pdetail = document.getElementById("details").value;
  let pimg = document.getElementById("file").files[0].name;
  let pquant = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;

  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([pname, pdetail, pimg, pquant, price]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([pname, pdetail, pimg, pquant, price]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
  location.reload();
}
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
}

var add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
var itemJsonArray;
update();

function deleted(itemIndex) {
  console.log("Delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // Delete itemIndex element from the array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
  location.reload();
}
function clearStorage() {
  if (confirm("Do you areally want to clear?")) {
    console.log("Clearing the storage");
    localStorage.clear();
    location.reload();
    update();
  }
}

///==========================================================
var showHhtml = "";
var output = document.getElementById("output");
var totalCart = document.getElementById("cart_show");

console.log(itemJsonArray);
var shopCart = [];
var MobileCart = [];
var ProductItems = [];
var data;

// all shopping function are call
window.onload = MainFunction;
function MainFunction() {
  ProductItems = [...itemJsonArray];
  itemListFun();
  // add to cart button click event
  var cartBtn = document.querySelectorAll(".add_to_cart_btn");

  for (var x = 0; x < cartBtn.length; x++) {
    cartBtn[x].addEventListener("click", function (e) {
      e.preventDefault();
      addItem();
    });
  }
  outputCart();
}

// add item in cart
function addItem() {
  var iteminfo = event.target.dataset;
  console.log(iteminfo);

  iteminfo.qty = 1;
  var itemcartMin = false;

  shopCart.forEach(function (single) {
    if (single.id == iteminfo.id) {
      single.qty = parseInt(single.qty) + parseInt(iteminfo.qty);
      itemcartMin = true;
    }
  });

  if (!itemcartMin) {
    shopCart.push(iteminfo);
    console.log(shopCart);
  }

  localStorage.setItem("scart", JSON.stringify(shopCart));

  outputCart();
}

// total items add to cart show html
function outputCart() {
  if (localStorage.getItem("scart") != null) {
    shopCart = JSON.parse(localStorage.getItem("scart"));
  }
  var cartOutput =
    '<table class="table table-bordered table-hover table-striped"><thead><th>Quantity</th><th> Item </th><th>Cost</th><th>Total</th> <th>Option</th></thead>';
  var total = 0;
  shopCart.forEach(function (single) {
    console.log(single);
    var stotal = single.qty * single.price;
    total += stotal;
    cartOutput +=
      '<tr data-row="' +
      single.id +
      '"><td>' +
      single.qty +
      "</td><td>" +
      single.name +
      "</td><td>" +
      single.price +
      "</td><td>" +
      stotal +
      '</td><td><span class=" btn btn-danger btn-sm removeItem"  onclick="removeitem(' +
      single.id +
      ')" ><i class="fa fa-remove"></i></span></td></tr>';
  });

  cartOutput +=
    '<tr><td class="totalPrice bg-success " colspan=6>Total Amount : ' +
    total +
    "</td></tr></table>";
  totalCart.innerHTML = cartOutput;
}

// item show in front page function
function itemListFun() {
  const copy = [...itemJsonArray];
  console.log(copy);
  var x = 0;
  let row;
  var i;
  var table = document.getElementById("productble");
  ProductItems.forEach(function (item) {
    for (i = 0; i < 1; i++) {
      row += `
            <tr>
            <td><img src="${item[2]}" alt="product" class="img-fluid"/></td>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
            
            <td>${item[3]}</td>
            <td>${item[4]}</td>
            <td><h3>
					<a href="#" class="add_to_cart_btn btn btn-warning btn-sm" data-price="${item[4]}" 
						data-id="${x}" data-name="${item[0]}" data-s="${item[1]}"  
      }"
      }"
      }">
						Add To Cart
					</a>
				</h3></td>
            </tr>
      
      `;
    }
    x++;
  });
  table.innerHTML += row;
}

function removeitem(id) {
  for (var i = 0; i < shopCart.length; i++) {
    if (shopCart[i].id == id) {
      var rem = shopCart.splice(i, 1);
    }
  }
  localStorage.setItem("scart", JSON.stringify(shopCart));
  outputCart();
}
