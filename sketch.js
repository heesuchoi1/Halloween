var bg;
var a=[];
var frame;
function setup(){

	bg = loadImage("BG.png");
	createCanvas(420,600);
	frame = 0;
}

function draw(){

	//var time = (new Date()%3000)/3000;
	//var time2 = (new Date()%100)/100;
	background(bg);
	noStroke();

	fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
     var y;
     y=300;
     
     rect(20,180,1,1);
     rect(120,80,15,15);
}
