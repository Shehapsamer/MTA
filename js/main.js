
// // ////////////////////////////////////////////
// var owl = $('#slider_1');
// owl.owlCarousel({
//     items:4, 
//   // items change number for slider display on desktop
  
//     loop:true,
//     margin:10,
//     navigation: true,
//     autoplay: true,
//     smartSpeed: 800,
//     rtl:true,
//     nav: true,
//     navElement: "dots",
//     navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
//     paginationSpeed : 800,
//     dots: true,  
//     dotsEach:true,
//     responsive:{
//         0:{
//             items: 1,
//         },
//         600:{
//             items: 1,
//         },
//         1100:{
//             items: 1,
//         },
//         1200:{
//             items:1
//         }
//     }
// });
// // /////////



(function($) { "use strict";

	//Switch dark/light

	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 50;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 


//////////////////////////
window.addEventListener("load", function () {
    let loading = document.getElementById("loading");
    document.body.style.overflow = "hidden";
    
    setTimeout(function () {
        loading.style.display = "none";
        document.body.style.overflow = "auto";
    },1000);

})
// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////

// ////////////////

