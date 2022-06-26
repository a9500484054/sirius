document.addEventListener('DOMContentLoaded', () => {

    const sliders = document.querySelectorAll('input[type="range"]');
    const numberFrom = document.querySelector('.range__number-from');
    const numberTo = document.querySelector('.range__number-to');


    sliders[0].addEventListener('input', (e) => {
        if(+sliders[0].value > +sliders[1].value){
            sliders[1].value = +sliders[0].value;
        }
    });

    sliders[1].addEventListener('input', (e) => {
        if(+sliders[1].value < +sliders[0].value){
            sliders[0].value = +sliders[1].value;
        }
    });

    sliders.forEach((slider) => {
        slider.addEventListener('change', () => {
            numberFrom.innerHTML = sliders[0].value
            numberTo.innerHTML = sliders[1].value
        })
    }); 


    const aside = document.querySelector('.aside');
    const asideClose = document.querySelector('.aside__close');
    const boxShadow = document.querySelector('.box-shadow');
    const filterBtn = document.querySelector('.filter-btn');
    
    filterBtn.addEventListener('click',() => {
        aside.classList.add('aside--active')
        boxShadow.classList.add('box-shadow--active')
    })
    asideClose.addEventListener('click',() => {
        aside.classList.remove('aside--active')
        boxShadow.classList.remove('box-shadow--active')
    })
    
    const categoryItem = document.querySelectorAll('.category__item')
    const categoryBtnOpen = document.querySelector('.category__btn--open')
    const categoryBtnClose = document.querySelector('.category__btn--close')

    for (let key in categoryItem) {
        if(key > 6) {
            console.log(categoryItem[key])
            categoryItem[key].style.display = 'none'
        }
    }
    
    categoryBtnOpen.addEventListener('click',() => {
        categoryBtnOpen.style.display = 'none'
        categoryBtnClose.style.display = 'block'
        categoryItem.forEach((item) => {
            item.style.display = 'flex'
        })
    })

    categoryBtnClose.addEventListener('click',() => {
        categoryBtnOpen.style.display = 'block'
        categoryBtnClose.style.display = 'none'
        for (let key in categoryItem) {
            if(key > 6) {
                console.log(categoryItem[key])
                categoryItem[key].style.display = 'none'
            }
        }
    })




});

