
//   программирую табы
const tabItem  = document.querySelectorAll('.tabs-btn-item');
const tabContent  = document.querySelectorAll('.tabs-content-item');

tabItem .forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt) {
    // отслеживаю активный таб с помощью  currentTarget
    const tabTarget=evt.currentTarget;

    const button = tabTarget.dataset.button;


    tabItem.forEach(function(item){
        item.classList.remove('tabs-btn-item--active');

    });
    tabTarget.classList.add('tabs-btn-item--active');



    tabContent.forEach(function(item){
        item.classList.remove('tabs-content-item-active');
    });


    document.querySelector(`#${button}`).classList.add('tabs-content-item-active');
}



// делаю мобильную версию меню
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu-list');

menuBtn.addEventListener('click',() =>{
    menu.classList.toggle('menu-list--active')
});





// делаю слайдер
const  swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
