// no 2
let headerFirst = document.getElementById("header-first")
let para = document.getElementsByTagName("p").length
let spanPara = document.querySelector(".span-para")

// no 3
spanPara = spanPara.parentNode
let firstElement = document.getElementById("about").firstElementChild
let nextSibling = document.querySelector(".first").nextElementSibling

// no 4
let div = document.createElement('div');
div.id = 'examp;e';
div.innerHTML = '<p>Contoh penggunaan innerHTML</p>';
document.body.appendChild(div);

// no 5
let btnSend = document.querySelector('#btnSend');
if (btnSend) {
    btnSend.setAttribute('name', 'send');
    btnSend.setAttribute('disabled', '');
}

let link = document.querySelector('#js');
if (link) {
    let target = link.getAttribute('target');
    console.log(target);
}

// no 6

console.log(nextSibling)