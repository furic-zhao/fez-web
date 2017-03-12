import temp from './index.hbs';

var faqAnimate = function() {
    var faq = $('#fez-faq');
    if (faq.length > 0) {

        faq.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                var sec = faq.find('.to-animate').length,
                    sec = parseInt((sec * 200) + 400);

                setTimeout(function() {
                    faq.find('.to-animate').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);

                setTimeout(function() {
                    faq.find('.to-animate-2').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeInUp animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, sec);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};

export default () => {
    $("#fez-faq").html(temp());
    faqAnimate();
}
