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
	


//마녀모자
fill(0);
rect(mouseX+75,mouseY,10,5);
rect(mouseX+70,mouseY+5,15,5);
rect(mouseX+60,mouseY+10,20,5);
rect(mouseX+55,mouseY+15,20,5);
rect(mouseX+50,mouseY+20,20,10);
rect(mouseX+35,mouseY+25,35,5);
rect(mouseX+40,mouseY+30,35,5);
rect(mouseX+55,mouseY+35,25,5);
rect(mouseX+65,mouseY+40,10,5);
//마녀머리
fill(225,98,50);
rect(mouseX+95,mouseY+30,5,5);
rect(mouseX+40,mouseY+35,5,5);
rect(mouseX+60,mouseY+40,5,5);
rect(mouseX+75,mouseY+40,25,5);
rect(mouseX+105,mouseY+40,10,5);
rect(mouseX+65,mouseY+45,40,5);
rect(mouseX+55,mouseY+50,10,5);
rect(mouseX+90,mouseY+50,10,5);
rect(mouseX+105,mouseY+50,5,5);
rect(mouseX+75,mouseY+55,5,5);
rect(mouseX+95,mouseY+55,5,10);
//마녀얼굴
fill(241,204,171);
rect(mouseX+45,mouseY+35,10,5);
rect(mouseX+45,mouseY+40,15,5);
rect(mouseX+35,mouseY+45,30,5);
rect(mouseX+45,mouseY+50,15,5);
rect(mouseX+45,mouseY+55,10,5);
//지팡이
fill(108,66,45);
rect(mouseX,50,10,5);
rect(mouseX+10,mouseY+55,5,5);
rect(mouseX+15,mouseY+60,10,5);
rect(mouseX+120,mouseY+105,10,5);
rect(mouseX+130,mouseY+110,10,5);
//빗자루솔
fill(155,118,54);
rect(mouseX+145,mouseY+110,15,5);
rect(mouseX+170,mouseY+110,20,5);
rect(mouseX+140,mouseY+115,140,5);
rect(mouseX+140,mouseY+120,50,5);
rect(mouseX+145,mouseY+125,35,5);
rect(mouseX+145,mouseY+135,50,5);
rect(mouseX+150,mouseY+140,40,5);
rect(mouseX+150,mouseY+145,15,5);
rect(mouseX+170,mouseY+145,10,5);
rect(mouseX+190,mouseY+145,5,5);
rect(mouseX+160,mouseY+160,5,5);
rect(mouseX+180,mouseY+150,10,5);
//손
fill(241,204,171);
rect(mouseX+25,mouseY+65,15,5);
rect(mouseX+30,mouseY+70,10,5);
rect(mouseX+35,mouseY+75,5,5);
//마녀옷
fill(0);
rect(mouseX+65,mouseY+55,10,5);
rect(mouseX+80,mouseY+55,5,5);
rect(mouseX+60,mouseY+60,30,5);
rect(mouseX+40,mouseY+65,55,5);
rect(mouseX+40,mouseY+70,70,20);
rect(mouseX+125,mouseY+70,5,5);
rect(mouseX+110,mouseY+75,35,5);
rect(mouseX+140,mouseY+70,15,5);
rect(mouseX+145,mouseY+65,15,5);
rect(mouseX+45,mouseY+80,110,5);
rect(mouseX+50,mouseY+80,90,5);
rect(mouseX+45,mouseY+90,105,5);
rect(mouseX+65,mouseY+95,70,5);
rect(mouseX+60,mouseY+100,40,5);
rect(mouseX+110,mouseY+100,15,5);
rect(mouseX+135,mouseY+100,5,5);
rect(mouseX+60,mouseY+105,10,5);
rect(mouseX+80,mouseY+105,20,5);
rect(mouseX+135,mouseY+105,10,5);
rect(mouseX+60,mouseY+110,15,5);
rect(mouseX+85,mouseY+110,15,5);
rect(mouseX+115,mouseY+60,10,5);
rect(mouseX+90,mouseY+115,5,5);
rect(mouseX+70,mouseY+120,10,5);
//마녀신발
fill(62,60,48);
rect(mouseX+70,mouseY+105,10,5);
rect(mouseX+75,mouseY+110,10,5);
rect(mouseX+80,mouseY+115,10,5);
rect(mouseX+80,mouseY+120,15,10);
rect(mouseX+80,mouseY+130,5,5);
rect(mouseX+70,mouseY+135,15,5);
rect(mouseX+90,mouseY+130,5,10);
rect(mouseX+100,mouseY+100,10,5);
rect(mouseX+100,mouseY+105,15,5);
rect(mouseX+105,mouseY+110,15,5);
rect(mouseX+105,mouseY+115,5,5);
rect(mouseX+115,mouseY+115,5,10);
rect(mouseX+100,mouseY+120,10,5);
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
	fill(0);
	drawBat1(60,70);
}

function frame2(){
	fill(255,155,333);
	drawBat2(60,70);
}

function drawBat1(x,y){
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

function drawBat2(x,y){
triangle(105,85,120,80,115,95);
triangle(80,120,95,115,90,125);
triangle(105,95,115,95,115,105);
triangle(115,95,120,105,110,110);
triangle(105,105,115,105,110,110);
triangle(100,115,110,110,110,125);
triangle(110,110,115,115,110,125);
}

function drawWitch(){

}