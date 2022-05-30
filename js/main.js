/*-------------------mainCon banner-------------------*/
$('.slide_container').slick({
    arrows:false
});

$('.banner_slide .controls .next').click(function(e){
    e.preventDefault();
    $('.slide_container').slick('slickNext');
});
$('.banner_slide .controls .prev').click(function(e){
    e.preventDefault();
    $('.slide_container').slick('slickPrev');
});

/*-------------------card_slide-------------------*/
$('.card_tap_wrapper').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
});

$('.card_cont .controls .next').click(function(e){
    e.preventDefault();
    $('.card_tap_wrapper').slick('slickNext');
});
$('.card_cont .controls .prev').click(function(e){
    e.preventDefault();
    $('.card_tap_wrapper').slick('slickPrev');
});

$('.card_slide .card_info_btn a:nth-child(2)').click(function(){
    $('.card_slide .controls').addClass('active');
})
$('.card_slide .card_info_btn a:nth-child(2)').siblings().click(function(){
    $('.card_slide .controls').removeClass('active');
})

/*-------------------benefit-------------------*/

  $('.benefit_slide .controls .next').click(function(e){
    e.preventDefault();
    $('.slide_container').slick('slickNext');
});
$('.benefit_slide .controls .prev').click(function(e){
    e.preventDefault();
    $('.slide_container').slick('slickPrev');
});