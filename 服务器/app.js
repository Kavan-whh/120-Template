
var http=require('http');
var PORT=4000;
var fs=require('fs');
var url=require('url');
var path=require('path');

var mime=require('./module/mime').type;
var gotopage=require('./module/router');

var server=http.createServer(function(request,response){
    var pathName=url.parse(request.url).pathname;
    var realPath='./output'+pathName;
    gotopage(realPath,response);
});


server.listen(PORT);
console.log('Your server is running at'+PORT+'!');
