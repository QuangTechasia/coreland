class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		this.lastScroll = 0;
		let self = this;
		$('.sticky-nav-tab').click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkHeaderPosition();
		this.findCurrentTabSelector();
		this.lastScroll = $(window).scrollTop();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkHeaderPosition() {
		const headerHeight = 75;
		if ($(window).scrollTop() > headerHeight) {
			$('.spa-header').addClass('spa-header--scrolled');
		} else {
			$('.spa-header').removeClass('spa-header--scrolled');
		}
		let offset = ($('.wrap-nav-control').offset().top + $('.wrap-nav-control').height() - this.tabContainerHeight) - headerHeight;
		if ($(window).scrollTop() > this.lastScroll && $(window).scrollTop() > offset) {
			$('.spa-header').addClass('spa-header--move-up');
			$('.tab-title-detail').removeClass('sticky-nav-tabs-container--top-first');
			$('.tab-title-detail').addClass('sticky-nav-tabs-container--top-second');
		}
		else if ($(window).scrollTop() < this.lastScroll && $(window).scrollTop() > offset) {
			$('.spa-header').removeClass('spa-header--move-up');
			$('.tab-title-detail').removeClass('sticky-nav-tabs-container--top-second');
			$('.tab-title-detail').addClass('sticky-nav-tabs-container--top-first');
		}
		else {
			$('.spa-header').removeClass('spa-header--move-up');
			$('.tab-title-detail').removeClass('sticky-nav-tabs-container--top-first');
			$('.tab-title-detail').removeClass('sticky-nav-tabs-container--top-second');
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.sticky-nav-tab').each(function () {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.sticky-nav-tab-slider').css('width', width);
		$('.sticky-nav-tab-slider').css('left', left);
	}

}

new StickyNavigation();

$(document).ready(function () {
	$("#myScrollspy a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				window.location.hash = hash;
			});
		}
	});
});



$('#project-details .main-img-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	fade: true,
	autoplay: false,
	autoplaySpeed: 4000,
	speed: 300,
	lazyLoad: 'ondemand',
	asNavFor: '.thumb-nav',
});
$('#project-details .thumb-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	centerPadding: '0px',
	asNavFor: '.main-img-slider',
	dots: false,
	centerMode: false,
	draggable: true,
	speed: 200,
	focusOnSelect: true,
});

$('#project-details .main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$('#project-details .thumb-nav .slick-slide').removeClass('slick-current');
	$('#project-details .thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});
$('#images-detail .main-img-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	fade: true,
	autoplay: false,
	autoplaySpeed: 4000,
	speed: 300,
	lazyLoad: 'ondemand',
	asNavFor: '.thumb-nav',
	prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>'
});
$('#images-detail .thumb-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	centerPadding: '0px',
	asNavFor: '.main-img-slider',
	dots: false,
	centerMode: false,
	draggable: true,
	speed: 200,
	focusOnSelect: true,
});

$('#images-detail .main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	$('#images-detail  .thumb-nav .slick-slide').removeClass('slick-current');
	$('#images-detail  .thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});

