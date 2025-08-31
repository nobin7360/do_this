
let products = {
  "products": [
    {
      "id": 1,
      "name": "Lithium Battery",
      "fileLocation":"../images/product_image/battery/pic1.jpg",
      "information": "AA Lithium Battery, Double A Lithium Battery 1.5V for Blink Outdoor 4 Camera, Smart Lock, Trail Camera, Flashlight Non-Rechargeable (AA 24 Pack)",
      "price":6,
      "rating":4.3
    },
    {
      "id": 2,
      "name": "1.5 V battery",
      "fileLocation": "../images/product_image/battery/pic2.png",
      "information": "Amazon Basics 4-Pack C Cell Alkaline All-Purpose Batteries, 1.5 Volt, 5-Year Shelf Life",
      "price":5,
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "AH battery",
      "fileLocation": "../images/product_image/battery/pic3.jpeg",
      "information": "2-Pack 12V 100Ah LiFePO4 Automotive Batteries, 15000+ Deep Cycles, 100A BMS Each, Group 24 Car Battery Replacements for RV, Trailer, UTV, Off-Grid, Trolling Motor, Vehicle Power Systems,DIY",
      "price": 120,
      "rating": 4.7
    },
    {
      "id": 4,
      "name": "Polymer Battery",
      "fileLocation": "../images/product_image/battery/pic4.jpg",
      "information": "Li ion Li Polymer Battery Pack Board for 13S 48V/54.6V Batteries",
      "price":13,
      "rating": 3.9
    }
  ]
};


localStorage.setItem("products", JSON.stringify(products));
let stored = localStorage.getItem("products");
let parsed = JSON.parse(stored);
let container = document.getElementById("product-container");

function displayProducts(list) {
  container.innerHTML = ""; 
  list.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.fileLocation}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.information}</p>
      <p class="price">$${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <button class="btn">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}
displayProducts(parsed.products);
document.getElementById("priceFilter").addEventListener("change", function() {
  let val = this.value;
  let list = [...parsed.products]; 

  if (val === "low-high") {
    list.sort((a, b) => a.price - b.price);
  } else if (val === "high-low") {
    list.sort((a, b) => b.price - a.price);
  }
  displayProducts(list);
});

document.getElementById("ratingFilter").addEventListener("change", function() {
  let val = this.value;
  let list = [...parsed.products];

  if (val === "high-low") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (val === "low-high") {
    list.sort((a, b) => a.rating - b.rating);
  }
  displayProducts(list);
});


// code for selector

  function goToPage(select) {
  const page = select.value;
  if(page) {
    window.location.href = page; 
  }
}