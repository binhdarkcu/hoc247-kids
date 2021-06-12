// JavaScript Document
var SiteMain = (function() {

	function init(){
		var videoObj = $('#video-news');
		if(videoObj.length > 0) {
			playVideo();
		}

		$('ul.sf-menu').superfish();
		openMobileMenu()
	}

	function openMobileMenu() {
		$('.navigation-top-mobile .hamburger-menu').click(function() {
			$(this).toggleClass('actived')
			$('.navigation-right').toggleClass('actived')
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

	function createSlickSlider(clsEle) {
		$(clsEle).slick({
		  dots: false,
		  arrows: true,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  variableWidth: true,
		});
	}

	function openSlickSlider(id) {
		$(id).show();
		createSlickSlider('.slick-galleries')
	}


	function playVideo() {
		var myPlayer = videojs('video-news');
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

	function openGridMenu(idMenu) {
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
		calcFixLeftAndRightSideBar:calcFixLeftAndRightSideBar
	}

})();

$(document).ready( function() {
	SiteMain.init();
});
