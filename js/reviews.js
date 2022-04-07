const sliderContainer = document.querySelector('#sliderContainer');

const firstSlide = document.querySelector('#firstSlide');
const secondSlide = document.querySelector('#secondSlide');
const thirdSlide = document.querySelector('#thirdSlide');

const pagerOne = document.querySelector('#pagerOne');
const pagerTwo = document.querySelector('#pagerTwo');
const pagerThree = document.querySelector('#pagerThree');

const closeAllSlides = function(){
    firstSlide.classList.remove('reviews__item--active');
    secondSlide.classList.remove('reviews__item--active');
    thirdSlide.classList.remove('reviews__item--active');
    pagerOne.classList.remove('pager__item--active');
    pagerTwo.classList.remove('pager__item--active');
    pagerThree.classList.remove('pager__item--active');
};

pagerOne.addEventListener('click', e => {
    e.preventDefault();
    closeAllSlides();
    firstSlide.classList.add('reviews__item--active');
    pagerOne.classList.add('pager__item--active');
});

pagerTwo.addEventListener('click', e => {
    e.preventDefault();
    closeAllSlides();
    secondSlide.classList.add('reviews__item--active');
    pagerTwo.classList.add('pager__item--active');
});

pagerThree.addEventListener('click', e =>{
    e.preventDefault();
    closeAllSlides();
    thirdSlide.classList.add('reviews__item--active');
    pagerThree.classList.add('pager__item--active');
});

