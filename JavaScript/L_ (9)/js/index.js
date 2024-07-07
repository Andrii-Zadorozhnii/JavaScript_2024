const primer = document.querySelector('.primer');
console.log(primer);
console.log(primer.innerHTML);
console.log(primer.innerText);
console.log(primer.textContent);

document.querySelector('.out-1').innerHTML = primer.innerHTML;
document.querySelector('.out-2').innerText = primer.innerText;
document.querySelector('.out-3').textContent = primer.textContent;