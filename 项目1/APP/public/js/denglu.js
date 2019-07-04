$(function () {
  //获得地址栏中?后的查询字符串部分，按等号一分为二，取后半部分。
  // var lid=location.search.split("=")[1];
  //只有地址栏中提供了lid时，才发送请求 
  $("#button").click(function () {
    var nam = $("#name").val()
    var pwd = $("#pwd").val()
    console.log(nam,pwd)
    // if(lid!==undefined){
    $.ajax({
      url: "http://localhost:8080/dgms/denglu",
      type: "post",
      data:{
        qq:nam,
        ww:pwd
      },
      dataType: "json",
      success: function (result) {
        console.log(result)
        if(result.code==1){
          sessionStorage.setItem("nam2",nam)
          sessionStorage.setItem("pwd2",result.data)
          alert("登陆成功")
        }else{
          alert("用户名或密码错误！")
        }
      }
    })
  })

  // }
})