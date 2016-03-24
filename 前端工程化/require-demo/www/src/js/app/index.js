/**
 * 首页功能
 */

//define(id, ['jquery'], function($){ $('')  })

define(['jquery','com/gotop', 'com/event', 'com/carousel', 'com/exposure'], function($, GoTop, Event, Carousel, Exposure) {

	

	new GoTop();

	Carousel.init($('.carousel'));

	var i = 0,
		len = $('.intro p').length;

	Event.on('carousel_show_pre', function() {
		$('.intro p').hide().eq(i).fadeIn();
		i--;
		i = i % len;
	});
	Event.on('carousel_show_next', function() {
		$('.intro p').hide().eq(i).fadeIn();
		i++;
		i = i % len;
	});


	Exposure.one($('.img-cells img'), function(){

		var $this = $(this);
		$this.attr('src', $this.attr('data-src'));
	});


});