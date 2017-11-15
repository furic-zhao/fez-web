import temp from './index.hbs';

let tempData = {};
tempData.content1 = `
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>{{title}}</title>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="format-detection" content="telephone=no">
    <!-- inject:bower:css -->
    <!-- bower架库样式 -->
    <!-- endinject -->
    <!-- inject:lib:css -->
    <!-- 项目通用样式 -->
    <!-- endinject -->
    <!-- inject:views:css -->
    <!-- 页面样式 -->
    <!-- endinject -->
</head>

<body>
    <div id="app"></div>
    <!-- inject:bower:js -->
    <!-- bower框架库脚本 -->
    <!-- endinject -->
    <!-- inject:lib:js -->
    <!-- 项目通用脚本 -->
    <!-- endinject -->
    <!-- inject:views:js -->
    <!-- 页面脚本 -->
    <!-- endinject -->
</body>

</html>
`;

tempData.content2 = `
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>{{title}}</title>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="format-detection" content="telephone=no">
    <!-- inject:bower:css -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="bower_components/nprogress/nprogress.css">
    <link rel="stylesheet" href="bower_components/pnotify/dist/pnotify.css">
    <link rel="stylesheet" href="bower_components/datatables.net-bs/css/dataTables.bootstrap.css">
    <link rel="stylesheet" href="bower_components/datatables.net-responsive-bs/css/responsive.bootstrap.css">
    <link rel="stylesheet" href="bower_components/datatables.net-fixedcolumns-bs/css/fixedColumns.bootstrap.css">
    <link rel="stylesheet" href="bower_components/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css">
    <!-- endinject -->
    <!-- inject:lib:css -->
    <link rel="stylesheet" href="static/css/common.css">
    <!-- endinject -->
    <!-- inject:views:css -->
    <link rel="stylesheet" href="static/css/index.css">
    <!-- endinject -->
</head>

<body><script id="__bs_script__">//<![CDATA[
    document.write("<script async src='/browser-sync/browser-sync-client.js?v=2.18.8'><\/script>".replace("HOST", location.hostname));
//]]></script>

    <div id="app"></div>
    <!-- inject:bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/vue/dist/vue.js"></script>
    <script src="bower_components/nprogress/nprogress.js"></script>
    <script src="bower_components/pnotify/dist/pnotify.js"></script>
    <script src="bower_components/datatables.net/js/jquery.dataTables.js"></script>
    <script src="bower_components/datatables.net-bs/js/dataTables.bootstrap.js"></script>
    <script src="bower_components/datatables.net-responsive/js/dataTables.responsive.js"></script>
    <script src="bower_components/datatables.net-responsive-bs/js/responsive.bootstrap.js"></script>
    <script src="bower_components/moment/moment.js"></script>
    <script src="bower_components/moment/locale/zh-cn.js"></script>
    <script src="bower_components/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js"></script>
    <script src="bower_components/datatables.net-fixedheader/js/dataTables.fixedHeader.js"></script>
    <script src="bower_components/echarts/dist/echarts.js"></script>
    <!-- endinject -->
    <!-- inject:lib:js -->
    <script src="lib/bootstrap-tabdrop.js"></script>
    <script src="lib/product-picker.js"></script>
    <script src="lib/q.js"></script>
    <!-- endinject -->
    <!-- inject:views:js -->
    <script src="lib/assign-index-china.js"></script>
    <script src="static/js/index.js"></script>
    <!-- endinject -->
</body>

</html>
`;

tempData.content3 = `
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>{{title}}</title>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="format-detection" content="telephone=no">
    <!-- inject:bower:css -->
    <link rel="stylesheet" href="static/css/vendor-bootstrap.7707d705.css">
    <link rel="stylesheet" href="static/css/vendor-dataTables-bt.845ad633.css">
    <link rel="stylesheet" href="static/css/vendor-font-awesome.ead41108.css">
    <link rel="stylesheet" href="static/css/vendor.5aa8e503.css">
    <!-- endinject -->
    <!-- inject:lib:css -->
    <link rel="stylesheet" href="static/css/common.d3fcbc21.css">
    <!-- endinject -->
    <!-- inject:views:css -->
    <link rel="stylesheet" href="static/css/index.8edf9bab.css">
    <!-- endinject -->
</head>

<body>
    <div id="app"></div>
    <!-- inject:bower:js -->
    <script src="static/js/A-vendor-jquery-bootstrap-vue.7b774f3c.js"></script>
    <script src="static/js/vendor-dataTables.eb0e62bb.js"></script>
    <script src="static/js/vendor-echarts.bd6aefa4.js"></script>
    <!-- endinject -->
    <!-- inject:lib:js -->
    <script src="static/js/common-promise.34f596f9.js"></script>
    <script src="static/js/common.fb65cb00.js"></script>
    <!-- endinject -->
    <!-- inject:views:js -->
    <script src="static/js/assign-index-china.dbe62114.js"></script>
    <script src="static/js/index.832bfef8.js"></script>
    <!-- endinject -->
</body>

</html>

`;

tempData.content4 = `
/**
 * ***** html自动化注入文件 ***********
 * 【支持自定义打包多个文件到一个文件】
 * 【支持自定义打包单个文件】
 * 【未配置的文件自动打包成一个文件】
 * 【插入页面顺序以字母或数字降序排列-解决插入页面的脚本文件依赖关系】
 * 【打包顺序以文件配置先后降序排列-解决打包文件间的依赖关系】
 */
"useInject": {
    "bower": {
        "available": true, //启用 bower 文件自动化注入
        "js": [{
            "target": "A-vendor-jquery-bootstrap-vue.js",
            "contain": ["**/jquery.js", "**/bootstrap.js", "**/vue.js"]
        }, {
            "target": "vendor-dataTables.js",
            "contain": ["**/jquery.dataTables.js", "**/dataTables.bootstrap.js", "**/dataTables.responsive.js", "**/responsive.bootstrap.js", "**/dataTables.fixedColumns.js", "**/dataTables.fixedHeader.js"]
        }, {
            "target": "vendor-moment.js",
            "contain": ["moment/**/moment.js", "moment/**/zh-cn.js"]
        }, {
            "target": "vendor-echarts.js",
            "contain": ["**/echarts.js"]
        }],
        "css": [{
            "target": "vendor-bootstrap.css",
            "contain": ["**/bootstrap.css"]
        }, {
            "target": "vendor-font-awesome.css",
            "contain": ["**/font-awesome.css"]
        }, {
            "target": "vendor-dataTables-bt.css",
            "contain": ["**/dataTables.bootstrap.css", "**/responsive.bootstrap.css", "**/fixedColumns.bootstrap.css", "**/fixedHeader.bootstrap.css"]
        }]
    },
    /**
     * 【支持单个文件指定注入到某些页面（命名规则：assign-{页面名}-{页面名}-{other}】
     */
    "lib": {
        "available": true, //启用 公共 文件自动化注入
        "css": "*common*", //以common命名的样式文件会注入到所有的页面
        /**
         * 公共脚本文件
         */
        "js": [{
            "target": "common-promise.js",
            "contain": ["**/q.js"]
        }]
    },
    /**
     * 【支持src目录中的样式及编译后的逻辑脚本自动化注入到对应的页面】
     */
    "views": true //启用 业务目录 文件自动化注入
}
`;


const browsersyncAnimate = () => {
  const services = $('#m-browsersync');
  if (services.length > 0) {

    services.waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        let secLen = services.find('.to-animate').length;
        let sec = parseInt((secLen * 200) + 400);

        setTimeout(() => {
          services.find('.to-animate').each(function(k) {
            const el = $(this);

            setTimeout(() => {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);

        setTimeout(() => {
          services.find('.to-animate-2').each(function(k) {
            const el = $(this);

            setTimeout(() => {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, sec);


        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
};

/**
 * 部署模块动画
 */
const sourceDeployAnimate = () => {
  const trusted = $('#m-deploy');
  if (trusted.length > 0) {

    trusted.waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {

        let secLen = trusted.find('.to-animate').length;
        let sec = parseInt((secLen * 200) + 400);

        setTimeout(() => {
          trusted.find('.to-animate').each(function(k) {
            var el = $(this);

            setTimeout(() => {
              el.addClass('fadeIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);

        setTimeout(() => {
          trusted.find('.to-animate-2').each(function(k) {
            var el = $(this);

            setTimeout(() => {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, sec);


        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
};

const testimonialCarousel = () => {
  $('.owl-carousel-fullwidth').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    autoHeight: true,
    nav: true,
  });
};

export default () => {
  $("#fez-source-deploy").html(temp(tempData));
  sourceDeployAnimate();
  browsersyncAnimate();
  // testimonialCarousel();
}
