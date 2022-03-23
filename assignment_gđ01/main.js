var imgSlideSrcs = [
    'slider_0.png',
    'slider_1.png',
    'slider_2.png',
    'slider_3.png',
    'slider_4.png',
];

var products = [
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
    {
        name: 'Iphone 13 128GB',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: '32.000.000',
        salePrice: '35.000.000'
    },
];

var asideMenus = [
    'Nhà cửa',
    'Điện tử',
    'Thiết bị số',
    'Điện thoại',
    'Thời trang',
    'Nhà cửa',
    'Điện tử',
    'Thiết bị số',
    'Điện thoại',
    'Thời trang',
    'Nhà cửa',
    'Điện tử',
    'Thiết bị số',
    'Điện thoại',
    'Thời trang',
]

const slider = document.querySelector('.slider-main');
const sliderWidth = slider.offsetWidth;
const sliderLen = imgSlideSrcs.length;

const firstSlideBtn = document.querySelector('#firstSlideBtn');
const prevBtn = document.querySelector('#prevBtn');
const autoSlideBtn = document.querySelector('#autoSlideBtn');
const stopAutoSlideBtn = document.querySelector('#stopAutoSlideBtn');
const nextBtn = document.querySelector('#nextBtn');
const lastSlideBtn = document.querySelector('#lastSlideBtn');

// Render image
function renderSlide() {
    let htmls = imgSlideSrcs.map(function(imgSlideSrc, indexImg) {
        return `
        <div class="slider-box" data-index="${indexImg}">
            <img src="./img/slider/${imgSlideSrc}" class="slider-img">
        </div>
        `;
    })
    slider.innerHTML = htmls.join('');
}
renderSlide();


var index = 0;
const sliderItems = document.querySelectorAll('.slider-box');

function checkDisplay() {
    let activeSlide = document.querySelector('.slider-box.active')
    if (activeSlide) {
        activeSlide.classList.remove('active');
    }
    sliderItems[index].classList.add('active');
}
checkDisplay();

nextBtn.onclick = function() {
    if (index === sliderLen - 1) {
        index = 0;
    } else {
        index++;
    }
    slider.style.transform = `translate3d(${-index * sliderWidth}px, 0, 0)`;
    checkDisplay();
}

prevBtn.onclick = function() {
    if (index === 0) {
        index = sliderLen - 1;
    } else {
        index--;
    }
    slider.style.transform = `translate3d(${-index * sliderWidth}px, 0, 0)`;
    checkDisplay();
}

firstSlideBtn.onclick = function() {
    index = 0;
    slider.style.transform = `translate3d(${-index * sliderWidth}px, 0, 0)`;
    checkDisplay();
}

lastSlideBtn.onclick = function() {
    index = sliderLen - 1;
    slider.style.transform = `translate3d(${-index * sliderWidth}px, 0, 0)`;
    checkDisplay();
}

var auto;
autoSlideBtn.onclick = function() {
    auto = setInterval(function() {
        nextBtn.click();
    }, 4000);
}

stopAutoSlideBtn.onclick = function() {
    clearInterval(auto);
}

// Render product

const productBox = document.querySelector('#content > article');
function renderProduct() {
    let htmls = products.map(function(product) {
        return `
            <a href="#">
                <div class="product">
                    <h1>${product.name}</h1>
                    <img src="${product.src}">
                    <div class="price">
                        <p class="origin_price">
                            ${product.originPrice}<span>đ</span>
                        </p>
                        <p class="sale_price">
                        ${product.salePrice}<span>đ</span>
                        </p>
                    </div>
                </div>
            </a>
        `
    })
    productBox.innerHTML = htmls.join('');
}
renderProduct();


// Render Aside Menu
const asideMenu = document.querySelector('#content aside ul');
function renderAsideMenu() {
    let htmls = asideMenus.map(function(asideMenuItem) {
        return `
        <li>
            <a href="#">
                ${asideMenuItem}
            </a>
        </li>
        `
    })
    asideMenu.innerHTML = htmls.join('');
}
renderAsideMenu();