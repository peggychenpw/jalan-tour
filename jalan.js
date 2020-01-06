
$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('#btn-discover').click(function(){ 
        $('html,body').animate({scrollTop:$(".card").offset().top}, 500); 
        });  
    }); 
});



$(document).ready(function(){$(function(){$(".click-learn").click(function(){$("html,body").animate({scrollTop:$(".scroll-learn").offset().top},500)})})});




