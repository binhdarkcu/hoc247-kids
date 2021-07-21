// JavaScript Document
var SiteMain = (function() {

	function init(){
		// var videoObj = $('#video-news');
		// if(videoObj.length > 0) {
		// 	playVideo();
		// }
		if($('.slick-slider').length > 0) {
			createSlickSlider('.slick-slider', true, 1, true)
		}
		if($('.customer-slider').length > 0) {
			createSlickSlider('.customer-slider', false, 3, false)
		}

		if($('.learn-english-slider').length > 0) {
			if( $(window).width() < 992) {
				createSlickSlider('.learn-english-slider', false, 1, false)
			}
		}

		//$('ul.sf-menu').superfish();
		openMobileMenu()


		$(window).on('resize', function() {
		   if( $(window).width() < 992) {
			   	if($('.slick-slider').length > 0) {
		         $('.slick-slider')[0].slick.refresh()
			 		}
		    }
		});
		if($('#video-livestream').length > 0) {
			playVideo('video-livestream')
		}


	}

	function openMobileMenu() {
		$('header .hamburger-menu').click(function() {
			$(this).toggleClass('actived')
			$('html, .menu-section').toggleClass('actived')
		})
	}


	function detectOnScrollBanner(targetEle, eleStop) {
		$(document).on('scroll', function() {
			$(targetEle).removeClass('fixed')
		  if ($(this).scrollTop() >= $(targetEle).position().top) {
				$(targetEle).removeClass('absolute').addClass('fixed')
				if($(targetEle).offset().top + $(targetEle).height() >= $(eleStop).offset().top - 10) {
					$(targetEle).removeClass('fixed').addClass('absolute')
				}
		  }
		})
	}

	function calcFixLeftAndRightSideBar(hOuter, fixedObj, bufferOffset){
		var window_top = $(window).scrollTop();
		var headerH = hOuter;
		if (window_top >= headerH) {
			$('.relative-sticky').addClass('absolute');
			$(fixedObj).addClass("fixed");
			checkOffset(fixedObj, bufferOffset)
		} else {
			$(fixedObj).removeClass("fixed");
		}
	}

	function checkOffset(offsetElement, bufferOffsetFooter) {
		var bufferFooter = bufferOffsetFooter ? bufferOffsetFooter : 0
		if($(offsetElement).length > 0) {
			var offsetWindow = $(document).scrollTop() + window.innerHeight - bufferFooter;
	    	if(offsetWindow > $('footer').offset().top) {
				if(offsetElement === '#sticky-fixed') {
					$(offsetElement).addClass('reach-footer');
				}
			} else {
				$(offsetElement).removeClass('reach-footer'); // restore when you scroll up
			}
		}
	}

	function createSlickSlider(clsEle, arrows, slidesToShow, centerMode) {
		$(clsEle).slick({
		  dots: true,
		  arrows: arrows,
		  infinite: false,
		  speed: 500,
		  slidesToShow: slidesToShow,
		  centerMode: centerMode,
		  slidesToScroll: 1,
			  cssEase: 'linear',
		    variableWidth: true,
		    variableHeight: true,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
		});
	}

	function openSlickSlider(id) {
		$(id).show();
		createSlickSlider('.slick-galleries')
	}


	function playVideo(idVideo) {
		var myPlayer = videojs(idVideo);
		if(myPlayer) {
			$('.play-video').click(function(){
				if (myPlayer.paused()) {
			    $(this).find('.fa').removeClass('fa-play').addClass('fa-pause')
					myPlayer.play();
					if($(window).width() > 922) {
						$('.video-custom-controls').hide();
					}
			  }
			  else {
			    $(this).find('.fa').removeClass('fa-pause').addClass('fa-play')
					myPlayer.pause();
					$('.video-custom-controls').show();
			  }
			})
		}

	}

	function openGridMenu($this, idMenu) {
		$($this).toggleClass('opened');
		$(idMenu).toggleClass('opened');
	}

	function openPopup(idDiv){

	}
	function closePopup(idDiv){
		$('.modal').hide();
	}

	function expandCategory(idCategory) {
		$(idCategory).toggleClass('expanded')
		//scrollToDiv(idCategory)
	}

	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup,
		playVideo:playVideo,
		openGridMenu:openGridMenu,
		openSlickSlider:openSlickSlider,
		calcFixLeftAndRightSideBar:calcFixLeftAndRightSideBar,
		detectOnScrollBanner: detectOnScrollBanner
	}

})();

$(document).ready( function() {
	SiteMain.init();
});
