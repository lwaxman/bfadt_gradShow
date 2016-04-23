/*
*
* Draws a letter in a circle. 
* Based on something seen on the internet.
*
* 08.04.2016
*
*/

var textString = "SLOTH";
var letters = []; 

var setup = function(){
	var c = createCanvas(windowWidth, windowHeight);
	c.parent('canvasIdentity');
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext("2d");
	pixelDensity(1); 
	noLoop();
	textSize(200);
	background(0);
	letters = textString.split("");
}

function draw(){
	fill("#000");
	stroke("#FFF");
	strokeWeight(2);

	for(i in letters){
		console.log(letters[i]);
		drawLetter(letters[i], i*250+100, (windowHeight/2)+150);
	}


}

var drawLetter = function(l, x, y){
	var r = 50; 
	var yPos = y-(r*2); 

	var lastx = x; 
	var lasty = yPos;

	var sA = 90; 
	var eA = 450;
	for(var i=sA; i<eA; i+=2){
		var px = x + (r * Math.cos( radians(i) ));
		var py = yPos + (r * Math.sin( radians(i) ));
		text(l, px, py+r);
		x = lastx; 
		yPos = lasty;
	}
}

var radians = function(number){
	return number * Math.PI/180;
}