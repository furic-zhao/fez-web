import Temp from './index.hbs'

const footerAnimate = () => {
  const footer = $('#js-fez-footer')
  if (footer.length > 0) {
    footer.waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        setTimeout(() => {
          footer.find('.to-animate').each(function (k) {
            const el = $(this)

            setTimeout(() => {
              el.addClass('fadeIn animated')
            }, k * 200, 'easeInOutExpo')
          })
        }, 200)

        $(this.element).addClass('animated')
      }
    }, { offset: '80%' })
  }
}

export default () => {
  $('#js-fez-footer').html(Temp())

  // $('#js-open-weixin').popover({
  //   trigger: 'hover',
  //   html: 'true',
  //   placement: 'top',
  //   content: '<image src="./static/images/wxcode.jpg" width="240" height="300">',
  //   title: '微信扫码加入FEZ沟通群',
  // })

  footerAnimate()
}
