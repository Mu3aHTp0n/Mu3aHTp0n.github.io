// toggle - удалить класс при клике, если он есть у элемента

// let block = document.querySelector('.block__title');
// block.addEventListener('click', ()=> {
//     if(block.classList.contains('active')) {
//         block.classList.remove('active')
//         block.next().slideToggle(300);
//     }
//     else {
//         block.classList.add('active')
//     }
// })

const sliders = document.querySelectorAll('.block__title');
let burger = document.querySelector('.menu-btn');

// Только один класс active
sliders.forEach(slider => {
    slider.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        slider.classList.add('active');
    });
});

//Мое любимое, теперь toggle <3
burger.addEventListener('click', ()=> {
    burger.classList.toggle("active")    
})

//