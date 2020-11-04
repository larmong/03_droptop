// main script
$(function(){
    var $firstMenu = $('nav > ul > li'),
    $header =$('header');


$firstMenu.mouseover(function(){
    $header.stop().animate({height:'400px'},300);
})

$header.mouseleave(function(){
    $header.stop().animate({height:'100px'},300);
});


})