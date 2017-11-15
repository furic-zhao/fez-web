import temp from './index.hbs';

import blackHole from './black-hole';
// Home
const homeAnimate = () => {
  if ($('#fez-home').length > 0) {

    $('#fez-home').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(() => {
          $('#fez-home .to-animate').each(function(k) {
            const el = $(this);

            setTimeout(() => {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 100);


        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
};

export default () => {
  $("#fez-home").html(temp());
  homeAnimate();
  blackHole();
}
