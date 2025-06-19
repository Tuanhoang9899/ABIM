
$(document).ready(function () {
    $('.hero .hero_banner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: true
    });

    $('.testimonial-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Mở menu mobile
    $(".menu-toggle").click(function () {
        $(".mobile-menu").addClass("show");
        $(".mobile-menu-overlay").addClass("show");
    });

    // Đóng menu
    $(".close-mobile-menu, .mobile-menu-overlay").click(function () {
        $(".mobile-menu").removeClass("show");
        $(".mobile-menu-overlay").removeClass("show");
    });

    // Mở menu con
    $(".mobile-dropdown-toggle").click(function () {
        $(this).parent().toggleClass("open");
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 500);
        }
    });

    // Add shadow to navigation on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('nav').css('box-shadow', '0 2px 10px rgba(0,0,0,0.1)');
        } else {
            $('nav').css('box-shadow', 'none');
        }
    });

    // Service card hover animation
    $('.service-card').hover(
        function () {
            $(this).find('.learn-more').css('gap', '12px');
        },
        function () {
            $(this).find('.learn-more').css('gap', '8px');
        }
    );
});
