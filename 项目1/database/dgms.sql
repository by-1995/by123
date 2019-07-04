SET NAMES UTF8;

DROP DATABASE IF EXISTS dgms;

CREATE DATABASE dgms CHARSET=UTF8;

USE dgms;

create table lunbo(
	lid int PRIMARY KEY AUTO_INCREMENT, #编号
	tupian varchar(32)					#轮播图片路径
);
INSERT INTO lunbo VALUES(null,'img/01.jpg');
INSERT INTO lunbo VALUES(null,'img/02.jpg');
INSERT INTO lunbo VALUES(null,'img/03.jpg');
INSERT INTO lunbo VALUES(null,'img/04.jpg');

create table dgms_yh(
	yid int PRIMARY KEY AUTO_INCREMENT, #编号
	yname varchar(32),					#用户名称
	ypwd varchar(32),					#用户密码
	phone varchar(16)					#用户手机
);
INSERT INTO dgms_yh VALUES('null','dingding','123','13845692356');
INSERT INTO dgms_yh VALUES('null','dangdang','123','13956897689');
INSERT INTO dgms_yh VALUES('null','tuangtuang','123','13845692356');

create table dgms_mrcp(
	mid int PRIMARY KEY AUTO_INCREMENT, #编号
	caiming varchar(32),                #菜名
	neirong varchar(32),				#食品介绍
	img  varchar(32)					#图片详情
);
INSERT INTO dgms_mrcp VALUES('null','蔬菜鸡肉饼',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');
INSERT INTO dgms_mrcp VALUES('null','香菇排骨汤',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');
INSERT INTO dgms_mrcp VALUES('null','清蒸桂鱼',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');

create table dgms_mrbj(
	mid int PRIMARY KEY AUTO_INCREMENT, #编号
	mname varchar(32),                  #笔者
	neirong varchar(32),				#笔记内容
	img  varchar(32)					#图片详情
);
INSERT INTO dgms_mrbj VALUES('null','妞妞',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');
INSERT INTO dgms_mrbj VALUES('null','丫丫',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');
INSERT INTO dgms_mrbj VALUES('null','瓜瓜',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');
INSERT INTO dgms_mrbj VALUES('null','皮皮',' 蔬菜吸收了肉的鲜美，鸡肉汁锁在饼里，外脆里软','13845692356');











