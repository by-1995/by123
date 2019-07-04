$(function(){
  //获得地址栏中?后的查询字符串部分，按等号一分为二，取后半部分。
  // var lid=location.search.split("=")[1];
  //只有地址栏中提供了lid时，才发送请求
  // if(lid!==undefined){
    $.ajax({
      url:"http://localhost:8080/dgms/lunbo",
      type:"get",
      // data:{lid:1},
      dataType:"json",
      success:function(result){
        console.log(result)
        var url=result
        var html="";
        html+=`<!-- 1.轮播图片-->
        <div class="carousel-inner" >
            <div class="carousel-item ">
                <img class="w-100" src="${url[0].tupian}" alt=""/>
            </div>
            <div class="carousel-item active">
                <img class="w-100" src="${url[1].tupian}" alt=""/>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="${url[2].tupian}" alt=""/>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="${url[3].tupian}" alt=""/>
            </div>
        </div>
        <!-- 2.左右箭头 -->
         <a href="#demo" data-slide="next" class="carousel-control-next left">
            <
        </a> 
         <a href="#demo" data-slide="prev" class="carousel-control-prev right">
            >
        </a>
        <!-- 3.轮播指示符-->
         <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" ></li>
            <li data-target="#demo" data-slide-to="1" class="active"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
        </ul> `
        $("#demo").html(html);
        console.log($("#demo"))
      }
    })
  // }
})