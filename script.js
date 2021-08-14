

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');

let count = 0;//ссылается на активный слайдер
let width;//ширина

function init() {//расчет ширины и изменение слайдера
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;//узнаем ширину слайдера
    sliderLine.style.width = width * images.length + 'px';//расчет ширины sliderLine

    images.forEach(item => {//делаем все изоображения шириной слайдера
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);// запуск функции init при изменение ширины окна

document.querySelector('.btn-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
