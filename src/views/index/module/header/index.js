import temp from './index.hbs';

// Window Scroll
let windowScroll = () => {
    let lastScrollTop = 0;

    $(window).scroll(function(event) {

        let header = $('#fez-header'),
            scrlTop = $(this).scrollTop();

        if (scrlTop > 500 && scrlTop <= 2000) {
            header.addClass('navbar-fixed-top fez-animated slideInDown');
        } else if (scrlTop <= 500) {
            if (header.hasClass('navbar-fixed-top')) {
                header.addClass('navbar-fixed-top fez-animated slideOutUp');
                setTimeout(() => {
                    header.removeClass('navbar-fixed-top fez-animated slideInDown slideOutUp');
                }, 100);
            }
        }

    });
};

// Page Nav
var clickMenu = function() {

    $('#navbar a:not([class="external"])').click(function(event) {
        var section = $(this).data('nav-section'),
            navbar = $('#navbar');

        if ($('[data-section="' + section + '"]').length) {
            $('html, body').animate({
                scrollTop: $('[data-section="' + section + '"]').offset().top - 55
            }, 500);
        }

        if (navbar.is(':visible')) {
            navbar.removeClass('in');
            navbar.attr('aria-expanded', 'false');
            $('.js-fez-nav-toggle').removeClass('active');
        }

        event.preventDefault();
        return false;
    });
};

// Burger Menu
var burgerMenu = function() {

    $('body').on('click', '.js-fez-nav-toggle', function(event) {

        event.preventDefault();

        if ($('#navbar').is(':visible')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

    });
};

export default () => {
    $("#fez-header").html(temp());
    windowScroll();
    clickMenu();
    burgerMenu();
}
