// for
//while

// for (Start, work till true, counter) {

// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// };

// for (let i = 5; i <= 0; i--) {
//     console.log(i);
// };

// for (let i = 0; i < 6; i = i++) {
//     if (i == 4) break;
//     console.log(i);
// };

// for (let i=0; i >= 0; i++) {
//     console.log(i++)
// };

let div = document.querySelectorAll(".one");
console.log(div);

// // div.style.background = "red";

// for (let i = 0; i < div.length; i++) {
//     div[i].style.background = "red";
//     div[i].onclick = two;
// };


// function two() {
//     console.log('work!!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     console.log(b[i].style.border = "3px solid black")
// };
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i].style.padding = '5px')
// }
document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r)
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value)
        }
    }
}
let out = " ";
for (let i = 0; i < 10; i++) {
    out += i + " ";
    if (i == 6) continue;
    if (i == 6) break;

}

document.querySelector('#out').innerHTML = out;