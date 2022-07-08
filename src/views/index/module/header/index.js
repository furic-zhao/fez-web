import Temp from './index.hbs'

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
}]

// Page Nav
const clickMenu = () => {

  $('#js-navbar a:not([class~="external"])').click(function(event) {
    event.preventDefault()
    const section = $(this).data('nav-section')
    const navbar = $('#js-navbar')

    if ($('[data-section="' + section + '"]').length) {
      $('html, body').animate({
        scrollTop: $('[data-section="' + section + '"]').offset().top - 0
      }, 500)
    }

    if (navbar.is(':visible')) {
      navbar.removeClass('in')
      navbar.attr('aria-expanded', 'false')
      $('.js-fez-nav-toggle').removeClass('active')
    }
  })
}

// Burger Menu
const burgerMenu = () => {

  $('body').on('click', '.js-fez-nav-toggle', function(event) {

    event.preventDefault()

    if ($('#js-navbar').is(':visible')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }

  })
}


// Reflect scrolling in navigation
const navActive = function(section) {

  var $el = $('#js-navbar > ul')
  $el.find('li').removeClass('active')
  $el.each(function() {
    $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active')
  })

}

const navigationSection = function() {

  const $section = $('section[data-section]')

  $section.waypoint(function(direction) {
    const scrlTop = $(document).scrollTop()
    if (direction === 'down' && scrlTop > 30) {
      navActive($(this.element).data('section'))
    }
  }, {
    offset: '60px'
  })

  $section.waypoint(function(direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'))
    }
  }, {
    offset: function() {
      return -$(this.element).height() + 60
    }
  })
}

const headerRoom = () => {
  const headroom = new Headroom($('#js-fez-header')[0], {
    offset: 205,
    tolerance: 5,
    classes: {
      initial: 'animated',
      pinned: 'slideInDown',
      unpinned: 'slideOutUp'
    }
  })
  // initialise
  headroom.init()
}

export default () => {
  $('#js-fez-header').html(Temp(navList))
  headerRoom()

  clickMenu()
  burgerMenu()
  navigationSection()
}
