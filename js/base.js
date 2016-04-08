var textMap, colour, canvas, ctx; 
// var colour;
// var canvas;
// var ctx;

function setup(){
	var c = createCanvas(window.innerWidth, window.innerHeight);
	c.parent('canvasIdentity');
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext("2d");
	colour = color('#FFF');
	textMap = renderMap(colour);	
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