$('body').on('ajax:addToCart', function (e, data) {

    if(typeof yampiClick === 'function') {
        yampiClick();
    }
});