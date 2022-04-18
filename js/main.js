

$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('#header').addClass('scroll');
		} else {
			$('#header').removeClass('scroll')
		};
	});

	$(".icon-bar").click(function () {
		$("header#header").toggleClass("active");
		// $("body").toggleClass("overflow");
	});
	$(".sticky-nav-tab").click(function(){
		$(this).parent().find(".sticky-nav-tab").removeClass('active');
		$(this).addClass('active');
	})







});

$('#slide-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		540: {
			items: 1
		},
		768: {
			items: 1
		},
		1024: {
			items: 1
		}
	}
});

$('#slide-project-main, #slide-blog-index-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: false,
	margin: 20,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		540: {
			items: 2
		},
		768: {
			items: 3
		},
		1024: {
			items: 4
		}
	}
});

$('#slide-customer-main, #slide-project-index-main, #slide-project-index-main-2, #slide-project-index-main-3').owlCarousel({
	loop: true,
	nav: true,
	autoplay: false,
	margin: 20,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		540: {
			items: 2
		},
		768: {
			items: 3
		}
	}
});

$('#partner .owl-carousel').owlCarousel({
	loop: true,
	nav: true,
	autoplay: false,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		540: {
			items: 2
		},
		768: {
			items: 3
		},
		1024: {
			items: 5
		}
	}
});
$('#slide-leader-main ,#slide-prize-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: false,
	margin: 20,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		540: {
			items: 2
		},
		768: {
			items: 4
		},
		1024: {
			items: 6
		}
	}
});
