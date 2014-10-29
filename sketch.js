
var bg;
var a=[];
var frame;
var r, g, b;
//var system;

function setup(){
	createCanvas(420,600);
	bg = loadImage("BG.png");
	frame = 0;
	//system = new ParticleSystem(createVector(width/2, 50));
	r = random(255);
    g = random(255);
    b = random(255);
}

function draw(){
	background(bg);

	//drawCircle
	strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(210, 250, 200, 200);

	var time = (new Date()%2000)/2000;
	var time2 = (new Date()%1000)/1000;
	//system.addParticle();
  	//system.run();

	noStroke();

//호박	
fill(0);
ellipse(275,480,35,35);
ellipse(310,480,40,40);

 fill(255,255,0,Math.abs(255-time2*255*2));
triangle(260,475,275,480,270,480);
triangle(285,475,285,480,280,480);
rect(270,485,15,5);
triangle(300,470,300,475,305,475);
triangle(320,470,320,475,315,475);
rect(300,480,20,5);

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
rect(mouseX+95,mouseY+35,5,5);
rect(mouseX+40,mouseY+35,5,5);
rect(mouseX+60,mouseY+40,5,5);
rect(mouseX+75,mouseY+40,25,5);
rect(mouseX+105,mouseY+40,10,5);
rect(mouseX+65,mouseY+45,40,5);
rect(mouseX+65,mouseY+50,15,5);
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
rect(mouseX+140,mouseY+115,40,5);
rect(mouseX+140,mouseY+120,50,5);
rect(mouseX+145,mouseY+125,35,5);
rect(mouseX+145,mouseY+130,40,5);
rect(mouseX+145,mouseY+135,50,5);
rect(mouseX+150,mouseY+140,40,5);
rect(mouseX+150,mouseY+145,15,5);
rect(mouseX+170,mouseY+145,10,5);
rect(mouseX+190,mouseY+145,5,5);
rect(mouseX+160,mouseY+150,5,5);
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
rect(mouseX+110,mouseY+75,45,5);
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
rect(mouseX+110,mouseY+85,20,5);
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
//	

//따라다니는 별


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


/*
    //움직이기//
    fill(255,255,0);
	ellipse(110,270,20,Math.abs(20-time*20));
	anime(frame);
	frame=frame+0.1;
	if(frame >2){
		frame = 0

	}*/
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
	fill(100);
	drawBat1(60,70,75,85);
}

function frame2(){
	fill(100);
	drawBat2(60,70,10,25);
}

function drawBat1(x,y,w,h){
triangle(125,65,105,85,115,95);
triangle(125,65,125,80,115,80);
triangle(120,75,125,90,115,95);
triangle(105,95,115,95,115,105);
triangle(105,105,115,105,115,110);
triangle(115,95,120,105,110,110);
triangle(100,115,110,110,115,140);
triangle(110,110,115,115,115,125);
triangle(110,120,115,125,140,115);
}

function drawBat2(x,y,w,h){
triangle(120,75,105,85,115,95);
triangle(120,75,125,90,115,95);

triangle(105,95,115,95,115,105);
triangle(105,105,115,105,115,110);
triangle(115,95,120,105,110,110);

triangle(100,115,110,110,110,125);
triangle(110,110,115,115,115,125);
}

/*
// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.get();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.get();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
*/

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 300) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}