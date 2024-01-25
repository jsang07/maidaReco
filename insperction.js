let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
    updateButtonStatus();
}

function updateButtonStatus() {
    if (currentSlide === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentSlide === slides.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

prevButton.addEventListener('click', function () {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) newSlide = slides.length - 1;
    showSlide(newSlide);
});

nextButton.addEventListener('click', function () {
    let newSlide = currentSlide + 1;
    if (newSlide >= slides.length) newSlide = 0;
    showSlide(newSlide);
});

updateButtonStatus();

// let currentProgress = 0;

// function upProgress() {
//     const progressBar = document.getElementById('progress');
//     currentProgress += 25;
//     if (currentProgress > 100) currentProgress = 100;
//     progressBar.style.width = currentProgress + '%';
// }

// function downProgress() {
//     const progressBar = document.getElementById('progress');
//     if (currentProgress > 0) currentProgress -= 25;
//     if (currentProgress > 100) currentProgress = 100;
//     progressBar.style.width = currentProgress + '%';
// }

var currentProgress = 0;
var progressElement = document.querySelector('.progress');
var progressTextElement = document.querySelector('.progress-text');

function upProgress() {
    const progressBar = document.getElementById('progress');
    currentProgress += 25;
    progressTextElement.textContent = currentProgress + '%';
    if (currentProgress > 100) currentProgress = 100;
    progressBar.style.width = currentProgress + '%';
}

function downProgress() {
    const progressBar = document.getElementById('progress');
    if (currentProgress > 0) {
        currentProgress -= 25;
        progressTextElement.textContent = currentProgress + '%';
    }
    if (currentProgress > 100) currentProgress = 100;
    progressBar.style.width = currentProgress + '%';
}



const iconbuttons = document.querySelectorAll('.icon-button');

iconbuttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});

const textbuttons = document.querySelectorAll('.text-button');

textbuttons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});

const textbuttons2 = document.querySelectorAll('.text-button2');

textbuttons2.forEach(button => {
    button.addEventListener('click', function () {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }
    });
});