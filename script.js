var obj =[
 {bg:"img/img1.jpg"},
 {bg:"img/img2.jpg"},
 {bg:"img/img3.jpg"},
 {bg:"img/img4.jpg"},
 {bg:"img/img5.jpg"}
];

var bcground = document.querySelector("#background");
var imgIdendx = 0;

setInterval(inicia,3000);


function inicia(){
    
    imgIdendx++;
    if( imgIdendx > 4){
         imgIdendx =0;
    }
  bcground.style.background = `linear-gradient(rgba(255, 0, 0, 0.4), rgba(255, 255, 0, 0.4),rgba(0,0,255,0.4)) ,url("${obj[imgIdendx].bg}")`;

}