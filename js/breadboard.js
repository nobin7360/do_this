
let products = {
  "products": [
    {
      "id": 1,
      "name": "Breadboards",
      "fileLocation":"../images/product_image/breadboard/pic1.webp",
      "information": "4PCS Breadboards Kit Include 2PCS 830 Point 2PCS 400 Point Solderless Breadboards for Proto Shield Distribution Connecting Blocks",
      "price":6,
      "rating":4.6
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