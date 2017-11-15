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
import Deploy from './module/deploy';
Deploy();

/**
 * bootstrap 整合提示
 */
import Fezui from './module/fezui';
Fezui();

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
// const isiPad = () => {
//   return (navigator.platform.indexOf("iPad") != -1);
// };

// const isiPhone = () => {
//   return (
//     (navigator.platform.indexOf("iPhone") != -1) ||
//     (navigator.platform.indexOf("iPod") != -1)
//   );
// };

/**
 * 视差滚动 Parallax
 */
$(window).stellar();

/**
 * 百度统计代码
 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3964428bb56a8f0685d39fafdcf57693";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
