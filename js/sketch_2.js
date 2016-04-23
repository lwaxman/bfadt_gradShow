var textMap, canvas, ctx; 
var images = [];
var hhheight = 0; 
var offset; 
var mouseMotion = false;

var rep = 5; 
var cellSize = 50; 

var setup = function(){
	var c = createCanvas(windowWidth, windowHeight);
	c.parent('canvasIdentity');
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext("2d");
	pixelDensity(1); 

	hhheight = windowWidth/15; 
	rep = floor(windowHeight/hhheight)-1; 
	offset = (windowHeight/2) - (hhheight*rep)/2;
	textMap = renderMap();
	image(textMap, 0, 0);
}

var renderMap = function(){
	

	var g = createGraphics(windowWidth, hhheight);
	g.textSize(hhheight);
	g.textAlign(CENTER);
	g.fill("#F00");
	g.text("SUPERTRANSPOSITIONS", windowWidth/2+3, hhheight-5);
	g.fill("#0FF");
	g.text("SUPERTRANSPOSITIONS", windowWidth/2-2, hhheight-5+2);
	g.fill("#FFF");
	g.text("SUPERTRANSPOSITIONS", windowWidth/2, hhheight-5);

	var fullG = createGraphics(windowWidth, windowHeight);
	for(var i=0; i<rep; i++){
		fullG.image(g, 0, i*hhheight+offset, windowWidth, hhheight);	
	}
	return fullG;
}

var draw = function(){
	clear();
	image(textMap, 0, 0);
	
	var x = int(mouseX/cellSize)*cellSize; 
	var y = int(mouseY/cellSize)*cellSize; 

	ctx.clearRect(x, y, cellSize, cellSize);

	var block = textMap.get(x, y, cellSize, cellSize);

	push();
	translate(x, y);
	rotate( radians(90) );
	image(block, 0, -cellSize);
	pop();

	textMap = get(0, 0, windowWidth, windowHeight);
}

