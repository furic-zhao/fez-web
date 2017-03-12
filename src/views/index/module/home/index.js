import temp from './index.hbs';
// Home
var homeAnimate = function() {
    if ($('#fez-home').length > 0) {

        $('#fez-home').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {


                setTimeout(function() {
                    $('#fez-home .to-animate').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeInUp animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};

export default () => {
    $("#fez-home").html(temp());
    homeAnimate();
}
