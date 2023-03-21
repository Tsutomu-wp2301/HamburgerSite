
// テキストエリアを同じ高さにする
$(function() {
  $('.p-content--wrapper').each(function(i, box) {
      let maxHeight = 0;
      $(box).find('.p-content__item').each(function() {
          if ($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $(box).find('.p-content__item').height(maxHeight);
  });
});