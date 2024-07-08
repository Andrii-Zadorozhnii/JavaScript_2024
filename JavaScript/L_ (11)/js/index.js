const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';
// one.style.background = "red";

// console.log(one.style);

one.classList.add('two', 'three');

one.classList.remove('three');

const toggle = document.querySelector('.toggle')

toggle.onclick = function () {
    this.classList.toggle('three');
};

// atributes data

console.log(one.getAttribute('data'));

console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);
console.log(one.getAttribute('data-num'));

let gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

let a = document.createElement('div');
a.innerHTML = 'Helllo';
a.classList.add('one');
a.onclick = function () {
    alert('Hello')
}

document.querySelector('.test').appendChild(a);


console.log(a)