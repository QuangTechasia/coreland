

$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('#header:not(.header-project-detail-not-scroll)').addClass('scroll');
		} else {
			$('#header:not(.header-project-detail-not-scroll)').removeClass('scroll')
		};
	});

	$(".icon-bar").click(function () {
		$("header#header").toggleClass("active");
		// $("body").toggleClass("overflow");
	});
	$(".sticky-nav-tab").click(function () {
		$(this).parent().find(".sticky-nav-tab").removeClass('active');
		$(this).addClass('active');
	});


	function setWidthText() {
		let showChar = 250;
		var ellipsestext = "...";
		var data = ['box-content-ykien p'];
		data.forEach(function (value) {

			$('.' + value).each(function () {
				var content = $(this).html();
				if (content.length > showChar) {
					var c = content.substr(0, showChar);
					var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp';
					$(this).html(html);
				}

			});
		});
	}
	setWidthText();

	$(".toggle-form-search").click(function () {
		$(this).toggleClass('active');
		$(this).siblings('.form').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var container = $(".search-main");
		if (!container.is(e.target) &&
			container.has(e.target).length === 0) {
			$('.search-main .toggle-form-search').removeClass('active');
			$('.search-main .form').removeClass('active');
		}
	});



	for (let i = 0; i < 3; i++) {
		$("#active_video_youtube_" + i).click(function () {
			for (let y = 0; y < 3; y++) {
				var symbol_ = $("#video_youtube_" + y)[0].src;
				if (symbol_.indexOf("?") > -1) {
					symbol_.substr(0, symbol_.search("autoplay") - 1);
					$("#video_youtube_" + y)[0].src = symbol_.substr(0, symbol_.search("autoplay") - 1);
				}
			}
			var symbol = $("#video_youtube_" + i)[0].src.indexOf("?") > -1 ? "&" : "?";
			$("#video_youtube_" + i)[0].src += symbol + "autoplay=1";
			console.log(symbol);
		})

	}
	function resize(){
	var win = $(window).width();
		if(win > 768){
			$(".item-project").parent('.col-md-6, .col-lg-4, .col-md-3, .col-xl-4, .col-xl-3').css({ 'padding-bottom': '20px' });
			$(".item-project").css({ 'margin-bottom': '0', 'height': '100%' });
		}else{
			$(".item-project").parent('.col-md-6, .col-lg-4, .col-md-3, .col-xl-4, .col-xl-3').css({ 'padding-bottom': '10px' });
			$(".item-project").css({ 'margin-bottom': '0', 'height': '100%' });
		}
	}
	resize();
	$(window).on('resize', function(){
        resize();
    });


	// menu footer 
	$(".icon-toggle-menu").click(function () {
		$(this).siblings(".wrap-menu").find(".item-menu.active-efect").slideToggle();
		$(this).siblings(".wrap-menu").toggleClass('active-mobile-border');
		$(this).children().attr('class', function (index, attr) {
			return attr == 'fal fa-angle-right' ? 'fal fa-angle-down' : 'fal fa-angle-right';
		});
	});

	$(".icon-toggleSubmenu").click(function () {
		$(this).children().attr('src', function (index, attr) {
			return attr == '/images/icon-plus-submenu.png' ? '/images/icon-minus-submenu.png' : '/images/icon-plus-submenu.png';
		});
		$(this).siblings('.wrapper_naviga').slideToggle();
	});


	// popup
    // (function() {
    //     var visited = localStorage.getItem('visited');
    //     localStorage.setItem('visited', true);
    //     if (visited) {
    //         $("body").addClass("remove-active");
    //         $("body").css({"overflow":"auto"});
    //         $(".popup-toppage").css({"opacity":"0", "visibility":"hidden" });
    //     }
    // })();
    window.onload=function(){
        function popupShow(){
            $(".popup-toppage").css({"opacity": "1", "visibility": "visible"});
            $(".popup-toppage").toggleClass("show-popup-toppage");
        }
        function popupHide(){
            $(".popup-toppage").css({"opacity": "0", "visibility": "hidden"});
            $(".popup-toppage").removeClass("show-popup-toppage");
        }
        setTimeout(popupShow, 1200);
        $(document).mouseup(function (e) {
            var container = $(".wrap-popup-toppage");
            if(!container.is(e.target) && 
            container.has(e.target).length === 0) {
                container.hide();
                popupHide();
            }
        });
        $("#close-popup-topage").click(function(){
            popupHide();
        });
    }



});

$('#slide-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
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
$('#slide-blog-right-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
		},
		540: {
			items: 2,
			margin: 10,
		},
		768: {
			items: 3,
			margin: 10,
		},
		991: {
			items: 1
		}
	}
});

$('#slide-project-main, #slide-blog-index-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 5,
		},
		540: {
			items: 2,
			margin: 5,
		},
		768: {
			items: 3,
			margin: 10,
		},
		1024: {
			items: 4,
			margin: 10,
		}
	}
});

$('#slide-customer-main, #slide-project-index-main, #slide-project-index-main-2, #slide-project-index-main-3, #slide-ykien-kh-main').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
		},
		540: {
			items: 2,
			margin: 10,
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
	margin: 5,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2
		},
		540: {
			items: 3
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
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
			margin: 10,
		},
		540: {
			items: 3,
			margin: 10,
		},
		768: {
			items: 4
		},
		1080: {
			items: 5
		},
		1200: {
			items: 6
		}

	}
});
