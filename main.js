var tip="Welcome to my personal page!";
var cmd=["ls -ah","surf https://blog.yucho258.tk","cat /etc/issue"];
var works=["Nothing","Nothing"];
var action={
  clear:function(){
    mainElement.innerHTML="";
  },
  showWelcomePage:function(){
    mainElement=document.getElementById("main");
    action.clear();
    var animateInterval=setInterval(function(){
      if(animate_n<tip.length){
        animate_c+=tip[animate_n];
        mainElement.innerHTML=`<div class="typing">${animate_c}</div>`;
        animate_n++;
        
      }else{
        mainElement.innerHTML=`<span class="typed">${tip}</span>`;
        setTimeout(function(){
          mainElement.innerHTML+=`</br></br><div class="select">View my works</div><div class="select">See my blog</div><div class="select">About me</div><center>&copy;202 Yucho</center>`;
          action.setSelectClick(function(id){
            if(id==0){
              action.showWorks();
            }else if(id==1){
              action.showCmdTypingAnimation(cmd[1],function(){
                mainElement.innerHTML+='Opening link...<div class="select" onclick="action.showWelcomePage();">[Back]</div>';
                action.go("https://blog.yucho258.tk");
            });
            }else if(id==2){
              action.showCmdTypingAnimation(cmd[2],function(){
                mainElement.innerHTML+='<div>There is nothing.</div><div class="select" onclick="action.showWelcomePage();">[Back]</div>';
              })
            }
          });
          var animate_n=0;
          var animate_c="";
        },300);
        clearInterval(animateInterval);
      }
    },100);
  },
  showCmdTypingAnimation:function(command,onComplete){
    this.clear();
    var sw_n=0;
    var sw_b='<span style="color:green;margin-right:10px">$</span>';
    var sw_c="";
    var int=setInterval(function(){
      if(sw_n<command.length){
        sw_c+=command[sw_n];
        mainElement.innerHTML=sw_b+`<span class="typing">${sw_c}</span>`;
        sw_n++;
      }else{
        clearInterval(int);
        setTimeout(function(){
          onComplete();
        },300);
      }
    },100);
  },
  showWorks:function(){
    action.showCmdTypingAnimation(cmd[0],function(){
      mainElement.innerHTML+='<div>.</div>';
      mainElement.innerHTML+='<div>..</div>';
      mainElement.innerHTML+='<div class="select" onclick="action.showWelcomePage();">[Back]</div>';
      for(var i=0;i<works.length;i++){
        mainElement.innerHTML+=`<div class="select">${works[i]}</div>`;
      }
      var selectElement=document.getElementsByClassName("select");
    });
  },
  setSelectClick:function(onclic){
    var item=document.getElementsByClassName("select");
    for(i=0;i<item.length;i++){
      (function(id){
      item[id].onclick=function(){
        onclic(id);
        }
      })(i);
    }
  },
  go:function(url){
    window.open(url,'target','');
  },
  showProfiles:function(){
    
  }
}
var animate_n=0;
var animate_c="";
action.showWelcomePage()