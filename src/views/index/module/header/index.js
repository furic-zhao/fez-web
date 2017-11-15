const navList = [{
  name: "FEZ",
  icon: "fa fa-home",
  section: "home",
  href: "#"
}, {
  name: "基本架构",
  icon: "fa fa-fort-awesome",
  section: "architecture",
  href: "#"
}, {
  name: "核心理念",
  icon: "fa fa-heartbeat",
  section: "core-idea",
  href: "#"
}, {
  name: "测试部署",
  icon: "fa fa-coffee",
  section: "source-deploy",
  href: "#"
}, {
  name: "功能扩展",
  icon: "fa fa-puzzle-piece",
  section: "fez-expand",
  href: "#"
}, {
  name: "下载使用",
  icon: "fa fa-github-square",
  section: "",
  href: "https://github.com/furic-zhao/fez",
  class: "external",
  target: "_blank"
}, {
  name: "FEZUI",
  icon: "fa fa-cubes",
  section: "",
  href: "http://fezui.hestudy.com",
  class: "external",
  target: "_blank"
}, {
  name: "APIDOC",
  icon: "fa fa-pencil-square-o",
  section: "",
  href: "http://apidoc.hestudy.com",
  class: "external",
  target: "_blank"
}, {
  name: "FEZMOCK",
  icon: "fa fa-dropbox",
  section: "",
  href: "http://fezmock.hestudy.com",
  class: "external",
  target: "_blank"
}];

import Temp from './index.hbs';

// Window Scroll
const windowScroll = () => {
  let lastScrollTop = 0;

  $(window).scroll(function(event) {

    const header = $('#fez-header');
    const scrlTop = $(this).scrollTop();

    if (scrlTop > 500 && scrlTop <= 2000) {
      header.addClass('navbar-fixed-top fez-animated slideInDown');
    } else if (scrlTop <= 500) {
      if (header.hasClass('navbar-fixed-top')) {
        header.addClass('navbar-fixed-top fez-animated slideOutUp');
        setTimeout(() => {
          header.removeClass('navbar-fixed-top fez-animated slideInDown slideOutUp');
        }, 100);
      }
    }

  });
};

// Page Nav
const clickMenu = () => {

  $('#navbar a:not([class="external"])').click(function(event) {
    event.preventDefault();
    const section = $(this).data('nav-section');
    const navbar = $('#navbar');

    if ($('[data-section="' + section + '"]').length) {
      $('html, body').animate({
        scrollTop: $('[data-section="' + section + '"]').offset().top - 55
      }, 500);
    }

    if (navbar.is(':visible')) {
      navbar.removeClass('in');
      navbar.attr('aria-expanded', 'false');
      $('.js-fez-nav-toggle').removeClass('active');
    }
  });
};

// Burger Menu
const burgerMenu = () => {

  $('body').on('click', '.js-fez-nav-toggle', function(event) {

    event.preventDefault();

    if ($('#navbar').is(':visible')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

  });
};


// Reflect scrolling in navigation
const navActive = function(section) {

  var $el = $('#navbar > ul');
  $el.find('li').removeClass('active');
  $el.each(function() {
    $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
  });

};

const navigationSection = function() {

  const $section = $('section[data-section]');

  $section.waypoint(function(direction) {

    if (direction === 'down') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: '150px'
  });

  $section.waypoint(function(direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: function() {
      return -$(this.element).height() + 155;
    }
  });

};


export default () => {
  $("#fez-header").html(Temp(navList));
  windowScroll();
  clickMenu();
  burgerMenu();
  navigationSection();
}
