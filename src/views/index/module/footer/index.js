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
  $('#js-open-weixin').popover({
    trigger:'hover',
    html:'true',
    placement:'top',
    content:'<image src="./static/images/wxcode.jpg" width="240" height="300">',
    title:'微信扫码加入FEZ沟通群',
  });
	footerAnimate();
}
