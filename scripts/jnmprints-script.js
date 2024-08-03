const products = {
    product1: {
        name: 'Product 1',
        description: 'This is the description for Product 1.',
        price: '$10',
        imageUrl: 'path/to/product1.jpg'
    },
    product2: {
        name: 'Product 2',
        description: 'This is the description for Product 2.',
        price: '$20',
        imageUrl: 'path/to/product2.jpg'
    },
    product3: {
        name: 'Product 3',
        description: 'This is the description for Product 3.',
        price: '$30',
        imageUrl: 'path/to/product3.jpg'
    }
};

function getProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function loadProduct(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-details').innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <img src="${product.imageUrl}" alt="${product.name}">
        `;
    } else {
        document.getElementById('product-details').innerHTML = `<p>Uh oh, an error. Sorry about that. Please try that again.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductFromUrl();
    loadProduct(productId);
});
