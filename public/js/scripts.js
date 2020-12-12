$(function() {

    let offset = $('.sticky-menu').offset().top

    $(window).scroll(function(){
        let y = $(this).scrollTop();
        if(y >= offset) {
            $('.sticky-menu').addClass('slide-in-top'); 
        } else  {
            $('.sticky-menu').removeClass('slide-in-top');
        }
            
    });


});