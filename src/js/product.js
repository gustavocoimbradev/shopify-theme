$(function(){

    // Gallery

    $(".js-gallery-current").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: `<button type="button" class="slick-prev" style="transform: rotate(180deg); background: none; border: none;">
        <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L22 22L2 42" stroke="#5F5F5F" stroke-width="5"/>
        </svg>
        </button>`,
        nextArrow: `<button type="button" class="slick-next" style="background: none; border: none;">
        <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L22 22L2 42" stroke="#5F5F5F" stroke-width="5"/>
        </svg>
        </button>`,
        asNavFor: $(".js-gallery-all")
    });

    $(".js-gallery-all").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        asNavFor: $(".js-gallery-current"),
        focusOnSelect: true,
        swipe: false,
    });

    // Featured list

    var $container = $(".js-products-random");
    var $items = $container.find(".js-product-card").toArray();
    var shuffled = $items.sort(function(){ return 0.5 - Math.random(); }).slice(0, 4);
    $container.empty().append(shuffled);

    $(".js-products-single-line").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: `<button type="button" class="slick-prev" style="transform: rotate(180deg); background: none; border: none;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12z"/>
        </svg>
        </button>`,
        nextArrow: `<button type="button" class="slick-next" style="background: none; border: none;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12z"/>
        </svg>
        </button>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    variableWidth: true,
                    arrows: false,
                    centerMode: true,
                    infinite: true,
                }
            }
        ]
    });

})