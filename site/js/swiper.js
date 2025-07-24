/*쿠폰 닫는거*/
function closeBanner(event){
    event.stopPropagation();
    const wrapper=event.target.closest('.coupon-banner');
    wrapper.style.visibility='hidden';
  }

$(document).ready(function(){
    /*이미지스와이퍼*/
    var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    effect:'fade',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
  },
    autoplay:{
      delay: 1000,
      disableOnInteraction: false  }
  });
  
});





