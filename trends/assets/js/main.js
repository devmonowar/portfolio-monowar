(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$(".product-list").masonry();
		
		$('.homepage-slides').owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			dots:false,
			autoplaySpeed:1500,
			nav:true,
			navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
			
		})
		$('.product-promotion').owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			autoplaySpeed:1000,
			nav:false,
			
		})
		
		        $(".menu-trigger").click(function(){
				$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
				});
		
		        $(".fa-close, .off-canvas-overlay").click(function(){
				$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
				});
		
		
		
		

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	