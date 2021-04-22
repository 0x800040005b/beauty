$(document).ready(function () {
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
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,

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
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,

    });
    let img = $('.overlay-slider__img>img');

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
        autoplaySpeed: 5000,
        swipe: false,
        appendDots: $('.certificates .pagination__bullets'),
        prevArrow: $('.certificates .pagination__left'),
        nextArrow: $('.certificates .pagination__right'),

    });
    $('.certificates-slide').click(function (event) {
        let target = event.target;
        let src = target.getAttribute('src');
        img.attr('src', getNewPhoto(src));
        $('.overlay-slider').toggleClass('active');


    });
    $('.overlay-slider__close').click(function () {
        $('.overlay-slider').toggleClass('active');
        img.attr('src', "");

    });

    function getNewPhoto(src) {
        console.log(src);
            if(src != null && src !== ""){
                src = src.replace('img/sertificates/','dist/img/sertificates/big-img/');
                src = src.replace('.png','.jpg');
                console.log(src);
                return src
            }
            return src;
    }
});