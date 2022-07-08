import temp from './index.hbs'

var teamAnimate = function() {
    var team = $('#fez-team')
    if (team.length > 0) {

        team.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                var sec = team.find('.to-animate').length,
                    sec = parseInt((sec * 200) + 400)

                setTimeout(function() {
                    team.find('.to-animate').each(function(k) {
                        var el = $(this)

                        setTimeout(function() {
                            el.addClass('fadeIn animated')
                        }, k * 200, 'easeInOutExpo')

                    })
                }, 200)

                setTimeout(function() {
                    team.find('.to-animate-2').each(function(k) {
                        var el = $(this)

                        setTimeout(function() {
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
	$('#fez-team').html(temp())
	teamAnimate()
}
