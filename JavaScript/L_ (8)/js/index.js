let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');

for (let i = 0; i < 5; i++) {

    for (let k = 0; k < 5; k++) {
        out.innerHTML += "*";
    }
    out.innerHTML += " ";
}


for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
        out2.innerHTML += k;
    }
    out2.innerHTML += "<br>";
}

for (let i = 0; i < 10; i++) {
    // out3.innerHTML += "3*" + i + "=" + (i * 3) + "<br>";
    // out3.innerHTML += `3*${i}=${3*i}<br>`;

    for (let k = 1; k < 10; k++) {
        out3.innerHTML += `${i}*${k}=${i*k}<br> `;
    }
    out3.innerHTML += " <hr>";
};