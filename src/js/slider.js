$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        prevArrow: $('.service-card__arrow_left'),
        nextArrow: $('.service-card__arrow_right'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    });
    $('.work-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
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
        autoplay: true,
        autoplaySpeed: 3000,
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