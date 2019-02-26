$(document).ready(function () {

    $('.banner').owlCarousel({
        loop: true,
        margin: 10,
        
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
        responsive: {
            0: {
                nav: false,
                items: 1
            },
            600: {
                nav: true,
                items: 1
            },
            1000: {
                nav: true,
                items: 1
            }
        }
    })

    $('.product-grid').isotope({
        // options
        itemSelector: '.product-card',
        layoutMode: 'fitRows'
    });

});
