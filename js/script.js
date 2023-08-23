
// header slider

const details = document.querySelectorAll('.details .detail');
const images = document.querySelectorAll('.background img');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let imagIndex = 0

function prevSlide(){
    imagIndex--;
    imagIndex = imagIndex < 0 ? images.length -1 : imagIndex;

    document.querySelector('.background img.active').classList.remove('active');
    images[imagIndex].classList.add('active');

    document.querySelector('.details .detail.active ').classList.remove('active');
    details[imagIndex].classList.add('active');
}

function NextSlide(){
    imagIndex++;
    imagIndex = imagIndex > images.length -1 ? 0 : imagIndex;

    document.querySelector('.background img.active').classList.remove('active');
    images[imagIndex].classList.add('active');

    document.querySelector('.details .detail.active ').classList.remove('active');
    details[imagIndex].classList.add('active');
}

setInterval(NextSlide , 5000);

arrowLeft.addEventListener('click',prevSlide);
arrowRight.addEventListener('click',NextSlide);