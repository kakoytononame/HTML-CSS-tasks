var portfolioImages = document.querySelectorAll('.portfolio-slider__images img');

portfolioImages.forEach(function(image) {
    image.addEventListener('click', function(event) {
        setBigImage(event);
    });
});

var modal = document.querySelector('.allScreen');

    var openModal = function() {
        modal.classList.add('is-open');
    }
    
    var closeModal = function() {
     modal.classList.remove('is-open');
    }

SetOpenModalSettings();

function setBigImage(event){
    const clickedElementImg = event.target.src;
    let bigImage = document.querySelector('.portfolio-slider_bigimage img');
    bigImage.width = "818";
    bigImage.height = "695";
    event.target.src = bigImage.src;
    bigImage.src = clickedElementImg;
}

function SetOpenModalSettings(){
    
    var closeButton = document.querySelector('.close');
    
    var modalTriggers = document.querySelectorAll('[data-trigger]');
    
    document.querySelector('#callUsButton').addEventListener('click', openModal);
    
    closeButton.addEventListener('click', closeModal);

    document.querySelector('.send').addEventListener('click', sendQuery);
}

function isEmpty(str) {
    return !str.trim().length;
}

function isANumber(str){
    return !/\D/.test(str);
}

function isAString(str){
    return !/^\d+$/.test(str);
}



function sendQuery(){
    var name = document.querySelector('.name_field').value;
    var phone = document.querySelector('.phone_field').value;
    
    if (isEmpty(name) || isEmpty(phone)) {
        alert("Поля не могут быть пустыми.");
    }
    else{

        if (isANumber(name)) {
            alert("Имя не может содержать цифры");
            return;
        }

        if(isAString(phone)){
            alert("Телефон не может содержать буквы");
            return;
        }

        closeModal();
    }
}



