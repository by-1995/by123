
  var a=document.getElementsByClassName("a-caidan")[0];
  var d2=document.getElementById("d-caidan");
  
  console.log(a);
  console.log(d2);
//a.onclick=function(){
//	d2.style.height="550px";
//}
// d2.style.display="none";
d2.style.height="0px";


a.onmouseover=function(){
    d2.style.height="550px";
    // d2.style.display="block";
}
a.onmouseout=function(){
  d2.style.height="0px"
  // d2.style.display="none";
  
}
d2.onmouseover=function(){
    d2.style.height="550px";
    // d2.style.display="block";

}
d2.onmouseout=function(){
  d2.style.height="0px"
  // d2.style.display="none";
  
}
  
  
  

