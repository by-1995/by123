//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//注册路由接口
router.get("/tianjia",function(req,res){
  console.log(req.query)
  if(!req.query.yname){
    res.send({code:401,msg:'用户名 不能为空'});
  return;
  }
  else if(!req.query.ypwd){
    res.send({code:402,msg:'密码 不能为空'});
	return;
  }
  else if(!req.query.phone){
    res.send({code:404,msg:'手机 不能为空'});
	return;
  }
  pool.query('INSERT INTO dgms_yh SET ?',[req.query],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
	  res.send({code:200,msg:'添加成功'});
	}
  });
});
//轮播路由接口
router.get("/lunbo",function(req,res){
  // console.log(req.query);
  pool.query('select * from lunbo',function(err,result){
    if(err) console.log(err);
    res.send(result)
    console.log(result)
  })
})
//登录路由接口
router.post("/denglu",function(req,res){
  pool.query("select yname,ypwd from dgms_yh where yname=? and ypwd=?",[req.body.qq,req.body.ww],function(err,res2){
    if (err) throw err;
    if (res2.length>0){
      res.send({code:"1",msg:"denglu suc",data:res2[0].yname})
    }else{
      res.send({code:"0",msg:"denglu err",data:res2})
    }
  })
})




//导出路由器对象
module.exports=router;