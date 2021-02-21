$.extend({
loadScript:function(src,onload){
var js=document.createElement("script");
js.src=src;
js.onload=onload;
document.head.appendChild(js)
},
allElements:function(selector,code){
var array=document.querySelectorAll(selector);
for(i=0;i<array.length;i++){
code(array[i])
}
},
isMobile:function(){
var mobileua=["android","ios"];
alert(mobileua[0])
}
});
