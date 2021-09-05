//calling glider.js functions
window.addEventListener('load', function(){
    //pointing to carousel__lista
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
        slidesToScroll: 4,
        draggable: 'true',
        dots: '.carousel__indicadores'
    });
})