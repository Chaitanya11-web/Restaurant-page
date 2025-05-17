let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');

    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    totalPriceSpan.textContent = totalPrice;
}

function placeOrder() {
    const houseNumber = document.getElementById('house-number').value;
    const landmark = document.getElementById('landmark').value;
    const locality = document.getElementById('locality').value;
    const city = document.getElementById('city').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your order.");
        return;
    }

    if (!houseNumber || !landmark || !locality || !city) {
        alert("Please fill in all address fields.");
        return;
    }



    const orderSummary = `Order Summary:\nItems: ${cart.map(item => item.name).join(', ')}\nTotal: ₹${totalPrice}\nAddress: ${houseNumber}, ${landmark}, ${locality}, ${city}\nPayment Method: ${paymentMethod}`;
    alert("Order placed successfully!\n" + orderSummary); // Order placed message

    cart = [];
    totalPrice = 0;
    updateCart();
    document.getElementById('house-number').value = "";
    document.getElementById('landmark').value = "";
    document.getElementById('locality').value = "";
    document.getElementById('city').value = "";

}