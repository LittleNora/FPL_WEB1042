const submitBtn = document.querySelector('#signup-button');
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var arrBoolean;
var data = [];

function validator(selector, name) {
    let inputElement = document.querySelector(selector);
    let parentElement = getParentElement(inputElement);
    let errorMessageElement = parentElement.querySelector('.error-message');
    let value = inputElement.value;
    let isChecked = false;
    switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
            value = [];
            let inputElements = document.querySelectorAll(selector);
            inputElements.forEach(function(element) {
                if (element.checked) {
                    value.push(element.value);
                    isChecked = true;
                }
            })
            if (!isChecked) {
                parentElement.classList.add('invalid');
                errorMessageElement.innerHTML = 'Không được để trống trường này';
                arrBoolean.push(true);
            } else {
                arrBoolean.push(false);
                checkValid(parentElement, errorMessageElement);
            }
            break;
        default:
            if (selector === '#email') {
                if (!regEmail.test(value)) {
                    parentElement.classList.add('invalid');
                    errorMessageElement.innerHTML = 'Nhập đúng định dạng email';
                    arrBoolean.push(true);
                } else {
                    arrBoolean.push(false);
                    checkValid(parentElement, errorMessageElement);
                }
            } else if (selector === '#note') {
                if (value.trim().length > 200) {
                    parentElement.classList.add('invalid');
                    errorMessageElement.innerText = 'Ghi chú không được quá 200 ký tự';
                    arrBoolean.push(true);
                } else {
                    arrBoolean.push(false);
                    checkValid(parentElement, errorMessageElement);
                }
            } else {
                if (value.trim() == '') {
                    parentElement.classList.add('invalid');
                    errorMessageElement.innerText = 'Không để trống trường này';
                    arrBoolean.push(true);
                } else {
                    arrBoolean.push(false);
                    checkValid(parentElement, errorMessageElement);
                }
            }
            break;
    }
    data.push({
        name: name,
        value: value,
    });
}

function isRequired(selector) {
    let inputElement = document.querySelector(selector);
    let parentElement = getParentElement(inputElement);
    let errorMessageElement = parentElement.querySelector('.error-message');

    inputElement.onblur = function() {
        let value = inputElement.value;
        if (value.trim() == '') {
            parentElement.classList.add('invalid');
            errorMessageElement.innerText = 'Không để trống trường này';
        } else {
            checkValid(parentElement, errorMessageElement);
        }
    }

    inputElement.oninput = function() {
        checkValid(parentElement, errorMessageElement);
    }
}

function isEmail(selector) {
    let inputElement = document.querySelector(selector);
    let parentElement = getParentElement(inputElement);
    let errorMessageElement = parentElement.querySelector('.error-message');
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    inputElement.onblur = function() {
        let value = inputElement.value;
        if (!regEmail.test(value)) {
            parentElement.classList.add('invalid');
            errorMessageElement.innerHTML = 'Nhập đúng định dạng email';
        } else {
            checkValid(parentElement, errorMessageElement);
        }
    }

    inputElement.oninput = function() {
        parentElement.classList.remove('invalid');
        setTimeout(function() {
            errorMessageElement.innerHTML = ''
        }, 500);
    }
}

function checkValid(parentElement, errorMessageElement) {
    if (parentElement.matches('.invalid')) {
        parentElement.classList.remove('invalid');
        setTimeout(function() {
            errorMessageElement.innerHTML = ''
        }, 500);
    }
}

function getParentElement(element) {
    while (true) {
        if (!element.parentElement.matches('.form-group')) {
            element = element.parentElement;
        } else {
            return element.parentElement;
        }
    }
}

function checkSpecialInput(selector) {
    let inputElement = document.querySelector(selector);
    let parentElement = getParentElement(inputElement);
    let errorMessageElement = parentElement.querySelector('.error-message');
    checkValid(parentElement, errorMessageElement);
}

function checkNote(selector) {
    let inputElement = document.querySelector(selector);
    let parentElement = getParentElement(inputElement);
    let errorMessageElement = parentElement.querySelector('.error-message');
    inputElement.onblur = function() {
        let value = inputElement.value;
        if (value.trim().length > 200) {
            parentElement.classList.add('invalid');
            errorMessageElement.innerText = 'Ghi chú không được quá 200 ký tự';
        } else {
            checkValid(parentElement, errorMessageElement);
        }
    }

    inputElement.oninput = function() {
        checkValid(parentElement, errorMessageElement);
    }

}

function printNotification() {
    alert('Đăng ký thành công');
}

function start() {
    isRequired('#student-id');
    isRequired('#fullname');
    isEmail('#email');
    isRequired('#nationality');
    checkNote('#note');
    submitBtn.onclick = function(e) {
        e.preventDefault();
        arrBoolean = [];
        data = [];
        validator('#student-id', 'Mã sinh viên');
        validator('#fullname', 'Họ tên');
        validator('#email', 'Email');
        validator('#nationality', 'Quốc tịch');
        validator('input[type="radio"]', 'Giới tính');
        validator('input[type="checkbox"]', 'Sở thích');
        validator('#note', 'Ghi chú');
        if (!arrBoolean.includes(true)) {
            printNotification();
            // let dataForm = document.querySelector('.data-form');
            // let htmls = data.map(function(eachData) {
            //     if (Array.isArray(eachData.value)) {
            //         return `
            //         <div class="data">
            //             <h1>${eachData.name}:</h1>
            //             <p>${eachData.value.toString()}</p>
            //         </div>`;
            //     } else if (eachData.value !== '') {
            //         return `
            //         <div class="data">
            //             <h1>${eachData.name}:</h1>
            //             <p>${eachData.value}</p>
            //         </div>`;
            //     }
            // })
            // dataForm.innerHTML = htmls.join('');
            // getDataFromSearch();
        } else {
            
        }
    }
}
start();

// function getDataFromSearch() {
//     var eachDataGet;
//     let dataGet = location.search
//     let indices = [];
//     var arr= [];
//     eachDataGet = [];
//     for (let i = 0; i < dataGet.length; i++) {
//         if (dataGet[i] === "&") indices.push(i);
//     }

//     for (let index = -1; index < indices.length; index++) {
//         let data = dataGet.substring(indices[index] + 1, indices[index + 1]);
//         let dataArr = data.split("=");
//         let dataObj = {
//             name: dataArr[0].replace('?', ''),
//             value: replaceCharacter(decodeURIComponent(dataArr[1]), '+', ' ')
//         }
//         eachDataGet.push(dataObj);
//     }

//     for (let i = 0; i < eachDataGet.length - 1; i++) {
//         for (let j = i + 1; j < eachDataGet.length; j++) {
//             console.log(eachDataGet[i].name, eachDataGet[j].name, i, j);
//             if (eachDataGet[i].name === eachDataGet[j].name) {
//                 if (!Array.isArray(eachDataGet[i].value)) {
//                     eachDataGet[i].value = eachDataGet[i].value.split();
//                 }
//                 // eachDataGet[i].value.push(eachDataGet[j].value);
//                 arr.push(j);
//                 // eachDataGet.splice(j, 1);
//             }
//         }
//     }

//     for (let index = 0; index < arr.length; index++) {
//         console.log(arr[index]);
//         eachDataGet.splice(index, 1);
//     }

//     eachDataGet.forEach(function(data) {
//         switch (data.name) {
//             case 'student-id':
//                 data.name = 'Mã sinh viên';
//                 break;
//             case 'fullname':
//                 data.name = 'Họ tên';
//                 break;
//             case 'email':
//                 data.name = 'Email';
//                 break;
//             case 'gender':
//                 data.name = 'Giới tính';
//                 break;
//             case 'hobby':
//                 data.name = 'Sở thích';
//                 break;
//             case 'nationality':
//                 data.name = 'Quốc tịch';
//                 break;
//             case 'note':
//                 data.name = 'Ghi chú';
//                 break;
//         }
//         console.log(data);
//     })

//     function replaceCharacter(str, charNeedReplace, charReplace) {
//         while (true) {
//             if (str.includes(charNeedReplace)) {
//                 str = str.replace(charNeedReplace, charReplace);
//             } else {
//                 return str;
//             }
//         }
//     }
// }