// function login(){
//   //创建异步对象
//   var xhr=new XMLHttpRequest();
//   xhr.onreadystatechange=function(){
//     if (xhr.readyState==4 && xhr.status==200)
//     {
//       var result=xhr.responseText;
//       console.log(result)
//     }
//   }
//   var url="/dgms/tianjia?yname="+yname.value+"&ypwd="+upwd.value
//   +"&phone="+phone.value;
//   xhr.open("get",url,true);
//   xhr.send(null);
// }
$(".put_1").focus(function(){
  $(this).next().addClass("span_block")
  console.log($(this).next())
})
$(".put_1").blur(function(){
  $(this).next().removeClass("span_block")
  console.log($(this))
})


var qqq=/^(\d{1,9})|([a-zA-Z]{1,9})|\W{1,9}$/
var www=/^(\d{1,9})([a-z]{1,9})$/
var eee=/^(\d{1,9})([a-zA-Z]{1,9})(\W{1,9})$/

$("#put-tskuang").focus(function(){
  $(this).prev().addClass("tsk-block")
})
$("#put-tskuang").blur(function(){
  $(this).prev().removeClass("tsk-block")
  // console.log($(this).prev())
})
$("#put-tskuang").change(function(){
  // e.stopPropagation()
  $put=$(this)
  console.log($(this))
  console.log($("#xiaolvge").next())
  if(qqq.test($put.val())==true){
    console.log(1);
    $("#xiaolvge").css("background-color","#0f0") 
    if(www.test($put.val())==true){
      console.log(2)
      $("#xiaolvge").next().css("background","#0f0");
      var test=$("#put-tskuang");
      test.onchange=function(){
        console.log("test");
        if(eee.test($put.val())==true){
          console.log(3)
          $("#xiaolvge").next().next().css("background","#0f0")
        }
      }
    }  
  }else{
    $("#xiaolvge").css("background","#ccc")
  }   
})






























