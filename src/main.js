import './assets/styles/style.sass'
let price
const canvas = document.querySelector("#white");
const size1 = document.querySelector("#size1");
const size2 = document.querySelector("#size2");
const size3 = document.querySelector("#size3");
const size4 = document.querySelector("#size4");
const choose = document.querySelector("#choose");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const extra1 = document.querySelector("#extra1");
const extra2 = document.querySelector("#extra2");
const extra3 = document.querySelector("#extra3");
const total = document.querySelector("#total");

function chooseSize(width, height) {
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    price = width * height * 0.1;
}

size1.addEventListener("click", function () {
    chooseSize(90, 90);
})

size2.addEventListener("click", function () {
    chooseSize(90, 270);
})

size3.addEventListener("click", function () {
    chooseSize(270, 360);
})

size4.addEventListener("click", function () {
    chooseSize(270, 450);
})

choose.addEventListener("click", function () {
    total.textContent = +(total.textContent) + price;
});

calculate.addEventListener("click", function () {
    chooseSize(+(width.value * 3), +(height.value * 3));
    price = Math.floor(+(width.value) * +(height.value) * 0.1);
    total.textContent = +(total.textContent) + price;
});

extra1.addEventListener("change", function () {
    if (extra1.checked) {
        total.textContent = +(total.textContent) + +(extra1.value);
    } else {
        total.textContent = +(total.textContent) - +(extra1.value);
    }
});

extra2.addEventListener("change", function () {
    if (extra1.checked) {
        total.textContent = +(total.textContent) + +(extra2.value);
    } else {
        total.textContent = +(total.textContent) - +(extra2.value);
    }
});

extra3.addEventListener("change", function () {
    if (extra1.checked) {
        total.textContent = +(total.textContent) + +(extra3.value);
    } else {
        total.textContent = +(total.textContent) - +(extra3.value);
    }
});