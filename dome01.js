
/*  
1/响应头案例        知识点 js   indexof
    node没有web容器的概念
url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
2、模块     exports  module.exports   node_modules
3、模块引擎 ejs jade    art-template

*/

var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

http.createServer((req,res)=>{

    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
   

//判断在地址栏里面输入的是文件地址还是文件夹地址
    if(pathname.indexOf(".")==-1){
        pathname+="index.html"
    }
 //./static/index.html
//取到文件路径//http:127.0.0.1:3000

    var fileurl = "./"+path.normalize("./static"+pathname);
    console.log(fileurl);
    var extname = path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
        // res.writeHead(200,{"Content-type":"text/html;charser:utf-8"})
        console.log(data.toString())
        if (err) {
            res.end("404")
        }else{
            getmime(extname,(mime)=>{
                res.writeHead(200,{"Content-type":mime})
                res.end(data)
            })
        }
    })

}).listen(3000,"127.0.0.1")

function getmime(extname,callback){
    fs.readFile("./mime.json",(err,data)=>{
        var mimeJson = JSON.parse(data);//解析
        console.log(mimeJson)
        var mime = mimeJson[extname] || "text/plain";
        callback(mime);
    })
}




