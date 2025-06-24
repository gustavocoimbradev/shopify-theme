$(function(){
    $('#order').change(function() {
        var order = $(this).val();
        var products = $('.js-products .m-card').get();

        products.sort(function(a, b) {
        var priceA = parseFloat($(a).data('price'));
        var priceB = parseFloat($(b).data('price'));

        if (order === 'lowest_price') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
        });

        $.each(products, function(index, product) {
        $('.js-products').append(product);
        });
    });
})