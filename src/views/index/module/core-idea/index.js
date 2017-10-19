import temp from './index.hbs';

var trustedAnimate = function() {
    var trusted = $('#m-modularity');
    if (trusted.length > 0) {

        trusted.waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                var sec = trusted.find('.to-animate').length,
                    sec = parseInt((sec * 200) + 400);

                setTimeout(function() {
                    trusted.find('.to-animate').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, 200);

                setTimeout(function() {
                    trusted.find('.to-animate-2').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('bounceIn animated');
                        }, k * 200, 'easeInOutExpo');

                    });
                }, sec);


                $(this.element).addClass('animated');

            }
        }, { offset: '80%' });

    }
};

var blogAnimate = function() {
    var footer = $('#m-promise');
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
let renderData = {
    moduleViews: `
views
├── page1
│   ├── index.html
│   ├── index.js
│   └── module
│       ├── module1
│       │   ├── index.js
│       │   ├── index.hbs
│       │   └── service.js
│       ├── module2
│       │   ├── index.vue
│       │   └── service.js
│       └── module3
│           ├── index.js
│           ├── module3-1
│           │   ├── index.js
│           │   └── service.js
│           └── module3-2
│               ├── index.vue
│               └── service.js
└── page2
    ├── index.html
    ├── index.js
    └── module
        ├── module1
        ├── module2
        └── module3
    `,
    moduleStyles: `
static
└── styles
    ├── page1
    │   ├── module1.less
    │   ├── module2.less
    │   └── module3.less
    ├── page1.less
    ├── page2
    │   ├── module1.scss
    │   ├── module2.scss
    │   └── module3.scss
    └── page2.scss
    `,
    moduleImages: `
static
└── images
    ├── page1
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── folder
    │   │   ├── 1.png
    │   │   ├── 2.png
    │   │   └── 3.png
    └── page2

    `,
    promiseService: `
//文件：service.js

import Api from 'api-ajax';

export default {
    productList: (params = {}) => {
        return new Promise((resolve, reject) => {
            Api.get(url, params)
                .then((data) => {
                    //... 处理 data 为需要的格式
                    resolve(data);
                }, function(error) {
                    reject(error);
                });
        });
    },
    productNameById: (id) => {
        return new Promise((resolve, reject) => {
            let data = ... //根据 id 处理 data 数据并重新组装
            resolve(data);
        });
    }
}
    `,
    promiseModule: `
//文件：module.js

import Service from 'service';

Service.productList(params)
    .then((data) => {

        //渲染并处理 data 数据
        //从 data 中获取id 传给下一个函数执行

        return Service.productNameById(id);
    }, function(error) {

        //处理 error
    })
    .then((data) => {

        //渲染 data 数据
    })
    .catch(function(error) {

        // 处理error
    })
    `
};
export default () => {
    $("#fez-trusted").html(temp(renderData));
    trustedAnimate();
    blogAnimate();
}
