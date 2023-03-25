// サイドメニューの高さをc-flexに合わせる

$(function() {
  $(window).on('resize', function() {
    $('.js-height').matchHeight();
  }).trigger('resize');
});