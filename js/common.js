/*-------------------Header-------------------*/

$('header .search').click(function(){
    $('.search_section').addClass('active');
    $('body').css({overflow:'hidden'});
});
$('.close_btn').click(function(){
    $('.search_section').removeClass('active');
    $('body').css({overflow:'auto'});
});

let mainMenu = $('nav > ul > li'),
    header = $('header'),
    headerHeight = header.outerHeight();

    mainMenu.each(function(){
        $(this).mouseover(function(){
            if($(window).width()>500){
                let subMenuHeight = $(this).find('ul').outerHeight();
                let totalHeight = subMenuHeight + headerHeight;
                header.css({height:`${totalHeight}px`});
            }
        });
        $(this).mouseout(function(){
            if($(window).width()>500){
                header.css({height:`${headerHeight}px`});
            }
           
        });
    });

    
//모바일 메뉴 

let mobileMenuOpen = $('.mobile_menu-toggle'),
    mobileMenu = header.find('nav'),
    mobileMenuClose = $('.mobile_menu_close');

mobileMenuOpen.click(function(){
    mobileMenu.addClass('active');
    $('body').css({overflow:'hidden'});
});
mobileMenuClose.click(function(){
    mobileMenu.removeClass('active');
    $('body').css({overflow:'auto'});
});

if($(window).width() < 770){
    $(function(){
        $( "#accordion" ).accordion({
          collapsible: true
        });
    });
}

  
