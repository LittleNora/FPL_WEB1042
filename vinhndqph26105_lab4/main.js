function inputNum(nameOfNum) {
    let numInput;
    do {
        numInput = Number(prompt(`Hãy nhập vào ${nameOfNum}: `));
        if (Number.isNaN(numInput) || numInput <= 0) {
            alert('Giá trị bạn nhập không hợp lệ. Hãy nhập lại.')
        } else {
            return numInput;
        }
    } while (true);
}

// Bài 1. Nhập 1 số nguyên dương n. Sau máy tính sẽ sinh ngẫu nhiên các số 0..1000 vào 1 mảng gồm n phần từ từ hội thoại. In mảng đó và sắp xếp theo chiều tăng dần của các số trong mảng đó và in ra màn hình (không sử dụng hàm sắp xếp có sẵn).
function bai1() {
    let n;
    let arrNum = [];
    n = inputNum('số phần tử muốn sinh ra');
    for (let i = 0; i < n; i++) {
        let randomNum = Math.floor(Math.random() * 1000);
        arrNum.push(randomNum);
    }
    alert(n + ' số sinh ra ngẫu nhiên là: ' + arrNum.join(', '));
    sortArray(arrNum);
}

function sortArray(array) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    alert('Mảng sau khi được sắp xếp tăng dần là: ' + array.join(', '));
}

// Bài 3
function SanPham(name, price, sale) {
    this.name = name;
    this.price = price;
    this.sale = sale;

    this.getThueNhapKhau = function() {
        return this.price * 0.1;
    }

    this.xuat = function() {
        alert(`
        Tên: ${this.name}
        Đơn giá: ${this.price}
        Giảm giá: ${this.sale}
        Thuế nhập khẩu: ${this.getThueNhapKhau().toFixed(1)}
        `)
    }
}

function bai3() {
    let sanPham = [];
    for (let i = 0; i < 2; i++) {
        let name = prompt(`Hãy nhập vào tên của sản phẩm thứ ${i + 1}: `);
        let price = inputNum(`giá sản phẩm thứ ${i + 1}`);
        let sale = inputNum(`% giảm giá của sản phẩm thứ ${i + 1}`)
        sanPham[i] = new SanPham(name, price, sale);
    }

    for (let i = 0; i < 2; i++) {
        sanPham[i].xuat();
    }
}

// function bai3() {
//     sanPham_1 = new SanPham('Iphone 13 Pro Max 256GB', 32000000, 20);
//     sanPham_2 = new SanPham('Samsung Galaxy Z Flip', 15000000, 5);

//     sanPham_1.xuat();
//     sanPham_2.xuat();
// }