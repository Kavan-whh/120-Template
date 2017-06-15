module.exports = {
    entry: __dirname + '/app/js/main.js',
    output: {
        path: __dirname + "/public/js",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
            query: {//为loaders提供额外的设置选项（可选）
                // presets: ['es2015',"stage-2"],
                // 'plugins':['transform-runtime']//babel
            }
        }, {
            test: /\.scss/,
            //loader: 'style!css!sass',
            // Or
            loaders: ['style', 'css', 'sass']
        }]
    },

    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        port: 8081,
        // historyApiFallback: true, //不跳转
        // inline: true //实时刷新
    }
};
