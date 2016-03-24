/**
 * car
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:21:54
 * @version $Id$
 */


define(function(require, exports) {
	var $ = require('jquery');

	var Event = require('com/event');   //这是CMD的写法
	console.log(Event);

	var Carousel = (function() {

		var carouselList = [];


		function init($carousel) {
			$carousel.each(function() {
				var $cal = $(this);
				if ($cal.hasClass('init')) {
					return;
				}
				carouselList.push(new _Carousel($cal));
				$cal.addClass('init');
			});

		}

		function getList() {
			return carouselList;
		}

		function _Carousel($carousel) {
			this.$carousel = $carousel;
			var $ct = this.$ct = $carousel.find('.img-ct');
			this.$pre = $carousel.find('.pre');
			this.$next = $carousel.find('.next');
			this.imgWidth = $ct.find('li').width();
			this.imgSize = $ct.find('li').size();

			$ct.css('width', this.imgWidth * this.imgSize);
			this.bind();
			this.autoPlay();
		}

		_Carousel.prototype = {

			bind: function() {
				var _this = this;
				this.$pre.on('click', function() {
					_this.showPre();
				});
				this.$next.on('click', function() {
					_this.showNext();
				});
			},

			showPre: function() {
				this.$ct.prepend(this.$ct.children().last());
				this.$ct.css('left', 0 - this.imgWidth);
				this.$ct.animate({
					'left': 0
				});

				Event.fire('carousel_show_pre');
			},

			showNext: function() {
				var $ct = this.$ct;
				$ct.animate({
					'left': 0 - this.imgWidth
				}, function() {
					$ct.append($ct.children().first());
					$ct.css('left', 0);
				});

				Event.fire('carousel_show_next');
			},

			autoPlay: function(){
				var me = this;
				this.clock = setInterval( function(){
					me.showNext();
				}, 3000 );
			},

			stopPlay: function(){
				clearInterval(this.clock);
			}
		};


		return {
			init: init,
			getList: getList
		};

	})();


	return Carousel;
});