/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    
var yes = $("#block1id").offset().top;

var s_top=$(window).scrollTop();
var yesLes = $("#block3id").offset().top;
console.log(yes+"id"+"now"+s_top);
if(s_top > yes && s_top <yesLes){
console.log("Yes");
$(".textLine").slideDown(3000);
setTimeout(function(){
$(".imgback").animate({width:"300px",opacity:1,right:"200px"},1000);
}, 1000);
setTimeout(function(){
$(".img-fluid.img").animate({width:"100%",opacity:1},2000);
}, 2000);
}
     
     
 
console.log(yes);
if(top>700){
$(".fixed").slideDown(1000);


}
if (top>8069) {
$(".block11").css("display","block")
}
if (top<8069) {
$ (".block11").css("display","none")
}



if (top<3300){
$(".animation").animate({
left:"50px",
opacity:1,fontSize:"22px"
},2100);
}
else{
$(".fixed").slideUp(1000);
}
});
$(".container2").mousemove(function(){
var i=$(".container2").index(this);
console.log(i);
$(".container2").each(function(index){
if (i==index){
$(`.container2:eq(${i})`).css("color","red");
$(`.container2:eq(${i})`).css("background-color","pink");
$(`.red:eq(${i})`).css("color","white");
}
else{$(`.container2:eq(${index})`).css("color","black");
$(`.container2:eq(${index})`).css("background-color","white");
$(`.red:eq(${index})`).css("color","red");
}

});
});
$(".container3d").mousemove(function()
{
var i= $(".container3d").index($(this));

$(`.animations:eq(${i})`).addClass("transform");
$(`.animations:eq(${i})`).removeClass("transformBack");

});
$(".container3d").mouseleave(function()
{
var i= $(".container3d").index($(this));
$(`.animations:eq(${i})`).addClass("transformBack");
$(`.animations:eq(${i})`).removeClass("transform");


});
$(".container3dForChildren").mousemove(function()
{
var i= $(".container3dForChildren").index($(this));

$(`.animations:eq(${i})`).addClass("transform");
$(`.animations:eq(${i})`).removeClass("transformBack");

});
$(".container3dForChildren").mouseleave(function()
{
var i= $(".container3dForChildren").index($(this));
$(`.animations:eq(${i})`).addClass("transformBack");
$(`.animations:eq(${i})`).removeClass("transform");


});
$("h4").click(function(){
var i=$("h4").index(this);
$("h4").each(function(index){
if (i==index){
$(`h4:eq(${i})`).css("color","red");
$(`.answer:eq(${i})`).slideDown(1000);

}
else {
$(`h4:eq(${index})`).css("color","black");
$(`.answer:eq(${index})`).slideUp(1000);
}
});
});
var close=0;

$(document).ready(function(){
    
$(".bg").mousemove(function(e){

var offset = $(this).offset();
var relativeX = (e.pageX - offset.left);
var relativeY = (e.pageY - offset.top);
if(relativeX<150 && relativeY>50 &&relativeY<470 )
{

$('.imgBoy').css('transform-origin','(50%,50%)');
$('.imgBoy').css('transform','perspective(740px)rotateY(-5deg)');
$('.bg').css('transform-origin','(50%,50%)');
$('.bg').css('transform','perspective(740px)rotateY(-5deg)');


}
if(relativeX>450 && relativeY>50 &&relativeY<470 )
{

$('.imgBoy').css('transform-origin','(50%,10%)');
$('.imgBoy').css('transform','perspective(740px)rotateY(15deg)');
$('.bg').css('transform-origin','(0%,100%)');
$('.bg').css('transform','perspective(740px)rotateY(15deg)');



}
if(relativeY<50 )
{

$('.imgBoy').css('transform-origin','(50%,50%)');
$('.imgBoy').css('transform','perspective(740px)rotateX(5deg)');
$('.bg').css('transform-origin','(50%,50%)');
$('.bg').css('transform','perspective(740px)rotateX(5deg)');


}
if(relativeY>450 )
{

$('.imgBoy').css('transform-origin','(50%,50%)');
$('.imgBoy').css('transform','perspective(740px)rotateX(-5deg)');
$('.bg').css('transform-origin','(50%,50%)');
$('.bg').css('transform','perspective(740px)rotateX(-5deg)');


}
if(relativeY<450 && relativeY>350 )
{

$('.imgBoy').css('transform-origin','(50%,50%)');
$('.imgBoy').css('transform','perspective(740px)rotateX(0deg)');
$('.bg').css('transform-origin','(50%,50%)');
$('.bg').css('transform','perspective(740px)rotateX(0deg)');


} if(relativeY<450 && relativeY>350 || relativeX<450 &&relativeX>350 )
{

$('.imgBoy').css('transform-origin','(50%,50%)');
$('.imgBoy').css('transform','perspective(740px)rotateX(0deg)');
$('.bg').css('transform-origin','(50%,50%)');
$('.bg').css('transform','perspective(740px)rotateX(0deg)');


}


//alert("X: " + relativeX + " Y: " + relativeY);

});
$(".bg").mouseover(function()
{

$(".imgBoy").animate({width :'710px',height:'710px'});
$(".bg").animate({width :'710px',height:'710px'});
});

$(".bg").mouseleave(function(){

$('.imgBoy').css('transform-origin','(50%,50%)');



$('.imgBoy').css('transform','perspective(740px)rotateY(0deg)');

$('.bg').css('transform-origin','(50%,50%)');

$(".imgBoy").animate({width :'700px',height:'700px'});
$(".bg").animate({width :'700px',height:'700px'});

$('.bg').css('transform','perspective(700px)rotateY(0deg)');


});

});
$(document).ready(function(){
  $(".bg").mousemove(function(e){
      
       var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
  if(relativeX<150 && relativeY>50 &&relativeY<470 )
  {
      
      $('.imgBoy').css('transform-origin','(50%,50%)');
       $('.imgBoy').css('transform','perspective(740px)rotateY(-5deg)');
       $('.bg').css('transform-origin','(50%,50%)');
       $('.bg').css('transform','perspective(740px)rotateY(-5deg)');
        
      
  }
  if(relativeX>450 && relativeY>50 &&relativeY<470 )
  {
      
      $('.imgBoy').css('transform-origin','(50%,10%)');
       $('.imgBoy').css('transform','perspective(740px)rotateY(15deg)');
       $('.bg').css('transform-origin','(0%,100%)');
       $('.bg').css('transform','perspective(740px)rotateY(15deg)');
       
        
      
  }
   if(relativeY<50 )
  {
      
      $('.imgBoy').css('transform-origin','(50%,50%)');
       $('.imgBoy').css('transform','perspective(740px)rotateX(5deg)');
       $('.bg').css('transform-origin','(50%,50%)');
       $('.bg').css('transform','perspective(740px)rotateX(5deg)');
        
      
  }
  if(relativeY>450 )
  {
      
      $('.imgBoy').css('transform-origin','(50%,50%)');
       $('.imgBoy').css('transform','perspective(740px)rotateX(-5deg)');
       $('.bg').css('transform-origin','(50%,50%)');
       $('.bg').css('transform','perspective(740px)rotateX(-5deg)');
        
      
  }
  if(relativeY<450 && relativeY>350  )
  {
      
      $('.imgBoy').css('transform-origin','(50%,50%)');
       $('.imgBoy').css('transform','perspective(740px)rotateX(0deg)');
       $('.bg').css('transform-origin','(50%,50%)');
       $('.bg').css('transform','perspective(740px)rotateX(0deg)');
        
      
  } if(relativeY<450 && relativeY>350 || relativeX<450 &&relativeX>350 )
  {
      
      $('.imgBoy').css('transform-origin','(50%,50%)');
       $('.imgBoy').css('transform','perspective(740px)rotateX(0deg)');
       $('.bg').css('transform-origin','(50%,50%)');
       $('.bg').css('transform','perspective(740px)rotateX(0deg)');
        
      
  }
  
 
  //alert("X: " + relativeX + "  Y: " + relativeY);
    
  });
  $(".bg").mouseover(function()
  {
      
    $(".imgBoy").animate({width :'710px',height:'710px'});  
     $(".bg").animate({width :'710px',height:'710px'});  
  });
  
  $(".bg").mouseleave(function(){
      
    $('.imgBoy').css('transform-origin','(50%,50%)');
   
   
    
       $('img').css('transform','perspective(740px)rotateY(0deg)');
      
    $('.bg').css('transform-origin','(50%,50%)');
    
    $(".imgBoy").animate({width :'700px',height:'700px'});  
     $(".bg").animate({width :'700px',height:'700px'}); 
    
       $('.bg').css('transform','perspective(740px)rotateY(0deg)');
       
       
  });
  
});
 $(".garbr1").mouseover(function(){
   var index=$(".garbr1").index(this);
   $(`.garbr1:eq(${index})`).css("background","yellow");
   
 });
 $(".garbr1").mouseleave(function(){
   var index=$(".garbr1").index(this);
   $(`.garbr1:eq(${index})`).css("background","whitesmoke");
   
 });
 
 $(".rb2").mouseover(function()
         {
     var index=$(".rb2").index(this);
     $(`.rb2:eq(${index})`).css("background","#ff822e");
    
         });
          $(".rb2").mouseleave(function()
         {
     var index=$(".rb2").index(this);
     $(`.rb2:eq(${index})`).css("background","white");
    
         });
       
$(".container3d").mousemove(function()
        
        
{
    var i=$(".container3d").index(this);
   $(`.animations:eq(${i})`).addClass("transform");
   $(`.animations:eq(${i})`).removeClass("transformBack");
   
    
});
$(".container3d").mouseleave(function()
        
        
{
    var i=$(".container3d").index(this);
   $(`.animations:eq(${i})`).addClass("transformBack");
   $(`.animations:eq(${i})`).removeClass("transform");
    
});
         
/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

