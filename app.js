//Slider
//index of the shown image
var index = 1;
//Timer to slide images
var timer;
/*
This variable is created to avoid running
setInterval more than one time.
*/
var sliding = false;

//function to increment index
function increment() {
  if (index + 1 === 12) {
    index = 1;
  } else {
    index++;
  }
}
//function to decrement index
function decrement() {
  if (index - 1 === 0) {
    index = 11;
  } else {
    index--;
  }
}
//function to play slide show
function play() {
  if (!sliding) {
    sliding = true;
    timer = setInterval(function () {
      increment();
      document
        .getElementById("slideImg")
        .setAttribute("src", "./images/" + index + ".jpg");
    }, 800);
  }
}
//function to stop slide show
function stop() {
  clearInterval(timer);
  sliding = false;
}
//previous image
function previous() {
  decrement();
  document
    .getElementById("slideImg")
    .setAttribute("src", "./images/" + index + ".jpg");
}
//next image
function next() {
  increment();
  document
    .getElementById("slideImg")
    .setAttribute("src", "./images/" + index + ".jpg");
}

//Products Section
//Store products in Array of object
//each object has category, image source, name and description property
var prodcuts = [
  {
    category: "laptops",
    imgSrc: "./images/1.jpg",
    name: "Laptop1",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "laptops",
    imgSrc: "./images/2.jpg",
    name: "Laptop2",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "laptops",
    imgSrc: "./images/3.jpg",
    name: "Laptop3",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "laptops",
    imgSrc: "./images/4.jpg",
    name: "Laptop4",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "laptops",
    imgSrc: "./images/5.jpg",
    name: "Laptop5",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "mobiles",
    imgSrc: "./images/6.jpg",
    name: "Mobile1",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "mobiles",
    imgSrc: "./images/7.jpg",
    name: "Mobile2",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "mobiles",
    imgSrc: "./images/8.jpg",
    name: "Mobile3",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "cameras",
    imgSrc: "./images/9.jpg",
    name: "Camera1",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "cameras",
    imgSrc: "./images/10.jpg",
    name: "Camera2",
    details: "this prodcut is one of the best ever made products in the world",
  },
  {
    category: "cameras",
    imgSrc: "./images/11.jpg",
    name: "Camera3",
    details: "this prodcut is one of the best ever made products in the world",
  },
];

//filter prodcuts based on button clicks

var dispProdcuts = [...prodcuts];
// 1- function that shows all products
function filterAll() {
  document.getElementById("displayCard").innerHTML = "";
  dispProdcuts = [...prodcuts];
  displayProducts();
}
// 2- function that shows only mobile products
function filterMob() {
  document.getElementById("displayCard").innerHTML = "";
  dispProdcuts = prodcuts.filter((item) => item.category === "mobiles");
  displayProducts();
}
// 3- function that shows only camera products
function filterCam() {
  document.getElementById("displayCard").innerHTML = "";
  dispProdcuts = prodcuts.filter((item) => item.category === "cameras");
  displayProducts();
}
// 4- function that shows only laptop products
function filterLap() {
  document.getElementById("displayCard").innerHTML = "";
  dispProdcuts = prodcuts.filter((item) => item.category === "laptops");
  displayProducts();
}

//create a function to display products.
function displayProducts() {
  var cardsContainers = document.getElementById("displayCard");
  for (var i = 0; i < dispProdcuts.length; i++) {
    var src = dispProdcuts[i].imgSrc;
    var title = dispProdcuts[i].name;
    var description = dispProdcuts[i].details;
    //main card div
    var card = document.createElement("div");
    card.setAttribute("class", "card item");
    card.setAttribute("style", "width: 15rem");
    //two elements inside main card element
    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("class", "card-img-top");
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    //card body has three elements
    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = title;
    var cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text");
    cardDesc.innerText = description;
    var cardBtn = document.createElement("a");
    cardBtn.setAttribute("class", "btn btn-primary");
    cardBtn.setAttribute("onclick", "addToCart()");
    cardBtn.innerText = "Add to the cart";
    //inserting elements in card div
    cardBody.append(cardTitle, cardDesc, cardBtn);
    card.append(img, cardBody);
    cardsContainers.appendChild(card);
  }
  var cardArray = document.getElementsByClassName("card");
  for (var i = 0; i < cardArray.length; i++) {
    cardArray[i].style.backgroundColor = "#f2f2f2";
  }
}

displayProducts();

//Add prodcut to the cart
var cartQuantity = 0;
function addToCart() {
  cartQuantity++;
  document.getElementById("cartQuant").innerText = cartQuantity;
}
