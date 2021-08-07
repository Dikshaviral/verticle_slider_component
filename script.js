const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const up = document.querySelector('.up-button');
const down = document.querySelector('.down-button');
const slideslen = slideRight.querySelectorAll('div').length;

let active = 0;

slideLeft.style.top = `-${(slideslen - 1) * 100}vh`;

up.addEventListener('click', ()=> changeSlide('up'));
down.addEventListener('click', ()=> changeSlide('down'));



const changeSlide = (direction) =>
{
    const sliderHeight = sliderContainer.clientHeight;
    if(direction == 'up')
    {
        active++;
        if(active>slideslen-1)
        {
            active =0
        }
    }
    if(direction == 'down')
    {
        active--;
        if(active<0)
        {
            active =slideslen-1;
        }
    }

    slideRight.style.transform = `translateY(-${active*sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${active*sliderHeight}px)`;

    

}