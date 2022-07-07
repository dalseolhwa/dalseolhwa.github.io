/*-------------------Header-------------------*/

$('header .search').click(function(){
    $('.search_section').addClass('active');
    $('body').css({overflow:'hidden'});
});
$('.close_btn').click(function(){
    $('.search_section').removeClass('active');
    $('body').css({overflow:'auto'});
});

/*-------------------gamezone-------------------*/

/*
var image = $('img').httr('src'); //값을 반환, image변수에 저장

        대상.attr('src','image.jpg');  //값을 변경

*/ 

let img = $('.qr_wrap img'),
    imgSrc = img.attr('src');

img.click(function(){
    if($(this).attr('src') == 'images/img_qr.png'){
        $(this).attr('src','images/img_qr 1@2x.png')
    }else{
        $(this).attr('src','images/img_qr.png')
    }
    
});