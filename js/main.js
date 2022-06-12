/*-------------------mainCon banner-------------------*/


/*-------------------mainCon banner-------------------*/
$('.slide_container').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed: 4000
});

$('.banner_slide .controls .next').click(function(e){
    e.preventDefault();
    $('.banner_slide .slide_container').slick('slickNext');
});
$('.banner_slide .controls .prev').click(function(e){
    e.preventDefault();
    $('.banner_slide .slide_container').slick('slickPrev');
});

$('.banner_slide .slide_container').on('afterChange', function(event, slick, currentSlide, nextSlide){ 
    $('.banner_slide .paging .currnet').text(currentSlide + 1);
  });


$('.banner_slide .btns').click(function(){
    $('.banner_slide .btns').toggleClass('active');
    if($('.banner_slide .btns').hasClass('active')){
        $('.banner_slide .slide_container').slick('slickPause');
    }else{
        $('.banner_slide .slide_container').slick('slickPlay');
    }
});


/*-------------------card_slide-------------------*/
$('.cardList .card_tap_wrapper').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});

$('.card_cont .controls .next').click(function(e){
    e.preventDefault();
    $('.card_slide .card_tap_wrapper').slick('slickNext');
});
$('.card_cont .controls .prev').click(function(e){
    e.preventDefault();
    $('.card_slide .card_tap_wrapper').slick('slickPrev');
});



$('.cardList .card_info_btn a:nth-child(2)').click(function(){
    $('.cardList .card_slide .controls').addClass('active');
})
$('.cardList .card_info_btn a:nth-child(2)').siblings().click(function(){
    $('.cardList .card_slide .controls').removeClass('active');
})

let cBtn = $('.card_slide .card_info_btn a');
let cList = $('.card_slide .card_cont');

cBtn.click(function(e){
    e.preventDefault();
    cBtn.removeClass('current');
    $(this).addClass('current');

    cList.hide();

    let targetClass = $(this).attr('data-filter');
    let targetList = $(targetClass);

    targetList.show();
});




/*-------------------benefit-------------------*/

  $('.benefit_slide .controls .next').click(function(e){
    e.preventDefault();
    $('.benefit_slide .slide_container').slick('slickNext');
});
$('.benefit_slide .controls .prev').click(function(e){
    e.preventDefault();
    $('.benefit_slide .slide_container').slick('slickPrev');
});

$('.benefit_slide .slide_container').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.benefit_slide .paging .currnet').text(currentSlide + 1);
  });

  $('.benefit_slide .paging .btns').click(function(){
    $('.benefit_slide .paging .btns').toggleClass('active');
    if($('.benefit_slide .paging .btns').hasClass('active')){
        $('.benefit_slide .slide_container').slick('slickPause');
    }else{
        $('.benefit_slide .slide_container').slick('slickPlay');
    }
});

/*-------------------ss_story-------------------*/

$('.ss_story .slide_container').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.ss_story .paging .currnet').text(currentSlide + 1);
  });
