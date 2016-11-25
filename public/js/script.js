
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

    $(".col-a-bg").mouseover(function(){
        $(".col-a-bg p").show();
        $('.col-border-a').css("border", "2px solid #f1af34");
    });
    $(".col-a-bg").mouseout(function(){
        $(".col-a-bg p").hide();
        $('.col-border-a').css("border", "0px solid #f1af34");
    });

    $(".col-b-bg").mouseover(function(){
        $(".col-b-bg p").show();
        $('.col-border-b').css("border", "2px solid #f1af34");
    });
    $(".col-b-bg").mouseout(function(){
        $(".col-b-bg p").hide();
        $('.col-border-b').css("border", "0px solid #f1af34");
    });

    $(".col-c-bg").mouseover(function(){
        $(".col-c-bg p").show();
        $('.col-border-c').css("border", "2px solid #f1af34");
    });
    $(".col-c-bg").mouseout(function(){
        $(".col-c-bg p").hide();
        $('.col-border-c').css("border", "0px solid #f1af34");
    });

    $(".col-d-bg").mouseover(function(){
        $(".col-d-bg p").show();
        $('.col-border-d').css("border", "2px solid #f1af34");
    });
    $(".col-d-bg").mouseout(function(){
        $(".col-d-bg p").hide();
        $('.col-border-d').css("border", "0px solid #f1af34");
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

 // circular Skills set bar
 (function() {
 	var Progress = function( element ) {
 		this.context = element.getContext( "2d" );
 		this.refElement = element.parentNode;
 		this.loaded = 0;
 		this.start = 4.72;
 		this.width = this.context.canvas.width;
 		this.height = this.context.canvas.height;
 		this.total = parseInt( this.refElement.dataset.percent, 10 );
 		this.timer = null;
 		this.diff = 0;
 		this.init();
 	};
 	Progress.prototype = {
 		init: function() {
 			var self = this;
 			self.timer = setInterval(function() {
 				self.run();
 			}, 25);
 		},
 		run: function() {
 			var self = this;
 			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );
 			self.context.clearRect( 0, 0, self.width, self.height );
 			self.context.lineWidth = 10;
 			self.context.fillStyle = "#000";
 			self.context.strokeStyle = "#f1af34";
 			self.context.textAlign = "center";

 			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
 			self.context.beginPath();
 			self.context.arc( 70, 70, 60, self.start, self.diff / 10 + self.start, false );
 			self.context.stroke();

 			if( self.loaded >= self.total ) {
 				clearInterval( self.timer );
 			}
 			self.loaded++;
 		}
 	};

 	var CircularSkillBar = function( elements ) {
 		this.bars = document.querySelectorAll( elements );
 		if( this.bars.length > 0 ) {
 			this.init();
 		}
 	};

 	CircularSkillBar.prototype = {
 		init: function() {
 			this.tick = 25;
 			this.progress();
 		},
 		progress: function() {
 			var self = this;
 			var index = 0;
 			var firstCanvas = self.bars[0].querySelector( "canvas" );
 			var firstProg = new Progress( firstCanvas );
 			var timer = setInterval(function() {
 				index++;
 				var canvas = self.bars[index].querySelector( "canvas" );
 				var prog = new Progress( canvas );
 				if( index == self.bars.length ) {
 						clearInterval( timer );
 				}
 			}, self.tick * 100);
 		}
 	};

 	document.addEventListener( "DOMContentLoaded", function() {
 		var circularBars = new CircularSkillBar( "#bars .bar" );
 	});

 })();

$(function() {
    window.sr = ScrollReveal();
        sr.reveal('.about-me h1', { duration: 1000 }, 50);
        sr.reveal('.about-me p', { duration: 1000 }, 50);
        sr.reveal('.col-skill h1', { duration: 1000 }, 50);
        sr.reveal('.col-skill p', { duration: 1000 }, 50);
        sr.reveal('.col-skill .bar', { duration: 1000 }, 50);
        sr.reveal('.section-box .col-c-bg', { duration: 1000 }, 50);
        sr.reveal('.section-box .col-b-bg', { duration: 1000 }, 50);
        sr.reveal('.section-box .col-a-bg', { duration: 1000 }, 50);
        sr.reveal('.section-box .col-d-bg', { duration: 1000 }, 50);
        sr.reveal('.testimonials-content h1', { duration: 1000 }, 50);
        sr.reveal('.testimonials-content p', { duration: 1000 }, 50);
        sr.reveal('.content-bg h1', { duration: 1000 }, 50);
        sr.reveal('.content-bg p', { duration: 1000 }, 50);
        sr.reveal('.content-bg .contact-form', { duration: 1000 }, 50);
});

$(function() {
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
		}
  });
});
