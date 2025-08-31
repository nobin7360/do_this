
let products = {
  "products": [
     {
      "id": 1,
      "name": "5 mm LED Diode",
      "fileLocation":"../images/product_image/led/pic1.webp",
      "information": "DiCUNO 450pcs 5mm LED Diode, LED Light Kit Box 5 Colors, Mini LED Assorted Kit 5mm Round Top, Light Emitting Diodes for DIY Project, White/Red/Yellow/Green/Blue",
      "price":9,
      "rating":4.7
    },
    {
      "id": 2,
      "name": "Pre Wired led",
      "fileLocation": "../images/product_image/led/pic2.webp",
      "information": "12 Volt 5Mm Pre Wired Led Light Emitting Diodes,Micro Led Lights Diodes for Model Assortment Kit,12V Mini Single Led Bulbs(Red*10,Green*10,Orange*10,Blue*10,White*10)",
      "price":11,
      "rating": 4.6
    },
    {
      "id": 3,
      "name": "Laser Sensor",
      "fileLocation": "../images/product_image/led/pic3.webp",
      "information": "LCLCTC12V 24V Laser Sensor photoelectric Switch PNP NO + NC M18;Input(10-30VDC), 4 Wires; Detection Distance 8-50cm; HG18-D50P3, Normally Open and Normally Closed",
      "price": 2.5,
      "rating": 4.0
    },
    {
      "id": 4,
      "name": "500 pcs led",
      "fileLocation": "../images/product_image/led/pic4.webp",
      "information": "BOJACK 5 Colors 500 pcs 5mm LED Diode Lights Assored Kit Pack Bright Lighting Bulb Lamps Electronics Components 5 mm Light Emitting Diodes Parts",
      "price":11,
      "rating": 4.7
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

function goToPage(select) {
  const page = select.value;
  if(page) {
    window.location.href = page; 
  }
}
