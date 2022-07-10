

/*-------------------QNA-------------------*/
let keywordBtn = $('.qna .search_list a'),
    input = $('.qna .search_input input');

    keywordBtn.click(function(e){
        e.preventDefault();
        keyword = $(this).text();
        input.val(keyword);
    });