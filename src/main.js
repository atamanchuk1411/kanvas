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
const pad = document.querySelector("#pad");
const custom = document.querySelector("#custom");
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
    total.textContent = price;
    if (extra1.checked) {
       total.textContent = +(total.textContent) + +(extra1.value);
    }
    if (extra2.checked) {
       total.textContent = +(total.textContent) + +(extra2.value);
    }
    if (extra3.checked) {
       total.textContent = +(total.textContent) + +(extra3.value);
    }
}

size1.addEventListener("click", function () {
    if (size2.classList.contains('checked')) {
        size2.classList.remove('checked')
    }
    if (size3.classList.contains('checked')) {
        size3.classList.remove('checked')
    }
    if (size4.classList.contains('checked')) {
        size4.classList.remove('checked')
    }
    size1.classList.add('checked')
    chooseSize(30, 30)
})

size2.addEventListener("click", function () {
    if (size1.classList.contains('checked')) {
        size1.classList.remove('checked')
    }
    if (size3.classList.contains('checked')) {
        size3.classList.remove('checked')
    }
    if (size4.classList.contains('checked')) {
        size4.classList.remove('checked')
    }
    size2.classList.add('checked')
    chooseSize(30, 90)
})

size3.addEventListener("click", function () {
    if (size2.classList.contains('checked')) {
        size2.classList.remove('checked')
    }
    if (size1.classList.contains('checked')) {
        size1.classList.remove('checked')
    }
    if (size4.classList.contains('checked')) {
        size4.classList.remove('checked')
    }
    size3.classList.add('checked')
    chooseSize(90, 120)
})

size4.addEventListener("click", function () {
    if (size2.classList.contains('checked')) {
        size2.classList.remove('checked')
    }
    if (size3.classList.contains('checked')) {
        size3.classList.remove('checked')
    }
    if (size1.classList.contains('checked')) {
        size1.classList.remove('checked')
    }
    size4.classList.add('checked')
    chooseSize(90, 150)
})

choose.addEventListener("click", function () {
    if (custom.classList.contains("hidden")) {
        custom.classList.remove("hidden");
        pad.classList.remove("extraPad");
        choose.textContent = "ПРИХОВАТИ";
    } else {
        custom.classList.add("hidden");
        pad.classList.add("extraPad");
        choose.textContent = "ЗАДАТИ РОЗМІР";
    }
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
    if (size1.classList.contains('checked')) {
        size1.classList.remove('checked')
    }
    if (size2.classList.contains('checked')) {
        size2.classList.remove('checked')
    }
    if (size3.classList.contains('checked')) {
        size3.classList.remove('checked')
    }
    if (size4.classList.contains('checked')) {
        size4.classList.remove('checked')
    }
    chooseSize(+(width.value), +(height.value));
});

extra1.addEventListener("change", function () {
    if (extra1.checked) {
        total.textContent = +(total.textContent) + +(extra1.value);
    } else {
        total.textContent = +(total.textContent) - +(extra1.value);
    }
});

extra2.addEventListener("change", function () {
    if (extra2.checked) {
        total.textContent = +(total.textContent) + +(extra2.value);
    } else {
        total.textContent = +(total.textContent) - +(extra2.value);
    }
});

extra3.addEventListener("change", function () {
    if (extra3.checked) {
        total.textContent = +(total.textContent) + +(extra3.value);
    } else {
        total.textContent = +(total.textContent) - +(extra3.value);
    }
});