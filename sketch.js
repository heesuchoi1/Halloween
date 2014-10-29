var bg;
var a=[];
var frame;
function setup(){


	createCanvas(420,600);
	frame = 0;
	bg = loadImage("BG.png");
}

function draw(){


	var time = (new Date()%3000)/3000;
	var time2 = (new Date()%100)/100;

	noStroke();

	//별//
	fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
    var y;
    y=300;
     
    ellipse(20,180,10,10);
    ellipse(120,80,15,15);
    ellipse(190,50,5,5);
    ellipse(300,150,10,10);
    ellipse(360,300,5,5);
    ellipse(380,400,10,10);



    //움직이기//
    fill(255,255,0,Math.abs(255-time2*255*2));
	ellipse(210,300,100,Math.abs(50-time*100));
	anime(frame);
	frame=frame+0.1;
	if(frame >2){
		frame = 0;
	

	background(bg);

	}
}
function anime(f){
	if(f<1){
		frame1();
	}else if(f<2){
		frame2();
	}else{

	}
}


function frame1(){
	fill(255);
	drawBat1(60,70,5)
}

function frame2(){
	fill(255,155,333);
	ellipse(60,70,100,100);
}

function drawBat1(x,y,a){
triangle(105,85,65,125,115,95);
triangle(125,65,80,125,80,120);
triangle(80,120,95,115,90,125);
triangle(105,95,115,95,115,105);
triangle(115,95,120,105,110,110);
triangle(105,105,115,105,110,110);
triangle(100,115,110,110,115,140);
triangle(110,110,115,115,110,125);
triangle(110,120,115,125,115,140);
}