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
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]


    })

})