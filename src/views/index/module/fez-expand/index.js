import temp from './index.hbs';

const fezExtend = [{
  name: 'Babel',
  href: 'https://babeljs.io/',
  class: 'Babel'
}, {
  name: 'lodash',
  href: 'http://lodashjs.com/',
  class: 'lodash'
}, {
  name: 'LESS',
  href: 'http://www.bootcss.com/p/lesscss/',
  class: 'less'
}, {
  name: 'SASS',
  href: 'http://sass.bootcss.com/',
  class: 'sass'
}, {
  name: 'Jade(pug)',
  href: 'https://pugjs.org/',
  class: 'jade'
}, {
  name: 'Handlebars',
  href: 'http://handlebarsjs.com/',
  class: 'handlebars'
}, {
  name: 'autoprefixer',
  href: 'https://github.com/postcss/autoprefixer',
  class: 'autoprefixer'
}, {
  name: 'animate.css',
  href: 'https://github.com/daneden/animate.css',
  class: 'animate'
}, {
  name: 'fontawesome',
  href: 'http://fontawesome.io/',
  class: 'fontawesome'
}, {
  name: 'D3',
  href: 'https://d3js.org/',
  class: 'd3'
}, {
  name: 'echarts',
  href: 'http://echarts.baidu.com/',
  class: 'echarts'
}, {
  name: 'jquery',
  href: 'http://www.jquery123.com/',
  class: 'jquery'
}, {
  name: 'bootstrap',
  href: 'http://v3.bootcss.com/',
  class: 'bootstrap'
}, {
  name: 'framework7',
  href: 'http://framework7.io/',
  class: 'framework7'
}, {
  name: 'React',
  href: 'https://facebook.github.io/react/',
  class: 'react'
}, {
  name: 'vue',
  href: 'https://cn.vuejs.org/',
  class: 'vue'
}, {
  name: 'materialize',
  href: 'http://materializecss.com/',
  class: 'materialize'
}, {
  name: 'airbnb',
  href: 'https://github.com/airbnb/javascript',
  class: 'jsfengge'
}];

const exploreAnimate = () => {

  const explore = $('#fez-expand');
  if (explore.length > 0) {

    explore.waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        setTimeout(() => {
          explore.find('.to-animate').each(function(k) {
            const el = $(this);

            setTimeout(() => {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);

        setTimeout(() => {
          explore.find('.to-animate-2').each(function(k) {
            const el = $(this);

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

const counter = () => {
  $('.js-counter').countTo({
    formatter(value, options) {
      return value.toFixed(options.decimals);
    },
  });
};

const counterWayPoint = () => {
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
  $("#fez-expand").html(temp({ fezExtend: fezExtend }));
  exploreAnimate();
  counter();
  counterWayPoint();
}
