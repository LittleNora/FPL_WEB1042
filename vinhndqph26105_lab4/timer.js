// Bài 2
function bai2() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    document.write(`${hours}:${minutes}:${seconds}`)
}

window.onload = function() {
    setTimeout(function() {
        bai2();
        window.location.reload();
    }, 1000)
}