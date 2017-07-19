
var fs=require('fs');
var path=require('path');
var mime=require('./mime').type;

module.exports=function(realPath,response){
    var extName=path.extname(realPath);
    //1检测是否存在
    fs.stat(realPath,function(err,stat){
        if(err){
            console.log('file is not exist');
            response.writeHead(404,{'Content-type':'text/plain'});
            response.write('请求的资源未找到');
            response.end();
        }else{//2读取
            fs.readFile(realPath,'binary',function(err,date){
                if(err){
                    console.log('文件读取错误');
                    response.writeHead(500,{'Content-type':'text/plain'});
                    response.write('读取文件出错');
                    response.end();
                }else{//3发文件
                    response.writeHead(200,{'Content-type':mime[extName]});
                    response.write(date,'binary');//用二进制写
                    response.end();
                }
            })
        }
    });
}