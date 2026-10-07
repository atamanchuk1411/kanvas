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
let widthFixed, heightFixed

function chooseSize(width, height) {
    canvas.style.width = width * 3 + "px";
    canvas.style.height = height * 3 + "px";
    price = Math.floor(width * height * 0.1);
}

size1.addEventListener("click", function () {
    widthFixed = 30;
    heightFixed = 30;
})

size2.addEventListener("click", function () {
    widthFixed = 30;
    heightFixed = 90;
})

size3.addEventListener("click", function () {
    widthFixed = 90;
    heightFixed = 120;
})

size4.addEventListener("click", function () {
    widthFixed = 90;
    heightFixed = 150;
})

choose.addEventListener("click", function () {
    chooseSize(widthFixed, heightFixed)
    total.textContent = +(total.textContent) + price;
});

calculate.addEventListener("click", function () {
    try {
        if(+(width.value) > 200 || +(height.value) > 180) {
            throw "Ширина має бути не більше 200, а висота не більше 180";
        }
        if(width.value === "" || height.value === "") {
            throw "Введіть число";
        }
        if(+(width.value) < 10 || +(height.value) < 10) {
            throw "Ширина і висота не може бути менше 10";
        }
    } catch (err) {
        alert(err);
        return;
    }
    chooseSize(+(width.value), +(height.value));
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