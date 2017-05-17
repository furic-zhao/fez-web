/**
 * 顶部导航
 */
import header from './module/header';
header();

/**
 * 首屏幕
 */
import home from './module/home';
home();

/**
 * 功能架构
 */
import architecture from './module/architecture';
architecture();

/**
 * 核心理念
 */
import coreIdea from './module/core-idea';
coreIdea();

/**
 * 测试及部署
 */
import sourceDeploy from './module/source-deploy';
sourceDeploy();

/**
 * bootstrap 整合提示
 */
import bootstrap from './module/bootcss';
bootstrap();

/**
 * FEZ扩展
 */
import fezExpand from './module/fez-expand';
fezExpand();

/**
 * 我们的团队
 */
// import team from './module/team';
// team();

/**
 * 页脚版权
 */
import footer from './module/footer';
footer();

// iPad and iPod detection  
var isiPad = function() {
    return (navigator.platform.indexOf("iPad") != -1);
};

var isiPhone = function() {
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
};

/**
 * 视差滚动 Parallax
 */
var parallax = function() {
    $(window).stellar();
};

// Reflect scrolling in navigation
var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function() {
        $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
    });

};

var navigationSection = function() {

    var $section = $('section[data-section]');

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



// Document on load.
$(function() {
    parallax();
    navigationSection();
});

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?3964428bb56a8f0685d39fafdcf57693";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
