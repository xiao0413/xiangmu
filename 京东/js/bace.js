
window.onload = function () {
  //  横幅 -------
  var web_top = document.getElementById("web_top")
  var i
  = document.querySelector("#web_top i");
  
  i.onclick = function(){
   web_top.style.display= "none";

  }



  var active = document.querySelector(".active");
  var box = document.querySelector(".box");

active.onmouseover= function(){

box.style.width = "1000px";

}
active.onmouseout= function(){
  
  box.style.width = "";
  
  }

//  --------------


  $(function () {
    
    var count = 0;
    var $lis = $(".slider li");
    
 
    $(".arrow-right").click(function () {
      count++;
      (count==$lis.length) &&(count=0);
      $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000)
    
  });
    $(".arrow-left").click(function () {
      
      count--;
      (count==$lis.length) &&(count=0);
      $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000)
    });
  });

  var slider = document.querySelector(".slider")
  var arrow = document.querySelector(".arrow")
  var timer = null;

 timer = setInterval(function () {
    $(".arrow-right").click();
    
  }, 2000);
  slider.onmouseover = function () {
    arrow.style.display = "block";
    console.log(1)
    clearInterval(timer);
    
  };
  
  slider.onmouseout = function () {
    arrow.style.display = "none";
    timer = setInterval(function () {
      $(".arrow-right").click(); 
    }, 2000);
  };


// ------------------------
$(function () {
  
  $("#ul_li li").mouseover(function () {

    var index = $(this).index();

    $(".yunDon li").eq(index).addClass("show").siblings().removeClass("show");
  })
})




//---------------------


$(function () {
  
  $(".banner_l li").mouseover(function () {

    var index = $(this).index();

    $(".banner_l_1 li").eq(index).show().siblings().hide();;
  })
  $(".banner_l").mouseout(function () {
    
        // var index = $(this).index();
    
        $(".banner_l_1 li").hide();
      })


})





};



