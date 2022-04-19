

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
	$(".sticky-nav-tab").click(function(){
		$(this).parent().find(".sticky-nav-tab").removeClass('active');
		$(this).addClass('active');
	});


	function setWidthText(){
        let showChar = 350;
        var ellipsestext = "...";
        var data = ['box-content-ykien p'];
        data.forEach( function(value){

            $('.'+value).each(function() {
                var content = $(this).html();
                if(content.length > showChar) {
                    var c = content.substr(0, showChar);
                    var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp';
                    $(this).html(html);
                }

            });
        });
    }
    setWidthText();

	$(".toggle-form-search").click(function(){
		$(this).toggleClass('active');
		$(this).siblings('form').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var container = $(".search-main");
		if(!container.is(e.target) &&
		container.has(e.target).length === 0) {
			$('.search-main .toggle-form-search').removeClass('active');
			$('.search-main form').removeClass('active');
		}
	});



	for (let i = 0; i < 3; i++) {
		$("#active_video_youtube_"+i).click(function(){
		   for (let y = 0; y < 3; y++) {
			   var symbol_ = $("#video_youtube_"+y)[0].src;
			   if(symbol_.indexOf("?") > -1){
				symbol_.substr(0, symbol_.search("autoplay") - 1);
				$("#video_youtube_"+y)[0].src = symbol_.substr(0, symbol_.search("autoplay") - 1);
			   }
		   }
		   var symbol = $("#video_youtube_"+i)[0].src.indexOf("?") > -1 ? "&" : "?";
		   $("#video_youtube_"+i)[0].src += symbol + "autoplay=1";
		   console.log(symbol);
		})
		
	}





});

$('#slide-main, #slide-blog-right-main').owlCarousel({
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

$('#slide-customer-main, #slide-project-index-main, #slide-project-index-main-2, #slide-project-index-main-3, #slide-ykien-kh-main').owlCarousel({
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
