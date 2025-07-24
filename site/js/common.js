/*스크롤 효과*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }
});

 $(document).ready(function(){
    /*aside 메뉴리스트*/
    var asideOpenBtn = $('.menu-navi'),
        aside = $('aside'),
        asideCloseBtn = aside.find('.close-btn');

        asideOpenBtn.click(function(){
        aside.animate({left:0}, 300);
    });
        asideCloseBtn.click(function(){
        aside.animate({left:'-100%'}, 300);
    });
    /*로고 누르면 맨위로ㄱㄱ*/
    $('#logo').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('#pclogo').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    });
});
