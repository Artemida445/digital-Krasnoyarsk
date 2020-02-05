
(function($) {
    "use strict";

/*------------------------------------
    01. Menu
------------------------------------- */
    var win = $(window);
    var stic = $(".header-sticky");
    win.on('scroll',function() {    
       var scroll = win.scrollTop();
       if (scroll < 245) {
        stic.removeClass("sticky");
       }else{
        stic.addClass("sticky");
       }
    }); 

    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    }); 
    
/*------------------------------------
    Menu-toggle
------------------------------------- */
    var tog = $('.menu-toggle');
    var mnav = $('.main-menu nav');
    tog.on('click', function(){
        if( tog.hasClass('is-active') ){
            mnav.removeClass('menu-open');
        }else {
            mnav.addClass('menu-open');
        }
    });
   
/*------------------------------------
	Hamburger js
-----------------------------------*/
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

/*------------------------------------
    02. Owl Carousel
------------------------------------- */
    $(".anik-owl-slider").owlCarousel({
		autoPlay: 8000, 
        items : 1,
		slideSpeed:500,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    transitionStyle : "fade",
	    transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
    
/*------------------------------------
    Team Carousel
------------------------------------- */
	$('.team-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 4,
        responsiveClass:true,
        nav:false,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:4
            }
		}       
    });	
    
/*------------------------------------
    Testimonial Carousel
------------------------------------- */
	$('.owl-testimonial').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}       
    }); 
       
/*--------------------------
    03. Portfolio Isotope
---------------------------- */
    $('.grid').imagesLoaded( function() {

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });	

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });

    });
  
/*--------------------------
    04. Magnific Popup
---------------------------- */	
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
                
/*--------------------------
    05. Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    
 /*-------------------------------------------
    06. ScrollUp jquery
--------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
        
/*--------------------------------
	07. One Page Nav
-----------------------------------*/
    var top_offset = $('.main-menu').height() - 8;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });
	
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-down').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -80,
            scrollTarget: link.hash
        });
    });
    
    /*--
    map 
    -----------------------------------*/
    function initialize() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(23.763494, 90.432226)
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation:google.maps.Animation.BOUNCE,
            icon: 'images/map-marker.png',
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);	
    
})(jQuery);