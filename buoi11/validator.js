const btnSubmit = document.getElementById('btn');
const nodeInputs = document.querySelectorAll('input');
const nodeSpans = document.querySelectorAll('span');


btn.onclick = function() {
    nodeInputs.forEach(function(nodeInput, index) {
        if(nodeInput.value.trim() == '') {
            nodeInput.style.borderColor = 'red';
            nodeSpans[index].innerHTML = 'Bạn chưa nhập dữ liệu';
        } else {
            nodeInput.style.borderColor = 'black';
            nodeSpans[index].innerHTML = '';
        }
    })
}