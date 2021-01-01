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


    let submitBtn = $('#submitDisable');
    let flag1 = false;
    let flag2 = false;
    $("#guideSlelct").change(function() {
        let id = $(this).children(":selected").attr("id");
        if(id === "model1") {
            flag1 = false;
        } else {
            flag1 = true;
        }
        if(flag1 === true && flag2 === true) {
            submitBtn.prop("disabled", false);
        } else {
            submitBtn.prop("disabled", true);
        }
    });

    $("#serviceSelect").change(function() {
        let id = $(this).children(":selected").attr("id");
        if(id === "model2") {
            flag2 = false;
        } else {
            flag2 = true;
        }
        if(flag1 === true && flag2 === true) {
            submitBtn.prop("disabled", false);
        } else {
            submitBtn.prop("disabled", true);
        }
    });
    
    let changePassSubmit = $("#changePassSubmit");
    $("#newPassword").change(function() {
        let first = $("#newPassword0").val();
        let second = $(this).val();

        if(first === second) {
            changePassSubmit.prop("disabled", false);
        } else {
            changePassSubmit.prop("disabled", true);
        }
    });


});
