import temp from './index.hbs';

let exploreAnimate = () => {

    let explore = $('#fez-expand');
    if (explore.length > 0) {

        explore.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {


                setTimeout(() => {
                    explore.find('.to-animate').each(function(k) {
                        let el = $(this);

                        setTimeout(() => {
                            el.addClass('fadeInUp animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);

                setTimeout(() => {
                    explore.find('.to-animate-2').each(function(k) {
                        let el = $(this);

                        setTimeout(() => {
                            el.addClass('bounceIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 700);

                setTimeout(() => {
                    explore.find('.to-animate-3').each(function(k) {
                        let el = $(this);

                        setTimeout(() => {
                            el.addClass('fadeInRight animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 1000);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};

let counter = () => {
    $('.js-counter').countTo({
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
    });
};

let counterWayPoint = () => {
    if ($('#fez-counter-section').length > 0) {
        $('#fez-counter-section').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                setTimeout(counter, 400);
                $(this.element).addClass('animated');

            }
        }, { offset: '90%' });
    }
};

export default () => {
    $("#fez-expand").html(temp());
    exploreAnimate();
    counter();
    counterWayPoint();
}
