
$(function(){
    $(".fa-arrow-circle-down").click(function(){
        $(this).fadeOut(2000).fadeIn(2000);
    });
    $(".fa-wordpress").click(function(){
        $(this).fadeOut(2000).fadeIn(2000);
    });
    $(".fa-arrow-circle-down").click(function(){
        $('body').animate({ scrollTop: 0 }, "slow");
    });
    $(".glyphicon-menu-up").click(function(){
        $('body').animate({ scrollTop: 0 }, "slow");
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() ==0)
     {
        $('.glyphicon-menu-up').fadeOut(1000);
    } else {
        $('.glyphicon-menu-up').fadeIn(1000);
    }
    if ($(this).scrollTop() >0)
     {
        $('.header-top-bg').fadeIn(1000);
        $('.header-top-bg').css("background", "rgba(2, 2, 2, 0.29)");
        $('.header-top-bg').css("padding-top", "0px");
    }
    else
     {
        $('.header-top-bg').fadeOut(1000);
        $('.header-top-bg').fadeIn(1000);
        $('.header-top-bg').css("background", "transparent");
        $('.header-top-bg').css("padding-top", "50px");

     }
 });
