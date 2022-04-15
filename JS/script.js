(function($) {
    // Preloader
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut(1000);
    });

    // Closes Responsive Menu When A Scroll Link Is Clicked
    $('.menu-link, .abc, .cart').on('click', function() {
        $('.custom-menubar').slideUp(600);
    });

    // Animation Scroll JS
    var html_body = $('html, body');
    $('.navbar a , .backtotop a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1500);
                return false;
            }
        }
    });

    // Smooth Scroll JS 
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        var stikey = $('.sticky-top');
        if (scrolling >= 100) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
        if (scrolling > 180) {
            $('.backtotop').fadeIn(500);
        } else {
            $('.backtotop').fadeOut(500);
        }
    });

    // Search Form JS
    $('.abc').on('click', function(event) {
        event.preventDefault();
        $('.search').addClass('open');
        $('.search > form > input[type="search"]').focus();
    });
    $('.search, .search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('.fix-close').on('click', function() {
        $('.top-search').removeClass('open');
    });

    // Menu Part JS
    $('.menu-icon').on('click', function() {
        $('.custom-menubar').slideDown(600);
    });
    $('.hide-menu-btn').on('click', function() {
        $('.custom-menubar').slideUp(600);
    });

    // Banner Part JS
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        nextArrow: '.arrow-ar',
        prevArrow: '.arrow-al',
        autoplaySpeed: 3000,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear',
    });

    // Game Part JS
    $('.game-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Matches Part JS
    $('.match-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Brand Part JS
    $('.brand-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Player Part JS
    $('.player-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Product Part JS
    $('.product-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Review Slide JS Part
    $('.review-img-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        asNavFor: '.review-txt-main',
    });

    $('.review-txt-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        fades: true,
        infinite: true,
        speed: 1500,
        fade: true,
        asNavFor: '.review-img-main',
    });

    // Blog Part JS
    $('.blog-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        nextArrow: '.arrow-ar',
        prevArrow: '.arrow-al',
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Library
    // Lightbox JS
    $('.venobox').venobox();

    // Counter Part JS
    $('.counter').counterUp();

    // Video Player JS
    jQuery("#bgndVideo").YTPlayer();

}(jQuery));