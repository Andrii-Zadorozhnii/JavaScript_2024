let a = 6;
let b = "Hello"
let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out')

button.onclick = function () {
    console.log('inputIn clicked');
    // console.log(inputIn.value)
    let b = +inputIn.value;
    console.log(b + 2);
    div.innerHTML = b;
    inputIn.value = "";
};