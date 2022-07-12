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
            if($(window).width()>770){
                let subMenuHeight = $(this).find('ul').outerHeight();
                let totalHeight = subMenuHeight + headerHeight;
                header.css({height:`${totalHeight}px`});
            }
        });
        $(this).mouseout(function(){
            if($(window).width()>770){
                header.css({height:`${headerHeight}px`});
            }
           
        });
    });

    
/*-------------------mobile-------------------*/

let mobileMenuOpen = $('.mobile_menu-toggle'),
    mobileMenu = header.find('nav'),
    mobileMenuClose = $('.mobile_menu_close');

let subMenu = mainMenu.find('.sub_menu');

mobileMenuOpen.click(function(){
    mobileMenu.addClass('active');
    $('body').css({overflow:'hidden'});
});
mobileMenuClose.click(function(){
    mobileMenu.removeClass('active');
    $('body').css({overflow:'auto'});
});



    
    mainMenu.find('> a').click(function(e){
        if($(window).width() < 770){
            e.preventDefault();
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.sub_menu').slideUp();
            $(this).toggleClass('active');
            $(this).parent().siblings().find('> a').removeClass('active');
        }
    });

/*-------------------search_section-------------------*/

let keywordBtn = $('.search_section .search_list a'),
    input = $('.search_section .input_cell input');

    keywordBtn.click(function(e){
        e.preventDefault();
        keyword = $(this).text();
        input.val(keyword);
    });
    