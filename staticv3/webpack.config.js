module.exports = {
    entry: __dirname + '/app/js/index.js',
    output: {
        path: __dirname + "/public/js",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: /src/
            }, {
                test: /\.scss/,
                //loader: 'style!css!sass',
                // Or
                loaders: ['style', 'css', 'sass']
            }
        ]
    },

    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        port: 8081,
        // historyApiFallback: true, //不跳转
        // inline: true //实时刷新
    }
};
