$("[data-img=img1]").css("background","#00f")
$("#ul1>li").click(function(){
var $li=$(this)
  $(".gg>img").css("display","none")
  $(".gg1>div").css("display","none")
  $li.parent().children().css("background","rgba(0,0,0,0.3")
  $li.css("background","#00f")
  var $img=$li.attr("data-img")
  console.log($img)
  $("#"+$img).css("display","block")
  $(`[data-id=`+$img+"]").css("display","block")
  console.log(123)
})

