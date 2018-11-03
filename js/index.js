$('.menu_btn').click(function(){
    $('header .menu_box').toggleClass('active');
});

$('.big_slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  
    fade: true,
    arrows: false,  
    asNavFor: '.nav_slider .slider',
});

$('.nav_slider .slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    // dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,  
    // arrows: false,  
    asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow up"><img src="img/arrow.png"></div>',
    nextArrow: '<div class="arrow down"><img src="img/arrow.png"></div>',

});
$('.repair_slider .slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    // dots: true,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 5000,  
    // arrows: false,  
    asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow up"><img src="img/arrow.png"></div>',
    nextArrow: '<div class="arrow down"><img src="img/arrow.png"></div>',

});

$('.reviews_slider .slider').slick({
    centerMode: true,
    centerPadding: '33.333%',
    slidesToShow: 1,
    focusOnSelect: true,
    // dots:true,
    prevArrow: '<div class="arrow left"><img src="img/right-arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="img/right-arrow.png"></div>',
})