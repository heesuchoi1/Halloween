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

	fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
    var y;
    y=300;
     
    ellipse(20,180,10,10);
    ellipse(120,80,15,15);

    fill(255,255,0,Math.abs(255-time2*255*2));
	//ellipse(210,300,100,Math.abs(50-time*100));
	anime(frame);
	frame=frame+0.1;
	if(frame >2){
		frame = 0;
	
	
	background(bg);

	}
}
function anime(f){
	if(f <1){
		frame1();
	}else if(f<2){
		frame2();
	}else{

	}
}


function frame1(){
	fill(255);
	ellipse(10,10,100,100);
}

function frame2(){
	fill(255,155,333);
	ellipse(100,10,100,100);
}
