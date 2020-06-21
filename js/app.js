let countDownDate = new Date("Dec 17, 2020 24:00:00").getTime();


let timer = function () {
    let today = new Date().getTime();
    let distance = countDownDate - today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let documentCountDown = document.querySelector('.countdown');

    documentCountDown.innerHTML = `${days} <span style="color: #878787;">Días</span> ${hours} <span style="color: #878787;">Horas</span> ${minutes} <span style="color: #878787;">Minutos</span> ${seconds} <span style="color: #878787;">Segundos</span>`;

    if (distance < 0) {
        clearInterval(aniversario);
        documentCountDown.innerHTML = "ERR";
    }
}

timer();

let aniversario = setInterval(function () {
    timer();
}, 1000);


var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

