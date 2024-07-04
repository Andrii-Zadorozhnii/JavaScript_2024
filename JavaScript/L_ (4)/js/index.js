// document.querySelector('button').onclick = myFunc;

// function myFunc() {

// };

document.querySelector('.button').onclick = () => {
    let color = document.querySelector('#one').value;
    let calendar = document.querySelector('#calendar').value;
    let range = document.querySelector('#range').value;
    //Style
    document.querySelector('button').style.backgroundColor = color;
    console.log
};

document.querySelector('#range').oninput = () => {
    console.log(document.querySelector('#range').value)
    document.querySelector('span').innerHTML = document.querySelector('#range').value
}

document.querySelector('.button2').onclick = () => {
    console.log(document.querySelector('#i2').value)
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked)
    if (myCheckBox.checked) {
        console.log('Checked')
    } else {
        console.log('Unchecked')
    }
};

document.querySelector('.button3').onclick = (event) => {
    event.preventDefault();
    let text = document.querySelector('#two');
    console.log(text.value)
    text.value = "one"
    let form = document.querySelector('form');
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);

};