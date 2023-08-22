setTimeout(() => {
        
    $(".loading").css("opacity","0");
    
}, 1);
setTimeout(() => {
        
    $(".loading").css("z-index","-1");
    
}, 1);

$(".pl1").on("click",function () {
    $("#title").css("background-image","linear-gradient(to left,rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url('images/5.jpg')");
    $(":root").css("--pcolor","#851d1b");
})

$(".pl2").on("click",function () {
    $("#title").css("background-image","linear-gradient(to left,rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url('images/1.jpg')");
    $(":root").css("--pcolor","#2A1537");
})

$(".pl3").on("click",function () {
    $("#title").css("background-image","linear-gradient(to left,rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url('images/4.jpg')");
    $(":root").css("--pcolor","#323826");
})

$(".pl4").on("click",function () {
    $("#title").css("background-image","linear-gradient(to left,rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url('images/7.jpg')");
    $(":root").css("--pcolor","#02243f");
})

$(".1").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i1.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".1").addClass("active");
});

$(".2").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i2.png");
        
    }, 200);
    
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    //$(".int1").addClass("nonhidden");
    $(".1").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".2").addClass("active");
});

$(".3").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i3.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".1").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".3").addClass("active");
});

$(".4").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i4.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".1").removeClass("active");
    $(".5").removeClass("active");
    $(".4").addClass("active");
});

$(".5").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i5.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".1").removeClass("active");
    $(".5").addClass("active");
});

$("li.nav-item").on("click",function(){
    $("div#navbarTogglerDemo02.navbar-collapse.ms-4.navi.collapse").removeClass("show");
});

const typeWriter = document.getElementById('type-text');
const text = 'Clubs';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga0').offset().top-wh){
        $('.ga0').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga1').offset().top-wh){
        $('.ga1').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga2').offset().top-wh){
        $('.ga2').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga3').offset().top-wh){
        $('.ga3').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga4').offset().top-wh){
        $('.ga4').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga5').offset().top-wh){
        $('.ga5').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-25;
      if($(window).scrollTop() > $('.ga6').offset().top-wh){
        $('.ga6').addClass('onScroll');
    }
});

$(window).scroll(function(){
    var wh = $(window).height()-20;
      if($(window).scrollTop() > $('.text').offset().top-wh){
        $('.text').addClass('onScroll');
    }
});
