for (let i = 0; i < 6; i++) {
    console.log(i);
};

let k = 0;
while (k < 5) {
    console.log('k: ' + k);
    // if (k==3) continue; 
    k++;
}

// 0 +...+10

let sum = 0;
let p = 0;
while (p < 10) {
    sum = sum + p;
    p++;

}
console.log(`sum = ${+sum}`);

// ****
// ****
// ****
let out = document.querySelector('.out');

let c = 0;
let outStr = " ";
let flag = 3;


while (c < 4) {
    let p1 = 0
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += "0";
        } else {
            outStr += "*";
        }

        p1++;
    }
    flag--;
    outStr += "<br> ";
    c++;
}

out.innerHTML = outStr;