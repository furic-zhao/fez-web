import Temp from './index.hbs'

const faqAnimate = () => {
  const faq = $('#fez-faq')
  if (faq.length > 0) {

    faq.waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {

        let secLen = faq.find('.to-animate').length
        let sec = parseInt((secLen * 200) + 400)

        setTimeout(() => {
          faq.find('.to-animate').each(function(k) {
            var el = $(this)

            setTimeout(() => {
              el.addClass('fadeIn animated')
            }, k * 200, 'easeInOutExpo')

          })
        }, 200)

        setTimeout(() => {
          faq.find('.to-animate-2').each(function(k) {
            var el = $(this)

            setTimeout(() => {
              el.addClass('fadeInUp animated')
            }, k * 200, 'easeInOutExpo')

          })
        }, sec)

        $(this.element).addClass('animated')
      }
    }, { offset: '80%' })

  }
}

export default () => {
  $('#fez-faq').html(Temp())
  faqAnimate()
}
