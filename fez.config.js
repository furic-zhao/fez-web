export default {
  /* ==================================
   * @ 2017 FEZ 前端模块工程自动化构建工具
   * https://github.com/furic-zhao/fez
   * ================================== */

  useWebp: {
    available: false,
    options: {
      quality: 75, //将质量因子设置为0到100。
      alphaQuality: 100, //将透明度 - 压缩质量设置为0到100。
      method: 4, //指定要使用的压缩方法，介于0（最快）和6（最慢）之间。此参数控制编码速度与压缩文件大小和质量之间的折衷。
      sns: 80, //设置空间噪声整形的幅度在0和100之间
      lossless: false //无损编码图像
    }
  },

  useMd5: {
    options: {
      dontRenameFile: [".html", ".php", "fez-logo.png"]
    }
  },

  sftp: {
    host: "47.93.4.1",
    port: "22",
    user: "root",
    password: "zhj13811869208B*!",
    remotePath: "/data/wwwroot/fez.hestudy.com",
    includeHtml: true
  },

  useInject: {

    bower: {
      available: true,
      js: [{
        target: "a-vendor-jquery-bootstrap.js",
        contain: ["**/jquery.js", "**/bootstrap.js"]
      }],
      css: [{
        target: "vendor-bootstrap.css",
        contain: ["**/bootstrap.css"]
      }]
    },

    lib: {
      available: true,
      js: [{
        target: "a-common-threejs.js",
        contain: ["**/three.min.js"]
      }]
    },

    views: true
  },
  svgSymbol: {
    available: true,
    autoInject: true
  }
}
