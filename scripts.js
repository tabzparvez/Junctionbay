// JavaScript for Shopify Store Replica

document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    const updateCartCount = () => {
        document.getElementById("cart-count").textContent = cart.length;
    };

    const updateCartTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById("cart-total").textContent = total.toFixed(2);
    };

    const renderCartItems = () => {
        const cartItemsContainer = document.querySelector(".cart-items");
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.className = "cart-item";
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });
    };

    const updateCart = () => {
        updateCartCount();
        updateCartTotal();
        renderCartItems();
    };

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const name = product.querySelector("h3").textContent;
            const price = parseFloat(product.querySelector("p").textContent.replace("$", ""));

            cart.push({ name, price });
            updateCart();
        });
    });

    document.querySelector(".checkout").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
    });
});
