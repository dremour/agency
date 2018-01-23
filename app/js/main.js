$(document).ready(function() {
    $('.hamburger-menu').on('click', function(event) {
        $('.row__hamburger').addClass('active');
        event.preventDefault();
        event.stopPropagation();
    });
    $('#close').on('click', function () {
        $('.row__hamburger').removeClass('active');
    })
});




