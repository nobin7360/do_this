
let products = {
  "products": [
    {
      "id": 1,
      "name": "	Motion Sensor",
      "fileLocation":"../images/product_image/sensor/pic1.jpeg",
      "information": "Wide Working Voltage Range: DC 4.5V- 20V,Current Drain:<60uA,Detection Angle: <140°,Detection Distance: 3 to 7m (can be adjusted),Work temperature: -20-+80°C",
      "price": 1.5,
      "rating": 3
    },
    {
      "id": 2,
      "name": "Ultrasonic Sensor",
      "fileLocation": "../images/product_image/sensor/pic2.png",
      "information": "Ultrasonic Sonar Sensor HC-SR04 Wave Detector Ranging/Distance Module for arduino and DIY Electronics Project.",
      "price":1,
      "rating": 4.5
    },
    {
      "id": 3,
      "name": "Laser Sensor",
      "fileLocation": "../images/product_image/sensor/pic3.png",
      "information": "LCLCTC12V 24V Laser Sensor photoelectric Switch PNP NO + NC M18;Input(10-30VDC), 4 Wires; Detection Distance 8-50cm; HG18-D50P3, Normally Open and Normally Closed",
      "price": 2.5,
      "rating": 4.0
    },
    {
      "id": 4,
      "name": "LDR Sensor",
      "fileLocation": "../images/product_image/sensor/pic4.png",
      "information": "Teyleten Robot 5MM LDR Photosensitive Sensor Module Light Dependent Resistor Sensor Module Digital Light Detection LM393 3 pins for Arduino (10PCS)",
      "price":2,
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


// code for selector

  function goToPage(select) {
  const page = select.value;
  if(page) {
    window.location.href = page; 
  }
}