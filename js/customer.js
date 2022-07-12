

/*-------------------QNA-------------------*/
let keywordBtnQna = $('.qna .search_list a'),
    inputQna = $('.qna .search_cell input');

    keywordBtnQna.click(function(e){
        e.preventDefault();
        keyword = $(this).text();
        inputQna.val(keyword);
    });