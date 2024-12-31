document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to checkout...');
        });
    });
});
