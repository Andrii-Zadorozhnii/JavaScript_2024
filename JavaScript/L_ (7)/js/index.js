let f1 = document.querySelector(".f-1");

function one() {
    console.log("work");
}

one();



// f1.onclick = one;

console.log(1 + one())

console.log(one()); // undefined

function two() {
    console.log(' work 2222');
    return 54;
}

two();

console.log(1 + two());


let a = 8;
let b = 9;
// let c;

function multi() {
    console.log(a * b);
    // c = a * b;
    return (a * b);
}

multi();

// console.log(c);

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2)

function multi2(x = 9, y = 5) {
    return x * y;
};

console.log(multi2(4, 5));
console.log(multi2(8, 12));
console.log(multi2(a, 7));
console.log(multi2());


// f1.onclick = function () {
//     console.log("hello")
// }

f1.onclick = () => {
    console.log("hello");
}