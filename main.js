
var last_x,last_y;
var width=screen.width;
new_width=width-70 ;
new_height=screen.height-300;
if(width<962){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
currentX=e.touches[0].clientX-canvas.offsetLeft;
currentY=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.moveTo(last_x,last_y);
ctx.lineTo(currentX,currentY);
ctx.stroke();
last_x=currentX;
last_y=currentY;
}