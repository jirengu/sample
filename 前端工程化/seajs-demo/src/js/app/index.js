define(function(require) {

	//var $ = require('jquery');

	var Event = require('com/event');

	var GoTop = require('com/gotop');
	new GoTop();

	var Carousel = require('com/carousel');
	Carousel.init($('.carousel'));

	var i = 0,
		len = $('.intro p').length;
	Event.on('carousel_show_next', function() {
		$('.intro p').hide().eq(i).fadeIn();
		i++;
		i = i % len;
	});


	var Exposure = require('com/exposure');

	Exposure.one($('.img-cells img'), function(){

		var $this = $(this);
		$this.attr('src', $this.attr('data-src'));
	});


});