var popup = document.querySelector ('.popup')
var overLay = document.querySelector ('.popup__overlay')
var popupOpenBtn = document.querySelector ('.slider-offer__button')
var popupCloseBtn = popup.querySelector ('.popup__close-button')
var input = popup.querySelector ('input')


popupOpenBtn.addEventListener ('click', function(){
    popup.classList.add('open');
    overLay.classList.add('show');
    input.focus()
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            popup.classList.remove('open');
            overLay.classList.remove('show');
        }
    })
})
popupCloseBtn.addEventListener('click', function(){
    popup.classList.remove('open');
    overLay.classList.remove('show');
})

