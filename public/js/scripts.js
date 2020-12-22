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
    

    let textBox = $('.text-read-more');
    let readMoreBtn = $('.read-more-btn');

    $('.read-more-btn').click(function(){
        textBox.toggle("fast");
        if (readMoreBtn.html() === '<i class="fa fa-chevron-down"></i>') {
            readMoreBtn.html('<i class="fa fa-chevron-up"></i>');
        } else {
            readMoreBtn.html('<i class="fa fa-chevron-down"></i>');
        }
    });
   

});