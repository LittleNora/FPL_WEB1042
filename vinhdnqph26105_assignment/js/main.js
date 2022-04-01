var imgSlideSrcs = [
    'slider_0.png',
    'slider_1.png',
    'slider_2.png',
    'slider_3.png',
    'slider_4.png',
];

var products = [{
        name: 'iPhone 13 128GB - Hàng Chính Hãng',
        src: './img/product/iphone13_128gb_red.jpg',
        originPrice: 21690000,
        salePrice: 21550000
    },
    {
        name: 'Samsung Galaxy Z Fold 3 (512GB) - Hàng Chính Hãng',
        src: './img/product/ss_fold3.jpg',
        originPrice: 38990000,
        salePrice: 44990000
    },
    {
        name: 'iPad Air 10.9 Wi-Fi + Cellular 64GB New 2020 - Hàng Chính Hãng',
        src: './img/product/ipad_air.jpg',
        originPrice: 17989000,
        salePrice: 19990000
    },
    {
        name: 'Samsung Galaxy S20 FE - Hàng Chính Hãng',
        src: './img/product/ss_glx_s20fe.jpg',
        originPrice: 10390000,
        salePrice: 14990000
    },
    {
        name: 'Samsung Galaxy S21 5G (8GB/128GB) - Hàng chính hãng - Trắng',
        src: './img/product/ss_glx_s21.jpg',
        originPrice: 20990000,
        salePrice: 17990000
    },
    {
        name: 'iPhone 11 64GB - Hàng Chính Hãng',
        src: './img/product/iphone_11.jpg',
        originPrice: 12989000,
        salePrice: 11990000
    },
    {
        name: 'Samsung Galaxy Tab S7 FE LTE',
        src: './img/product/glx_tab_fe.jpg',
        originPrice: 10390000,
        salePrice: 13990000
    },
    {
        name: 'iPad Pro M1 12.9 inch (2021) 128GB Wifi - Hàng Chính Hãng',
        src: './img/product/ipad_pro_m1.jpg',
        originPrice: 26989000,
        salePrice: 25190000
    },
];


var asideMenus = [
    'Nhà cửa',
    'Điện tử',
    'Thiết bị số',
    'Điện thoại',
    'Thời trang',
    'Bách hóa',
    'Làm đẹp',
    'Gia dụng',
    'Điện thoại',
    'Balo & Vali',
    'Phụ kiện',
    'Đồng hồ',
    'Laptop',
    'Sách',
    'Máy ảnh',
]

const slider = document.querySelector('.slider-main');
if (slider) {
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
        }, 3000);
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
                                ${product.originPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                            </p>
                            <p class="sale_price">
                            ${product.salePrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
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
        let htmls = asideMenus.map(function(asideMenuItem, index) {
            return `
            <li>
                <a href="#" menu-index="${index}">
                    ${asideMenuItem}
                </a>
            </li>
            `
        })
        asideMenu.innerHTML = htmls.join('');
    }
    renderAsideMenu();

    var activeLink = document.querySelector('a[menu-index="3"]');
    activeLink.classList.add('active-link');
}

const table = document.querySelector('table');
if (table) {
    const tableHead = `
    <tr>
        <th class="checkbox-column"><input disabled type="checkbox" name="check"></th>
        <th class="name-column">Hàng hóa</th>
        <th class="price-column">Đơn giá</th>
        <th class="quantity-column">Số lượng</th>
        <th class="total-price-column">Thành tiền</th>
    </tr>`;

    const tableFooter = `
        <tr>
            <td colspan="4">Tổng</td>
            <td id="total-price"></td>
        </tr>
    `;

    function renderProductRow() {
        let htmls = products.map(function(product, index) {
            return `
            <tr table-index="${index}" class="product-row">
                <td class="checkbox-column">
                    <input class="checking" type="checkbox" name="check">
                </td>
                <td class="name-column">
                    ${product.name}
                </td>
                <td class="price-column">
                    ${product.salePrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                </td>
                <td class="quantity-column">
                    <input class="quantity form-control" type="number" name="quantity" min="0" max="5" value="0" disabled>
                </td>
                <td class="total-price-column">
                </td>
            </tr>
            `
        });
        table.innerHTML = tableHead + htmls.join('') + tableFooter;
    }
    renderProductRow();

    var totalPriceElement = document.querySelector('#total-price');
    var prices = [];
    let totalPrice = 0;
    totalPriceElement.innerText = totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });

    var productRows = document.querySelectorAll('.product-row');
    productRows.forEach(function(productRow, index) {
        let checkbox = productRow.querySelector('.checking');
        let quantity = productRow.querySelector('.quantity');
        let totalPriceRow = productRow.querySelector('.total-price-column');
        let price = 0;
        checkbox.onchange = function() {
            if (checkbox.checked) {
                quantity.disabled = false;
                quantity.value = 1;
            } else {
                quantity.disabled = true;
                quantity.value = 0;
            }
            renderPrice(checkbox, quantity, totalPriceRow, price, index);
            renderTotalPrice(price);
        }
        quantity.onchange = function() {
            renderPrice(checkbox, quantity, totalPriceRow, price, index);
            renderTotalPrice(price);
        }
    })

    function renderPrice(checkbox, quantity, totalPriceRow, price, index) {
        if (Number(quantity.value) > 0) {
            checkbox.checked = true;
            price = Number(quantity.value) * products[index].salePrice;
            totalPriceRow.innerText = price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        } else {
            checkbox.checked = false;
            totalPriceRow.innerText = '';
        }
        prices[index] = price;
    }

    function renderTotalPrice() {
        totalPrice = 0;
        prices.forEach(function(price) {
            totalPrice += price;
        })
        totalPriceElement.innerText = totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    }

    function printNotification() {
        alert('Đặt hàng thành công')
    }
}