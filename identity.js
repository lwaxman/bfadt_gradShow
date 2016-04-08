
var textMap; 

var sketchCount = 2;
var sketch = 0; 

var colour;//

var canvas; //document.getElementsByName("canvas")[0];
var ctx; // = canvas.getContext("2d");

var setup = function(){
	var c = createCanvas(window.innerWidth, window.innerHeight);
	c.parent('canvasIdentity');
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext("2d");

	colour = color('#FFF');

	textMap = renderMap(colour);
	
	sketch = 0; //floor(random(0, 3));
	console.log(sketch);

	if(sketch == 0 ){
		console.log("setup 0");
		sketch_0.setup();
	}else if(sketch == 1){
		console.log("setup 1");
		sketch_1.setup();
	}else if(sketch == 2){
		console.log("setup 2");
		sketch_2.setup();
	}
}

var draw = function(){
	// glitchBackground();
	if(sketch == 0){
		sketch_0.draw();
	}else if(sketch == 1){
		sketch_1.draw();
	}else if(sketch == 2){
		sketch_2.draw();
	}
}

var glitchBackground = function(){
	var bgColor; 
	if(random()>0.2){
		bgColor = "rgb(0, 0, 0)";
	}else{
		bgColor = "rgb(" + round(random(30)) +","+ round(random(30)) +","+ round(random(30)) +")";
	}
	console.log(bgColor);
	document.body.style.background = bgColor;
}

var renderMap = function(front){
	var g = createGraphics(width, height);
	g.textSize(width/15);
	g.textAlign(CENTER);
	// g.fill('cyan');
	// g.text("SUPERTRANSPOSITIONS", width/2-5, height/2);
	// g.fill('magenta');
	// g.text("SUPERTRANSPOSITIONS", width/2+2, height/2+2);
	g.fill("blue");
	g.rect(0, 0, width/2, height/2);
	// g.fill(front);
	// g.text("SUPERTRANSPOSITIONS", width/2, height/2);
	return g; 
}

var sketch_0 = {};
sketch_0.setup = function(){
	this.count = 15;
	this.segmentsX = [];
	this.segmentsW = [];
	this.segmentsPos = [];
	this.segmentsNeg = [];
	this.image = renderMap(colour);
	for(var i=0; i<this.count; i++){
		this.segmentsX[i] = round( random(100, width-100) );
		this.segmentsW[i] = round( random(width*0.05, width*0.08) );
		this.segmentsPos[i] = this.image.get(this.segmentsX[i], 0, this.segmentsW[i], height);
		this.segmentsNeg[i] = this.image.get(this.segmentsX[i]-this.segmentsW[i], 0, this.segmentsW[i], height);
	}
}
sketch_0.draw = function(){
	ctx.clearRect(0, 0, width, height);
	console.log(width, height);
	image(this.image, 0, 0, width, height);
	for(var i=0; i<this.count; i++){
		var mappedW = round( map(mouseX, 0, width, -this.segmentsW[i], this.segmentsW[i]) );
		ctx.clearRect(this.segmentsX[i], 0, mappedW, height);
		if(mappedW<0){
			image(this.segmentsNeg[i], this.segmentsX[i], 0, mappedW, height);	
		}else{
			image(this.segmentsPos[i], this.segmentsX[i], 0, mappedW, height);	
		}
	}
}


var sketch_1 = {};
sketch_1.setup = function(){
	this.count = 15;
	this.image = renderMap(colour);
	image(this.image, 0, 0, width, height);
}
sketch_1.draw = function(){
	this.slit = get(mouseX, 0, 10, height);
	// tint(255, 220);
	ctx.clearRect(mouseX, 5, 10, height);
	image(this.slit, mouseX, 5, 10, height);
}

var sketch_2 = {};
sketch_2.setup = function(){
	this.count = 15;
	this.image = renderMap(colour);
	image(this.image, 0, 0, width, height);
}
sketch_2.draw = function(){
	for(var i=0; i<3; i++){
		var randomX = round(random(0, width));
		this.slit = get(randomX, 0, 10, height);
		ctx.clearRect(randomX, 0, 10, height);
		image(this.slit, randomX, random(-10, 10), 10, height);
	}
}

var sketch_3 = {};
sketch_3.setup = function(){
	this.count = 15;
	this.image = renderMap(colour);
	image(this.image, 0, 0, width, height);
}
sketch_3.draw = function(){
	for(var i=0; i<3; i++){
		var randomX = round(random(0, width));
		this.slit = get(randomX, 0, 10, height);
		ctx.clearRect(randomX, 0, 10, height);
		image(this.slit, randomX, random(-10, 10), 10, height);
	}
}



