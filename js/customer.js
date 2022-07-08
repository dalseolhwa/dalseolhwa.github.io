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
        let subMenuHeight = $(this).find('ul').outerHeight();
		let totalHeight = subMenuHeight + headerHeight;
        header.css({height:`${totalHeight}px`});
    });
    $(this).mouseout(function(){
        header.css({height:`${headerHeight}px`});
    });
    });

/*-------------------QNA-------------------*/
let keywordBtn = $('.qna .search_list a'),
    input = $('.qna .search_input input');

    keywordBtn.click(function(e){
        e.preventDefault();
        keyword = $(this).text();
        input.val(keyword);
    });