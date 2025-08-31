
let products = {
  "products": [
    {
      "id": 1,
      "name": "	Arduino UNO R4 WiFi",
      "fileLocation": "../images/product_image/arduino/pic1.webp",
      "information": "Arduino UNO R4 WiFi [ABX00087] – Renesas RA4M1 + ESP32-S3, Wi-Fi, Bluetooth, USB-C, CAN, 12-bit DAC, OP AMP, Qwiic Connector, 12x8 LED Matrix for Advanced IoT & Embedded Projects",
      "price": 27,
      "rating": 4.8
    },
    {
      "id": 2,
      "name": "ARD_A000066",
      "fileLocation": "../images/product_image/arduino/pic2.webp",
      "information": "Arduino Uno REV3 [A000066] – ATmega328P Microcontroller, 16MHz, 14 Digital I/O Pins, 6 Analog Inputs, 32KB Flash, USB Connectivity, Compatible with Arduino IDE for DIY Projects and Prototyping",
      "price": 28,
      "rating": 4.7
    },
    {
      "id": 3,
      "name": "	ABX00063",
      "fileLocation": "../images/product_image/arduino/pic3.webp",
      "information": "Arduino Giga R1 WiFi [ABX00063] – High-Performance Microcontroller with Dual-Core ARM Cortex-M7 & M4, Wi-Fi, Bluetooth, and Advanced I/O for IoT & Edge Computing",
      "price": 69,
      "rating": 4.6
    },
    {
      "id": 4,
      "name": "Arduino Mega 2560 REV3",
      "fileLocation": "../images/product_image/arduino/pic4.webp",
      "information": "Arduino Mega 2560 REV3 [A000067] – ATmega2560, 16MHz, 54 Digital I/O, 16 Analog Inputs, 256KB Flash, USB, Compatible with Arduino IDE for Advanced Projects",
      "price": 49,
      "rating": 4.7
    },
    {
      "id": 5,
      "name": "with headers",
      "fileLocation": "../images/product_image/arduino/pic5.webp",
      "information": "Arduino Nano ESP32 with Headers [ABX00083] – ESP32-S3, USB-C, Wi-Fi, Bluetooth, HID Support, MicroPython Compatible for IoT & Embedded Projects",
      "price": 20,
      "rating": 4.6
    },
    {
      "id": 6,
      "name": "Arduino UNO R4 Minima",
      "fileLocation": "../images/product_image/arduino/pic4.webp",
      "information": "Arduino Mega 2560 REV3 [A000067] – ATmega2560, 16MHz, 54 Digital I/O, 16 Analog Inputs, 256KB Flash, USB, Compatible with Arduino IDE for Advanced Projects",
      "price": 19,
      "rating": 4.6
    },
    {
      "id": 6,
      "name": "	Raspberry Pi 5",
      "fileLocation": "../images/product_image/arduino/pic7.jpg",
      "information": "Raspberry Pi Raspberry Pi 5 Active Cooler - Aluminum Heatsink - SC1148",
      "price": 9,
      "rating": 4.8
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
