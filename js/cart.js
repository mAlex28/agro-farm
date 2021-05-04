let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Basmathi Rice White",
        tag: "rice",
        price: 325,
        inCart:0
    },
    {
        name: "Ceylon Black Tea",
        tag: "tea",
        price: 230,
        inCart:0
    },
    {
        name: "Sterillized Milk",
        tag: "milk-bottle",
        price: 85,
        inCart:0
    },
    {
        name: "Chilli Powder",
        tag: "chili-powder",
        price: 116,
        inCart:0
    },
    {
        name: "Carrot",
        tag: "carrot",
        price: 190,
        inCart:0
    },
    {
        name: "Tomato",
        tag: "tomato",
        price: 140,
        inCart:0
    },
    {
        name: "Cabbage",
        tag: "cabbage",
        price: 160,
        inCart:0
    },
    {
        name: "Coconut",
        tag: "coconut",
        price: 73,
        inCart:0
    }
];


for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cartCount span').textContent = productNumbers;
    }
}

function cartNumbers(product) { 
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);  

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cartCount span').textContent = productNumbers + 1;    
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartCount span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
   
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
   
    console.log("my cart cost", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-product-container");
    let totPriceContainer = document.querySelector(".total-price");
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        // totPriceContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <tr>
            <td>
            <div class="cart-info">
                <img src="/img/${item.tag}.jpeg" alt="pic">
                <div>
                <p>${item.name} - 1kg</p>
                <span>Price: Rs160.00</span>
                <br />
                <a href="#">remove</a>
                </div>
            </div>
            </td>
            <td><input type="number" value="${item.inCart}" min="1"></td>
            <td>Rs.${item.price * item.inCart}.00</td>
        </tr>
        `       
        });

        totPriceContainer.innerHTML = `
        <table>
            <tr>
            <td>Subtotal</td>
            <td>${cartCost}</td>
            </tr>
            <tr>
            <td>Delivery Charge</td>
            <td>0</td>
            </tr>
            <tr>
            <td>Total</td>
            <td>Rs.${cartCost}.00</td>
            </tr>
        </table>
        <a href="payment.html" class="checkout btn">Proceed To Checkout</a>
        `;
        
    }
}


onLoadCartNumbers();
displayCart();