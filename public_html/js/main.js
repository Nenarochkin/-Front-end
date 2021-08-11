/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let openMenu=-1;
$(document).ready(function(){
    var degBefore=-95;
                var degAfter=95;
                 var f=-1;
    $(".bordersMini").click(function(){
 var height=window.innerHeight;
 // $(".miniMenu").css("height",height*2);
$(".miniMenu").slideToggle(2000);

       
  



                
              
             
;              
               f+=1;
           
             
               if(f%2===0)
               {   
                 
          $(`.borderMini`).eq(0).addClass("close3");
         $(`.borderMini`).eq(1).addClass("close4");
          
           $(`.close3`).removeClass("borderMini"); 
            $(`.close4`).removeClass("borderMini"); 
            $(`.r2`).removeClass("borderMini"); 
           var interval=setInterval(function()
           {
               degBefore++;
               degAfter--;
              $(".close3").css("transform","rotate("+degAfter+"deg)");
              $(".close4").css("transform","rotate("+degBefore+"deg)");
              if(degAfter==45)
              {
                  clearInterval(interval);
                    degBefore=-45;
               degAfter=45;
              }
           },10);
               }
               else{
                    
                   var interval=setInterval(function()
           {
               degBefore--;
               degAfter++;
              $(".close3").css("transform","rotate("+degAfter+"deg)");
              $(".close4").css("transform","rotate("+degBefore+"deg)"); 
              if(degAfter==95)
              {
                  clearInterval(interval);
                   $(`.close3`).addClass("borderMini");
         $(`.close4`).addClass("borderMini");
          $(`.r2`).addClass("borderMini");
           $(`.borderMini`).eq(0).removeClass("close3"); 
            $(`.borderMini`).eq(1).removeClass("close4"); 
             $(`.borderMini`).eq(0).css("transform","");
             $(`.borderMini`).eq(1).css("transform","");
           
            
                  degBefore=-95;
               degAfter=95;
              }
           },10);
                    
         
        }   
               
           }); 
    $(document).resize(function(){
      // var height=window.innerHeight;
       
  // $(".miniMenu").css("height",height*2);
  var width=$(window).innerWidth();
$(".imgBackgroundIndex").css("width",width+"px");

    });
    
   $('.dropdown-toggle').click(function(e){
    e.preventDefault();
     $('.dropdown-menu').slideToggle();
   });
  
  
  
    

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    //alert("Вы используете мобильное устройство (телефон или планшет).")
var close=-1;
  $(".dropDown").click(function(e)
                 
{
 e.preventDefault();
 close++;
 if(close%2==0){
     $(".drop").css("display","block");
 }
 else{
      $(".drop").css("display","none");
 }
 
    
});

$(".drop").click(function()
        
        
{
    $(".drop").css("display"," block");
    
    
});
} else{
            //alert("Вы используете ПК.");
    $(".dropDown").mouseover(function()
                 
{
 
   
    $(".drop").css("display","block");
});
$(".drop").mouseover(function()
                 
{
 
   
    $(".drop").css("display","block");
});

$(".drop").mouseleave(function()
        
        
{
    $(".drop").css("display"," none");
    
} );

}
});



$(document).ready(()=>{
    $(document).scroll(()=>{
    var open=$("#openFooter").offset().top;
   var He=$(document).scrollTop();
  
   if(open<He){
       $(".block10Footer").slideDown();//alert(He+": "+open);
       //alert(" H "+He+": openFooter Down"+openFooter);
       
   }
  

  if(open>He+500){
       $(".block10Footer").slideUp();
    //   alert(" H "+He+": openFooter UP"+openFooter);
   }
  
});


var width=$(window).innerWidth();
$(".imgBackgroundIndex").css("width",width+"px");
           var toPos=50;
            var toPos2=70;
            var toPos3=90;
            var toPos4=80;
             var deg = 20;;
              var deg2 = 20;;
              var deg3 = 20;;
              var deg4 = 20;;
              var opacity=0.3;
              var opacity2=0.3;
            var opacity3=0.3;
            var opacity4=0.3;
             var timerId= setInterval(function(){
                 
              
                  deg-=2;
                  opacity+=0.1;
                  toPos-=10;
                
                  if(deg >=0)
                  {
                   $('.kievSchoolVokalText').css('transform','skewY('+deg+'deg)');
                    $('.kievSchoolVokalText').css('top',toPos+'px');  
                    
                   $('.kievSchoolVokalText').css('opacity',opacity); 
                   
                  }
                  else
                  {
                      clearInterval(timerId);
                  }
              }, 50);
               setTimeout(function()
              {
                  var timerId= setInterval(function(){
                  deg2-=2;
                  toPos2-=10;
                 
                   opacity2+=0.1;
                  if(deg2 >=0)
                  {
                   $('.contentRideBlock').css('transform','skewX('+deg2+'deg)');
                    $('.contentRideBlock').css('top',toPos2+'px');
                     $('.contentRideBlock').css('opacity',opacity2); ;
                  }
                  else{
                     clearInterval(timerId); 
                  }
              }, 50);
              },1000);
               setTimeout(function()
              {
                  var timerId= setInterval(function(){
                  deg3-=2;
                  toPos3-=10;
                 
                   opacity3+=0.1;
                  if(deg3 >=0)
                  {
                   $('.probZanatieRideBlock').css('transform','skewX('+deg3+'deg)');
                    $('.probZanatieRideBlock').css('top',toPos3+'px');
                     $('.probZanatieRideBlock').css('opacity',opacity3); ;
                  }
                  else{
                     clearInterval(timerId); 
                  }
              }, 50);
              },2000);
               setTimeout(function()
              {
                  var timerId= setInterval(function(){
                  deg4-=2;
                  toPos4-=10;
                 
                   opacity4+=0.1;
                  if(deg4 >=0)
                  {
                  
                    $('.knopkaZapis').css('top',toPos4+'px');
                     $('.knopkaZapis').css('opacity',opacity4); ;
                  }
                  else{
                     clearInterval(timerId); 
                  }
              }, 50);
              },3000);
 var scaled=0;   
 let flag=true;
    function Scaled(){
     
        var interval=setInterval(function(){
            scaled+=0.1;
          if(flag){
          $(".scale3d").css("transform",`scale3d(${scaled},${scaled},1)`);
           if(scaled>=0.9){
               clearInterval(interval);
              flag=false;
              scaled=0;
           }
       }
        },2000);
    }
$(document).scroll(function(){
    
var top=$(window).scrollTop();
 s_top = $(document).scrollTop();
 var kartochka=$("#kartochka").offset().top;
 if(kartochka<top){
    
    Scaled(); 
 }
});
});
