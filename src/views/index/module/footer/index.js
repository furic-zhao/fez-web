import temp from './index.hbs';

var footerAnimate = function() {
    var footer = $('#fez-footer');
    if (footer.length > 0) {

        footer.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                setTimeout(function() {
                    footer.find('.to-animate').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};
export default () => {
	$("#fez-footer").html(temp());
	footerAnimate();
}
