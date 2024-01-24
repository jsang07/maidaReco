let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

document.getElementById('prev').addEventListener('click', function () {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) newSlide = slides.length - 1;
    showSlide(newSlide);
});

document.getElementById('next').addEventListener('click', function () {
    let newSlide = currentSlide + 1;
    if (newSlide >= slides.length) newSlide = 0;
    showSlide(newSlide);
});

let currentProgress = 0;

function upProgress() {
    const progressBar = document.getElementById('progress');
    currentProgress += 25;
    if (currentProgress > 100) currentProgress = 100;
    progressBar.style.width = currentProgress + '%';
}

function downProgress() {
    const progressBar = document.getElementById('progress');
    if (currentProgress > 0) currentProgress -= 25;
    if (currentProgress > 100) currentProgress = 100;
    progressBar.style.width = currentProgress + '%';
}

const iconbuttons = document.querySelectorAll('.icon-button');

iconbuttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.style.backgroundColor === '#006eff') {
            this.style.color = 'white'
            this.style.backgroundColor = 'rgb(236, 236, 236)';
        } else {
            iconbuttons.forEach(btn => btn.style.backgroundColor = 'rgb(236, 236, 236)');
            this.style.color = 'black'
            this.style.backgroundColor = '#006eff';
        }
    });
});

const textbuttons = document.querySelectorAll('.text-button');

textbuttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.style.backgroundColor === '#006eff') {
            this.style.color = 'white'
            this.style.backgroundColor = 'rgb(236, 236, 236)';
        } else {
            textbuttons.forEach(btn => btn.style.backgroundColor = 'rgb(236, 236, 236)');
            this.style.color = 'black'
            this.style.backgroundColor = '#006eff';
        }
    });
});

const textbuttons2 = document.querySelectorAll('.text-button2');

textbuttons2.forEach(button => {
    button.addEventListener('click', function () {
        if (this.style.backgroundColor === '#006eff') {
            this.style.color = 'white'
            this.style.backgroundColor = 'rgb(236, 236, 236)';
        } else {
            textbuttons2.forEach(btn => btn.style.backgroundColor = 'rgb(236, 236, 236)');
            this.style.color = 'black'
            this.style.backgroundColor = '#006eff';
        }
    });
});