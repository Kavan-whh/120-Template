var express = require('express');

var app = express();
var PORT=4000;
app.listen(PORT);

 

var _rootDir = __dirname;// 本电脑当前文件绝对路径

app.use(express.static(_rootDir + '/output/'));// 指向服务器根页面

 
//注册路由
app.get('/', function(req, res){

    res.sendFile(_rootDir+'/output/index.html');

});


app.use(function(req, res, next) {

     res.status(404).sendFile(_rootDir+'/src/404.html');

});

app.use(function(err, req, res, next) {

     console.error(err.stack);

     res.status(500).send('500 Error');

});

console.log('Your server is running at'+PORT+'!');