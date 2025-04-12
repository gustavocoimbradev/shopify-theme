$(function(){

    $(".js-hero").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        dots: false
    })

    $(".js-single-collection").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
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
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
      });

}) 