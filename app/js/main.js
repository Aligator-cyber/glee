$(function() {


    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
    })

    var blogEl1 = document.querySelector('[data-ref="blog-1"]');
    var blogEl2 = document.querySelector('[data-ref="blog-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(blogEl1, config);
    var mixer2 = mixitup(blogEl2, config);

    $('.insights__inner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,

    })
})