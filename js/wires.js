
let products = {
  "products": [
    {
      "id": 1,
      "name": "Jumper Wires",
      "fileLocation":"../images/product_image/wires/pic1.jpeg",
      "information": "120pcs Breadboard Jumper Wires 10cm 15cm 20cm 30cm 40cm 50 cm 100cm Wire Length Optional Dupont Cable Assorted Kit Male to Female Male to Male Female to Female Multicolored Ribbon Cables",
      "price":6,
      "rating":4.7
    },
    {
      "id": 2,
      "name": "Ground Wire",
      "fileLocation": "../images/product_image/wires/pic2.jpg",
      "information": "14 AWG THHN Stranded Bare Copper Wire 50FT Green Grounding Wire, Electrical Wire, 600V Rated Building Wire, Ideal for Panel Wiring, Grounding, Lighting Circuits, Control Systems",
      "price":20,
      "rating": 4.6
    },
    {
      "id": 3,
      "name": "Twist Wire",
      "fileLocation": "../images/product_image/wires/pic3.jpg",
      "information": "BENECREAT 20 Gauge 23Ft Twist Jewelry Wire - Silver White Craft and Beading Wire for Ornaments and Jewelry Craft",
      "price": 8,
      "rating": 4.0
    },
    {
      "id": 4,
      "name": "Electrical Wire",
      "fileLocation": "../images/product_image/wires/pic4.jpg",
      "information": "16 Gauge Wire, 16AWG Automotive Wire Electrical Wire 100FT 2 Conductor Red Black 12V/24V DC Cable LED Strips Extension for Light RC Car Speaker",
      "price":14,
      "rating": 4.6
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