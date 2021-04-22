$(document).ready(function() {
    $('.service-text__slider').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: true,
        prevArrow: $('.service-text__arrow_left'),
        nextArrow: $('.service-text__arrow_right'),
        asNavFor: $('.service-slider__img'),

    });
    $('.service-slider__img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        asNavFor: $('.service-text__slider'),
    });

    $('.work-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: $('.work .pagination__bullets'),
        prevArrow: ('.work .pagination__left'),
        nextArrow: ('.work .pagination__right'),
        cssEase: 'linear',
        responsive: [{
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,


            }
        }]
    });
    $('.feedback-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: $('.feedback .pagination__bullets'),
        prevArrow: $('.feedback .pagination__left'),
        nextArrow: $('.feedback .pagination__right'),
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    variableWidth: true,
                }
            },
        ]

    });
    $('.certificates-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: $('.certificates .pagination__bullets'),
        prevArrow: $('.certificates .pagination__left'),
        nextArrow: $('.certificates .pagination__right'),

    });
});