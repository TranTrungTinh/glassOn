$(document).ready(function() { 
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:3,
                // nav:false
            },
            1000:{
                items:4,
                // nav:true,
                // loop:false
            }
        }
    });
    AOS.init();

    $('.owl-prev').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.owl-next').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    $('.content__video-thumbnail').click(function() {
        $('#exampleModalCenter').modal('toggle')
    })

    $('#whatIsGlassOn').click(function() {
        $('.dropdown > #whatIsGlassOn').addClass('toggle');
    });

    $('#timeToGet').click(function() {
        $('.dropdown > #timeToGet').addClass('toggle');
    })
});