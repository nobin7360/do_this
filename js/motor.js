

let products = {
  "products": [
    {
      "id": 1,
      "name": "12 V dc Motor",
      "fileLocation":"../images/product_image/dcmotor/pic1.jpg",
      "information": "RS-555 555 DC Motor Full Metal Body DC 12 Volt Hi RPM, Hi-Torque, Low Power, Low Noise for Rechargeable DC Fan, Drill Machine or Electrical Tool and DIY Project.",
      "price":3,
      "rating":5
    },
    {
      "id": 2,
      "name": "5 V dc Motor",
      "fileLocation": "../images/product_image/dcmotor/pic2.webp",
      "information": "Small Electric DC Motor for Hair Dryer Use by ROJA ELECTRONICS",
      "price":0.7,
      "rating": 2
    },
    {
      "id": 3,
      "name": "Micro Toy Motor",
      "fileLocation": "../images/product_image/dcmotor/pic3.jpg",
      "information": "Mudder 20 Pieces Micro Electric Motor DC 1.5-3V 23000RPM Cars Toys Rectangular Small Electric Motor for DIY Toys Science Projects Metal Engine Motor Kit",
      "price": 1,
      "rating": 4.2
    },
    {
      "id": 4,
      "name": "24V dc Motor",
      "fileLocation": "../images/product_image/dcmotor/pic4.webp",
      "information": "Greartisan DC 24V 500RPM Gear Motor High Torque Electric Micro Speed Reduction Geared Motor Eccentric Output Shaft 37mm Diameter Gearbox",
      "price":15,
      "rating": 4.5
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

