
$(window).on('load', function () {
    //page loading
    $('body').addClass('is-loaded');   
    menuBurger();
    openMenusub();
    AOS.init();  
}); 

//Browser and OS defined class on body
$('body').addClass($.browser.platform)
$('body').addClass($.browser.name);
if(($.browser.desktop) == true) {
    $('body').removeClass('mobile').removeClass('ipad').addClass('desktop');
}
if(($.browser.mobile) == true) {
    $('body').removeClass('desktop').removeClass('ipad').addClass('mobile');
}
if(($.browser.ipad) == true) {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}
if((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad') {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}

// Site related functions
function menuBurger(){
  if($('.burger').length > 0){
      $('.burger').on('click', function(e){
          if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            $('ul').removeClass('is-active');
          }else{
            $(this).addClass('is-active');
            $('ul').addClass('is-active');
          }
      })
  }
}
