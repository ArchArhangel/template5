// Slider

$(document).ready(function(){
	$('.feedbacks-block').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnDotsHover: true,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	
	// Burger
	
	$(".nav-burger").click(function(event){
		$(".nav-burger, .nav-block").toggleClass('active');
	});

	// Scroll

	$(window).resize(mobile);
	window.onscroll = navfixed;
});

document.addEventListener('DOMContentLoaded', function(){navfixed(); mobile();});

function navfixed() {
	if ($(this).scrollTop() > 0) {
		$('#header-nav').addClass('navfix');
		$(".header-block").css('margin-top', '99px');
	}
	else if (window.screen.width >= 768) {
		$('#header-nav').removeClass('navfix');
		$(".header-block").removeAttr('style');
	}
};

function mobile(){
	if (window.screen.width < 768) {
		$('#header-nav').addClass('navfix');
		$(".header-block").css('margin-top', '99px');
	}
}