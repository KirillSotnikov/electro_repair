var windowWidth = $(window).width();

if (windowWidth <= 1265) {
    $('.menu_box').removeClass('active');
    $('.menu_btn').click(function(){
        $('.menu').toggleClass('active');
    })
} else {
    $('.menu_btn').click(function(){
        $('header .menu_box').toggleClass('active');
    });
}
// --------------------------------------------
$('.modal_menu_btn').click(function(){
    $('.modal_menu_box').addClass('active');
});
$('.modal_menu_box_closer').click(function(){
    $('.modal_menu_box').removeClass('active');
});
// --------------------------------------------
$('.big_slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  
    fade: true,
    arrows: false,  
    asNavFor: '.nav_slider .slider',
});
// --------------------------------------------
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
// --------------------------------------------
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
// --------------------------------------------
$('.reviews_slider .slider').slick({
    centerMode: true,
    centerPadding: '33.333%',
    slidesToShow: 1,
    focusOnSelect: true,
    // dots:true,
    prevArrow: '<div class="arrow left"><img src="img/right-arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="img/right-arrow.png"></div>',
    responsive: [
        {
          breakpoint: 851,
          settings: {
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
});
// --------------------------------------------
$('.modal_opener').click(function(){
    $('.modal').addClass('active');
});
$('.modal_closer').click(function(){
    $('.modal').removeClass('active');
});
$('.modal_btn').click(function(){
    $('.modal').removeClass('active');
});
// --------------------------------------------
