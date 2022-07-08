import $ from 'jquery'

/**
 * 顶部导航
 */
import header from './module/header'


/**
 * 首屏幕
 */
import home from './module/home'


/**
 * 功能架构
 */
import architecture from './module/architecture'

/**
 * 核心理念
 */
import coreIdea from './module/core-idea'


/**
 * 测试及部署
 */
import Deploy from './module/deploy'


/**
 * bootstrap 整合提示
 */
import Fezui from './module/fezui'


/**
 * FEZ扩展
 */
import fezExpand from './module/expand'


/**
 * 我们的团队
 */
// import team from './module/team'
// team()

/**
 * 页脚版权
 */
import footer from './module/footer'


// iPad and iPod detection
// const isiPad = () => {
//   return (navigator.platform.indexOf("iPad") != -1)
// }

// const isiPhone = () => {
//   return (
//     (navigator.platform.indexOf("iPhone") != -1) ||
//     (navigator.platform.indexOf("iPod") != -1)
//   )
// }


header()
home()
architecture()
coreIdea()
Deploy()
Fezui()
fezExpand()
footer()
/**
 * 视差滚动 Parallax
 */
$(window).stellar()

// requres and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('static/svg', true, /\.svg$/)
requireAll(req)

/**
 * 百度统计代码
 */
// var _hmt = _hmt || []
// (function() {
//   var hm = document.createElement("script")
//   hm.src = "https://hm.baidu.com/hm.js?3964428bb56a8f0685d39fafdcf57693"
//   var s = document.getElementsByTagName("script")[0]
//   s.parentNode.insertBefore(hm, s)
// })()
