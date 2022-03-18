// Nhập số nguyên dương
function inputNumPostive(nameOfNum) {
    let num;
    do {
        num = Number(prompt("Hãy nhập vào " + nameOfNum + ": "));
        if (Number.isNaN(num) || num <= 0) {
            alert('Giá trị bạn nhập không hợp lệ. Hãy nhập lại.')
        } else {
            return num;
        }
    } while (Number.isNaN(num) || num <= 0);
}

// Bài 1. Nhập vào 1 số nguyên dương x từ hội thoại. Tính tổng các số chia hết cho 3 nhỏ hơn hoặc bằng x và in màn hình
function bai1() {
    let sum = 0;
    let numInput = inputNumPostive('một số nguyên dương');
    for (let i = 1; i <= numInput; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }
    alert(`Tổng các số chia hết cho 3 và nhỏ hơn hoặc bằng ${numInput} là: ${sum}`);
}
/* Bài 2. Nhập 1 số nguyên dương n.Sau đó nhập vào 1 mảng gồm n phần tử từ hội thoại.
- Tách thành 2 mảng gồm các số chẵn, số lẻ.In mảng ban đầu, mảng chẵn, mảng lẻ
- Tính tổng các số chính phương trong mảng và in ra màn hình(yêu cầu xây dụng hàm kiểm tra số chính phương) */
function bai2() {
    let n = inputNumPostive('số phần tử của mảng');
    let arrNum = [];
    let arrChan = [];
    let arrLe = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arrNum[i] = inputNumPostive(`index arrNum[${i}]`);
        if (arrNum[i] % 2 === 0) {
            arrChan.push(arrNum[i]);
        } else {
            arrLe.push(arrNum[i]);
        }
        if (checkSoChinhPhuong(arrNum[i])) {
            sum += arrNum[i];
        }
    }
    alert(`
    Mảng ban đầu là: ${arrNum.toString()}
    Mảng các số chẵn là: ${arrChan.toString()}
    Mảng các số lẻ là: ${arrLe.toString()}
    Tổng các số chính phương trong mảng là: ${sum}
    `)

}

function checkSoChinhPhuong(numCheck) {
    for (let index = 2; index < numCheck; index++) {
        if (index * index === numCheck) {
            return true;
        }
    }
    return false;
}
// Bài 3. Nhập vào từ hội thoại 1 số nguyên từ 0..99. Máy tính sinh ra ngẫu nhiên 1 số từ 0..99. Đưa ra thông báo xem số bạn nhập vào và số máy tính sinh ra có trùng nhau hay không? Nếu trùng nhau thông báo trùng, in 2 số đó. Nếu không trùng nhau hiển thị hội thoại hỏi xem bạn có muốn nhập số tiếp không? Nếu nhấn OK, cho phép nhập tiếp và quy trình giống trên. Nếu nhấn cancel thì thoát luôn

function bai3() {
    do {
    let numRandom = Math.floor(Math.random() * 99);
    console.log(numRandom);
    let numInput;
        do {
            numInput = Number(prompt("Hãy nhập vào số bạn dự đoán: "));
            if (Number.isNaN(numInput) || numInput < 0 || numInput > 99) {
                alert('Giá trị bạn nhập không hợp lệ. Hãy nhập lại.')
            } else {
                break;
            }
        } while (Number.isNaN(numInput) || numInput < 0 || numInput > 99);
        if (numInput === numRandom) {
            alert("Giá trị bạn dự đoán trùng với giá trị ngẫu nhiên mà máy tính tạo ra. Đó là số " + numRandom);
        } else {
            alert(`
            Bạn dự đoán sai mất rồi.\n
            Giá trị bạn nhập là: ${numInput}\n
            Giá trị ngẫu nhiên mà máy tính tạo ra là: ${numRandom}`)
        }
        if (!checkRepeat()) {
            return;
        }
    } while (true);
}

function checkRepeat() {
    return confirm('Bạn có muốn nhập số tiếp hay không?');
}

// Bài 4
const box = document.getElementById('box');
function bai4() {
    box.style.display = 'block';
}

var value = '';

function toantu(num) {
    value += num;
    return value;
}

function toanhang(x) {
    value += x;
    return value;
}

function tinh() {
    if (value === '') {
        return '';
    } else {
        result = eval(value);
        value = '';
        return result;
    }
}

function xoadl() {
    value = '';
    return value;
}