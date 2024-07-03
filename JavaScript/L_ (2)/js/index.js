let a = 15;



// if (a > 9) {
//     // true 
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// if (a < 9) {
//     // true 
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// if (a == 9) {
//     // true 
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// if (a != 9) {
//     // true 
//     console.log('Yes');
// } else {
//     console.log('No');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');


// () => arrow function 

button.onclick = () => {
    let num = +input.value;
    console.log(num);

    if (num >= 16 && num <= 60) {
        console.log("Welcome");
        input.value = "";
    } else if (num > 60 && num <= 100) {
        console.log("Are you sure ??");
        input.value = "";
    } else if (num > 100) {
        console.log("Very funny");
        input.value = "";
    } else {
        console.log('You cannot come...');
        input.value = "";
    }
}


switch (a) {
    case 15:
        console.log(" one more year need to wait");
        break;
    case 16:
        console.log("You can come");
        break;
    default:
        console.log('oooookkk')
}

// && and , || or

let b = 5;
console.log(b == 7)
console.log(b != 7)
console.log(b > 7)
console.log(b < 7)