/*-------------------Header-------------------*/

$('header .search').click(function(){
    $('.search_section').addClass('active');
    $('body').css({overflow:'hidden'});
});
$('.close_btn').click(function(){
    $('.search_section').removeClass('active');
    $('body').css({overflow:'auto'});
});

/*-------------------QNA-------------------*/
let keywordBtn = $('.qna .search_list a'),
    input = $('.qna .search_input input');

    keywordBtn.click(function(e){
        e.preventDefault();
        keyword = $(this).text();
        input.val(keyword);
    });