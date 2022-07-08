/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

module.exports = {
  fontmin: [{
    ttf: 'HanYiLiLiangHeiJian.ttf',
    text: '前端模块化工程构建工具'
  }, {
    ttf: 'AaDongRiGuShi-2.ttf',
    text: '致力于为业务研发提供高效的工程化解决方案！'
  }, {
    ttf: 'HYXingQiuTiW.ttf',
    text: `帮助文档 FEZ
  基本架构
  核心理念
  测试部署
  功能扩展
  CYBMOCK
  Github
  前端模块化工程构建工具
  国际前沿的前端工程化架构
  使用文档
  主要特性
  完美支持三大应用框架生态
  业界先进的自动化工作流
  高效的前端资源处理
  模块化开发
  异步编程
  浏览器同步开发和测试
  部署发布
  FEZ 能量源源不断
  FEZ 概况
  Javascript
  CSS
  HTML
  Picture
  Fonts
  解决方案
  高效组织模块逻辑、提高代码运行效率
  About FEZ
  Connect
  Copyright
  cybertron
  JUI`
  }],

  merge: {
    vendor: {
      js: [{
        target: "jquery-bootstrap.js",
        contain: ["**/jquery.js", "**/bootstrap.js"]
      }],
      css: [{
        target: "bootstrap.css",
        contain: ["**/bootstrap.css"]
      }]
    },
    common: {
      js: [{
        target: "threejs.js",
        contain: ["**/three.min.js"]
      }, {
        target: "headroom.js",
        contain: ["**/headroom.js"]
      }]
    }
  },
  svgSprite: {
    options: {
      symbolId: 'fez-[name]'
    }
  },
  sftp: {
    host: "199.168.138.21",
    port: "26561",
    user: "root",
    password: "",
    remotePath: "/data/wwwroot/fez.hestudy.com",
    includeHtml: true
  }
}
