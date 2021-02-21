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
var mobile=["android","ios","strawberry"];
for(i=0;i<mobile.length;i++){
if(window.navigator.userAgent.toLowerCase().indexOf(mobile[i])>-1){
var ismobi=true
}
}
if(ismobi==true){
return true;
}else{
return false;
}
}
});
