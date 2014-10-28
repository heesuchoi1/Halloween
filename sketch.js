var bg;
var a=[];
var frame;
function setup(){
	bg = loadImage("BG.png");
	createCanvas(420,600);
	noCursor();
	frame = 0;
}

function draw(){

	//var time = (new Date()%3000)/3000;
	//var time2 = (new Date()%100)/100;
	background(bg);
	noStroke();
	fill(255);
	ellipse(mouseX,mouseY,10,10);
	//drawTest(mouseX,mouseY,100,100);

}

/*function drawTest(x,y,w,h){
	loadImage("test.png")
}*/