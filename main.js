var x=0;
var y=0;
drawcircle="";
drawrect="";
 function setup(){
     canvas=createCanvas(900,600);
 }

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
 function start(){
     document.getElementById("status").innerHTML= "System is listening, please speak.";
     recognition.start();
 }
  recognition.onresult= function(event){
      console.log(event);
      var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as "+ content;
if (content=="circle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing circle";
    drawcirle="set";

}
if (content=="rectangle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing Rectangle";
    drawrect="set";
}
 
  }
function draw(){
    if (drawcircle=="set"){
    radius=Math.floor(Math.random()*100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML="circle has been drawn";
    drawcircle="";
    }
    if (drawrect=="set"){
        height=Math.floor(Math.random()*80);
        width= Math.floor(Math.random()*100);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="Rectangle has been drawn";
        drawrect="";
        }
}
