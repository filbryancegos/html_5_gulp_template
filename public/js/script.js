
$('.col-icon-a').fadeOut(2000);

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

    $(".fa-arrow-circle-up").click(function(){
        $('body').animate({ scrollTop: 0 }, "slow");
        $(this).fadeOut(2000).fadeIn(2000);
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('.header-top-bg').fadeOut(1000);
    }
    else
     {
      $('.header-top-bg').fadeIn(1000);
     }
 });

 $(window).scroll(function() {
     if ($(this).scrollTop()>200)
      {
         $('.text-content').fadeOut(1000);
     }
     else
      {
       $('.text-content').fadeIn(1000);
      }
  });
