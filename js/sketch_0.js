var count = 15;
var rep = 5; 
// var segmentsX = [];
// var segmentsW = [];
// var segmentsPos = [];
// var segmentsNeg = [];
// var img = textMap;

var textMap, canvas, ctx; 
var images = [];
var hhheight = 0; 

var setup = function(){
	var c = createCanvas(windowWidth, windowHeight);
	c.parent('canvasIdentity');
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext("2d");
	pixelDensity(1); 
	textMap = renderMap();

	rep = floor(height/hhheight)-1; 

	for(var i=0; i<rep; i++){
		var temp = makeImageData();
		images.push( temp );
		// var tempImage = imageData(textMap, random(0, width),  random(width*0.05, width*0.08) );
		// console.log(tempImage.imageLeft);
		// image(tempImage.imageLeft, 500, 500);
		// segmentsX[i] = round( random(100, width-100) );
		// segmentsW[i] = round( random(width*0.05, width*0.08) );
		// segmentsPos[i] = textMap.get(segmentsX[i], 0, segmentsW[i], height);
		// segmentsNeg[i] = textMap.get(segmentsX[i]-segmentsW[i], 0, segmentsW[i], height);
	}
	console.log(images);
}

var renderMap = function(){
	hhheight = width/15; 
	var g = createGraphics(width, hhheight);
	g.textSize(hhheight);
	g.textAlign(CENTER);
	g.fill("#F00");
	g.text("SUPERTRANSPOSITIONS", width/2+3, hhheight-5);
	g.fill("#0FF");
	g.text("SUPERTRANSPOSITIONS", width/2-2, hhheight-5+2);
	g.fill("#FFF");
	g.text("SUPERTRANSPOSITIONS", width/2, hhheight-5);
	return g; 
}

var draw = function(){
	clear();
	var offset = height/2-((hhheight*rep)/2);
	for(var i=0; i<rep; i++){
		image(textMap, 0, i*hhheight+offset, textMap.width, hhheight);	
		for(var j=0; j<count; j++){
			var mappedW = round( map(mouseX, 0, width, -images[i][j].w, images[i][j].w) );
			if(mappedW<0){
				ctx.clearRect(images[i][j].x, i*hhheight+offset, mappedW, hhheight);
				image( images[i][j].imageLeft, images[i][j].x, i*hhheight+offset, mappedW, hhheight);
			}else{
				ctx.clearRect(images[i][j].x, i*hhheight+offset, mappedW, hhheight);
				image( images[i][j].imageRight, images[i][j].x, i*hhheight+offset, mappedW, hhheight);
			}

		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var makeImageData = function(){
	var imageData = []; 
	for(var i=0; i<count; i++){	
		var xx = random(0, width);
		var ww = random(width*0.05, width*0.08);
		var tempData = {
			x: xx,
			w: ww,
			imageLeft: textMap.get(xx-ww, 0, ww, textMap.height), 
			imageRight: textMap.get(xx, 0, ww, textMap.height) 
		}
		imageData.push( tempData );
	}
	return imageData;
}

