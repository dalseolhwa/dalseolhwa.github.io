/*-------------------Header-------------------*/

$('header .search').click(function(){
    $('.search_section').addClass('active');
    $('body').css({overflow:'hidden'});
});
$('.close_btn').click(function(){
    $('.search_section').removeClass('active');
    $('body').css({overflow:'auto'});
});

/* 

대상.offsetHeight 대상의 높이 반환

let mainMenu = document.querySelectorAll('nav > ul > li'),
		header = document.querySelector('header'),
		headerHeight = header.offsetHeight;

mainMenu.forEach(function(item){
		item.addEventListener('mouseover', function(){
			let subMenuHeight = this.querySelector('ul').offsetHeight;
			let totalHeight = subMenuHeight + headerHeight;
			header.style.height = `${totalHeight}px`;
		});
		item.addEventListener('mouseout', function(){
			header.style.height = `${headerHeight}px`;
		});	
});

	메인메뉴에 마우스를 올리면 
	마우스올라간 그 메뉴의 하위 메뉴의 높이를 변수명 subMenuHeight	

*/

let mainMenu = $('nav > ul > li'),
    header = $('header'),
    headerHeight = header.outerHeight();

    mainMenu.each(function(){
    $(this).mouseover(function(){
        let subMenuHeight = $(this).find('ul').outerHeight();
		let totalHeight = subMenuHeight + headerHeight;
        header.css({height:`${totalHeight}px`});
    });
    $(this).mouseout(function(){
        header.css({height:`${headerHeight}px`});
    });
    });



/*-------------------POPUP------------------------- */

let popup = document.querySelector('.popup');
let popupCheck = document.querySelector('#popupC');
let popupClose = document.querySelector('#close');
 
//쿠키 생성 함수
function setCookie(name,value,day){
    let date = new Date();
    date.setDate(date.getDate() + day);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}

//쿠키 확인 함수
function getCookie(name){
    let visited = false;
    let cookies = document.cookie.split(';'); //문자열 ; 구분해서 배열 생성

    for(let cookie of cookies){
        if(cookie.indexOf(name) > -1){
            visited = true;
        }
    }
    if(visited){
        popup.style.display = 'none'; 
    }else{
        popup.style.display = 'block'; 
    }
}
getCookie('sscard');

//쿠키 삭제 함수
function delCookie(name,value){            

    let date = new Date();
    date.setDate(date.getDate() - 1);

    let cookieContent = '';
    cookieContent += `${name}=${value};`;
    cookieContent += `Expires=${date.toUTCString()}`;            

    document.cookie = cookieContent;
}   

popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none';
    if(popupCheck.checked){ //체크되었다면, 팝업을 다시 안보겠다, 쿠키생성
        setCookie('sscard','MainPage',1);
    }else{//체크x, 팝업을 다시 보겠다, 쿠키제거
        delCookie('sscard','MainPage');
    }
});

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
