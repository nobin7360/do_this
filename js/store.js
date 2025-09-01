// Function to add a product to the order/cart
function dostore(image, name, price, stock) {
    if (stock <= 0) {
        console.log(`${name} is out of stock!`);
        return;
    }

    // Get existing cart from localStorage or initialize empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart
    cart.push({ image, name, price, stock: 1 }); // stock:1 means 1 item added
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart display on this page if container exists
    if (document.getElementById("cart-container")) {
        renderCart();
    }
}

// Function to render the cart (used in store.index.html)
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer) return;

    // Clear previous contents
    cartContainer.innerHTML = "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    let totalCost = 0;

    cart.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.stock}</p>
            <button>Remove</button>
        `;

        // Remove button
        card.querySelector("button").addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart(); // re-render after removal
        });

        cartContainer.appendChild(card);

        totalItems += product.stock;
        totalCost += product.price * product.stock;
    });

    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-cost").textContent = totalCost.toFixed(2);
}
