var galleryImages = document.querySelectorAll('.gallery_images img');

galleryImages.forEach(function(image) {
    image.addEventListener('click', function(event) {
        openModalImage(event);
    });
});

var modal = document.querySelector('.allScreen');

var openModal = function() {
    modal.classList.add('is-open');
}
    
var closeModal = function() {
    modal.classList.remove('is-open');
}

var modalImage = document.querySelector('.allScreenImage');

var openModalImage = function(event) {
    modalImage.classList.add('is-open');
    SetGalleryBigImage(event);
}
    
var closeModalImage = function() {
    modalImage.classList.remove('is-open');
}

SetOpenModalRegisterSettings();

SetOpenModalImageSettings()

function SetOpenModalRegisterSettings(){
    
    var closeButton = document.querySelector('.close');
    
    document.querySelector('#registration').addEventListener('click', openModal);
    
    closeButton.addEventListener('click', closeModal);

    document.querySelector('.send').addEventListener('click', closeModal);
}

function SetOpenModalImageSettings(){
    
    var closeButton = document.querySelector('.closeImage');
    
    closeButton.addEventListener('click', closeModalImage);

}

function SetGalleryBigImage(event){
    const clickedElementImg = event.target.src;
    document.querySelector('#galleryBigImage').src = clickedElementImg;
}


