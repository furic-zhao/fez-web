import temp from './index.hbs';

var bootstrapAnimate = function() {
    var services = $('#fez-bootstrap');
    if (services.length > 0) {

        services.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {


                var sec = services.find('.to-animate').length,
                    sec = parseInt((sec * 200) + 400);

                setTimeout(function() {
                    services.find('.to-animate').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeInUp animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);

                setTimeout(function() {
                    services.find('.to-animate-2').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('bounceIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, sec);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};

export default () => {
    $("#fez-bootstrap").html(temp());
    bootstrapAnimate();
}
