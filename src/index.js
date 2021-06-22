import cipher from './cipher.js';

let offsetString, encodeInput;
let encodeOutput = document.getElementById('encode-output');

const decodeBtn = document.getElementById('btn2');
const encodeBtn = document.getElementById('btn1');

encodeBtn.addEventListener('click', encrypt);
decodeBtn.addEventListener('click', decrypt);

function encrypt() {

    offsetString = document.getElementById('key-input').value;
    encodeInput = document.getElementById('encode-input').value;

    encodeOutput.value = cipher.encode(offsetString, encodeInput);

}




function decrypt() {

    offsetString = document.getElementById('key-input').value;
    encodeInput = document.getElementById('encode-input').value;

    encodeOutput.value = cipher.decode(offsetString, encodeInput);

}



