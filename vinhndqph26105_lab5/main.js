var products = [{
        name: 'Bánh Ngọt Pháp La Pomme',
        src: './images/BANH3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae consectetur quibusdam maxime veniam sit eius harum, recusandae natus possimus aperiam non accusantium, quod deserunt asperiores similique repellat nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae consectetur quibusdam maxime veniam sit eius harum, recusandae.',
        price: 300000,
    },
    {
        name: 'Chocolate Thượng Hạng',
        src: './images/BANH1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae consectetur quibusdam maxime veniam sit eius harum, recusandae natus possimus aperiam non accusantium, quod deserunt asperiores similique repellat nisi expedita.',
        price: 50000
    },
    {
        name: 'Bánh Quế',
        src: './images/BANH2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae consectetur quibusdam maxime veniam sit eius harum, recusandae natus possimus aperiam non accusantium, quod deserunt asperiores similique repellat nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 100000
    },
];

const btns = document.querySelectorAll('.button');
const productImg = document.querySelector('.product-image');
const productHeading = document.querySelector('.product-heading');
const productDesc = document.querySelector('.product-desc');


productImg.src = products[0].src;
productHeading.innerText = products[0].name;
productDesc.innerText = products[0].desc

btns.forEach(function(btn, index) {
    btn.onclick = function() {
        productImg.src = products[index].src;
        productHeading.innerText = products[index].name;
        productDesc.innerText = products[index].desc
    }
});


billProducts = document.querySelectorAll('.bill-product');

const quantitys = document.querySelectorAll('table tr td input');

var totalPriceElement = document.querySelector('.total-price');


quantitys.forEach(function(quantity, index) {
    let priceElement = billProducts[index].querySelector('.price')
    let price;
    quantity.onchange = function() {
        price = quantity.value * products[index].price;
        console.log(price);
        priceElement.innerHTML = price;
        calTotalPrice();
    }
});

var prices = document.querySelectorAll('.price');
function calTotalPrice() {
    let totalPrice = 0;
    prices.forEach(function(price) {
        totalPrice += Number(price.innerText);
    })
    totalPriceElement.innerHTML = totalPrice;
}

calTotalPrice();
