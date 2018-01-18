import Temp from './index.hbs';

const bootstrapAnimate = () => {
  const services = $('#fez-bootstrap');
  if (services.length > 0) {

    services.waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {

        let secLen = services.find('.to-animate').length;
        let sec = parseInt((secLen * 200) + 400);

        setTimeout(() => {
          services.find('.to-animate').each(function(k) {
            var el = $(this);

            setTimeout(() => {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);

        setTimeout(() => {
          services.find('.to-animate-2').each(function(k) {
            var el = $(this);

            setTimeout(() => {
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
  $("#fez-bootstrap").html(Temp());
  bootstrapAnimate();
  // $("#js-fezui-bg").stellar();
}
