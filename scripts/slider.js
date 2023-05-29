let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');

let textBlock = document.querySelectorAll('.bigNews__text'); //массив текстов
let titleBlock = document.querySelectorAll('.bigNews__title-text'); //массив заголовков

element = 0; //для индекса массива текстов и заголовков

let buttonShowing = document.querySelectorAll('.bigNews__title-button'); //массив кнопок

buttonRight.addEventListener('click',()=>{

    if (element >= 0 && element < textBlock.length-1) { //проверка чтобы не выйти за пределы
        textBlock[element].classList.add('bigNews__text-hidden');
        textBlock[element+1].classList.remove('bigNews__text-hidden');

        titleBlock[element].classList.add('bigNews__title-textHidden');
        titleBlock[element+1].classList.remove('bigNews__title-textHidden');

        element++;
    }

    //отображение кнопок
    if (element !== 0) buttonShowing[0].classList.remove('bigNews__title-buttonHidden');
    else buttonShowing[0].classList.add('bigNews__title-buttonHidden');
    if (element === textBlock.length-1) buttonShowing[1].classList.add('bigNews__title-buttonHidden');
    else buttonShowing[1].classList.remove('bigNews__title-buttonHidden');
});

buttonLeft.addEventListener('click',()=>{

    if (element > 0 && element < textBlock.length) {
        textBlock[element].classList.add('bigNews__text-hidden');
        textBlock[element-1].classList.remove('bigNews__text-hidden');

        titleBlock[element].classList.add('bigNews__title-textHidden');
        titleBlock[element-1].classList.remove('bigNews__title-textHidden');

        element--;
    }

    if (element !== 0) buttonShowing[0].classList.remove('bigNews__title-buttonHidden');
    else buttonShowing[0].classList.add('bigNews__title-buttonHidden');
    if (element === textBlock.length-1) buttonShowing[1].classList.add('bigNews__title-buttonHidden');
    else buttonShowing[1].classList.remove('bigNews__title-buttonHidden');
});
