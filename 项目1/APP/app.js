const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/dgms.js');
const cors=require("cors");
const session=require('express-session');
//创建web服务器
var server=express();
server.listen(8080);

server.use(session({
  secret:"sessiontest",
  resave:true,
  saveUninitialized:true
}))
server.use(cors({
  origin:"http://127.0.0.1:5501"
}))
//托管静态资源到public目录下
server.use( express.static('public') );

//使用body-parser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );
//挂载路由器， 挂载到/user  路由访问  /user/reg
server.use( '/dgms',userRouter );
//商品路由器挂载到/product下
