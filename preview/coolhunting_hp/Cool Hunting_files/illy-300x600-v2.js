(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/final/_3stories.png", id:"_3stories"},
		{src:"images/final/_3stories_1.png", id:"_3stories_1"},
		{src:"images/final/art.png", id:"art"},
		{src:"images/final/creativity.png", id:"creativity"},
		{src:"images/final/CTA.png", id:"CTA"},
		{src:"images/final/f1_1.jpg", id:"f1_1"},
		{src:"images/final/f2_1.jpg", id:"f2_1"},
		{src:"images/final/f3_1.jpg", id:"f3_1"},
		{src:"images/final/finalFrame.jpg", id:"finalFrame"},
		{src:"images/final/inspiring.png", id:"inspiring"},
		{src:"images/final/passion.png", id:"passion"},
		{src:"images/final/singular.png", id:"singular"}
	]
};



// symbols:



(lib._3stories = function() {
	this.initialize(img._3stories);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,14);


(lib._3stories_1 = function() {
	this.initialize(img._3stories_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,14);


(lib.art = function() {
	this.initialize(img.art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,15);


(lib.creativity = function() {
	this.initialize(img.creativity);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,15);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,30);


(lib.f1_1 = function() {
	this.initialize(img.f1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,345);


(lib.f2_1 = function() {
	this.initialize(img.f2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,345);


(lib.f3_1 = function() {
	this.initialize(img.f3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,345);


(lib.finalFrame = function() {
	this.initialize(img.finalFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.inspiring = function() {
	this.initialize(img.inspiring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,14);


(lib.passion = function() {
	this.initialize(img.passion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,15);


(lib.singular = function() {
	this.initialize(img.singular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,35);


(lib.TweenCretivity = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.creativity();
	this.instance.setTransform(-201,-8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-201,-8,102,15);


(lib.TweenArt = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.art();
	this.instance.setTransform(-122,-9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122,-9,35,15);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.f2_1();
	this.instance.setTransform(-91.8,96.7,0.684,0.684);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.8,96.7,205.2,236);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.singular();
	this.instance.setTransform(-300,-109);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300,-109,112,35);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 7
	this.instance = new lib._3stories_1();
	this.instance.setTransform(-245,-87);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245,-87,134,14);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.inspiring();
	this.instance.setTransform(-214.5,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-214.5,0,93,14);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.passion();
	this.instance.setTransform(-76,18);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,18,75,15);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.f1_1();
	this.instance.setTransform(-93,-41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93,-41,300,345);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACTQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQANgGAigcQAjgcAAgHQgMAGgLACQgHABgEgCQgDgBgFgEQgLgQAAgHQAAgIAFgQQAEgQAFgLQAcgxAKgKQACgCADAAQAFAAAIAIQAGAGAEAGQAEAGgPAaIgWAhQgKASAEADQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQAKgGAFgGQAWgSAagzQAGgMAHgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAPANABAFQAAAIgGAQQgOAmgjAmQgiAngqAXIgZAMIgKAAgACCBqQgFgFAAgIQAAgIAFgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAFQgGAGgJAAQgIAAgGgGgACEBRQgFAFAAAHQAAAHAFAEQAFAFAHAAQAIAAAGgFQAFgEAAgHQAAgHgFgFQgGgFgIAAQgHAAgFAFgACVBmIgEgIIgFAAIAAAIIgEAAIAAgUIAHAAQALAAAAAHQAAACgEADIAEAIgACMBbIAFAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAgBQAAgCgEAAIgFAAgAgPBdQgLgEgGgNQgBgDAAgJQADgkARgsQATg9Amg7QAFgHALAGQALAJACAGQAEANgNAaQgdA1gWBDIgRAzQgCAFgGAAIgDAAgAhSBbQgMgCgEgGQgEgFgBgOQgEgVAbhEQANgiARgoIANgXQANgVAGgEQAFgCAFAEQAIAJADALQACALgFALQgKAUgHATIgZA7QgQAlgGAXIgKAfQgDAFgEAAIgBAAgAiaBbQgHgBgEgGQgEgGgBgJQgBgLAEgMIAMgoIAOgnQAPgjATAAQAEAAAEAEQAEADAAADQACAEgJAZIgOAnQgJAbgGAZIgJAaQgBABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgFAAIgGAAgAhohXQgFgGAAgJQAAgLAIgKQAKgMAMgDQANgDACAJQAFARgNAQIgMAMQgGAEgFAAQgFAAgEgEg");
	this.shape.setTransform(19.9,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D02224").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape_1.setTransform(19.9,19.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,39.7);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB1B29").s().p("AggA1IgEgDIAEgIIADACIAGABQAKAAAFgMIAFgLIghhMIAMAAIAXA3IABAIIAAAAIADgIIAWg3IAMAAIglBdQgGAQgQAAQgFAAgFgCg");
	this.shape.setTransform(49.7,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB1B29").s().p("AAGA2QgQAAAAgTIAAhYIAKAAIAABWQAAAMAIAAIADAAIAAAJg");
	this.shape_1.setTransform(44.3,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB1B29").s().p("AAHA2QgRAAAAgTIAAhYIAKAAIAABWQAAAMAIAAIADAAIAAAJg");
	this.shape_2.setTransform(40.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB1B29").s().p("AgEA2IAAhMIAIAAIAABMgAgEgoIAAgNIAJAAIAAANg");
	this.shape_3.setTransform(36.3,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6E71").s().p("AgiA3IAAhrIAKAAIAAAOIAAAAIAGgIQAIgIALAAQAPAAAKAMQAJALAAASQAAARgKALQgKALgPAAQgKAAgIgHIgFgIIgBAAIABAsgAgQglQgIAIAAAQQAAANAGAHQAIAJAKAAQAKAAAGgIQAIgIAAgNQAAgOgHgJQgHgJgKAAQgJAAgHAIg");
	this.shape_4.setTransform(30.1,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6E71").s().p("AgiA3IAAhrIAKAAIgBAOIABAAQABgEAFgEQAIgIALAAQAPAAAKAMQAJALAAASQAAARgKALQgJALgQAAQgJAAgJgHIgGgIIAAAAIAAAsgAgQglQgIAIAAAQQAAANAGAHQAIAJAKAAQAKAAAHgIQAHgIAAgNQAAgOgHgJQgHgJgKAAQgJAAgHAIg");
	this.shape_5.setTransform(20.9,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6E71").s().p("AgVAjQgJgHAAgLQAAgZAuAAIAEAAIAAgCQAAgUgTAAQgGAAgIAEIgGAEIgFgIIAHgFQAKgFAJABQAdAAAAAdIAAAxIgKAAIAAgQIAAAAIgGAJQgIAJgKAAQgLgBgHgFgAgTAQQAAAHAEAEQAFAEAIABQAJAAAHgKQAGgJAAgKIAAgDIgEAAQgjAAAAAQg");
	this.shape_6.setTransform(11.7,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6E71").s().p("AAXA2IAAgvQAAgVgRAAQgIAAgIAGQgIAGgDAIIgBAKIAAAmIgKAAIAAhrIAKAAIAAAqIAAAGIAAAAQADgGAHgGQAJgHAKAAQAaAAAAAdIAAAxg");
	this.shape_7.setTransform(3.4,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D6E71").s().p("AgXAdQgLgMAAgRQAAgRALgMQALgKAOgBQAQABAJAKQAIALAAAPIAAADIg6AAQAAAOAJAJQAIAIALAAQAOAAAKgKIAFAJQgMAKgRAAQgQAAgMgLgAgNgYQgIAGgCAMIAvAAQAAgNgHgFQgGgHgJAAQgIAAgHAHg");
	this.shape_8.setTransform(49.3,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6E71").s().p("AgEAnIgehNIALAAIAWA4IABAJIAAAAIAYhBIALAAIgeBNg");
	this.shape_9.setTransform(41.2,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6E71").s().p("AgEA2IAAhMIAJAAIAABMgAgEgoIAAgNIAJAAIAAANg");
	this.shape_10.setTransform(35.6,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6E71").s().p("AgJAjIAAhZIAJAAIAABXQAAAMAIAAIACgBIAAAKIgDAAQgRAAABgTg");
	this.shape_11.setTransform(32.2,5.5);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,29.1);


(lib.CTA_1 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.CTA();
	this.instance.setTransform(-182,-85);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-182,-85,113,30);


(lib.crop1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.f1_1();
	this.instance.setTransform(0,206);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,206,300,345);


(lib.creativityImg = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.f3_1();
	this.instance.setTransform(-92,-41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-41,300,345);


(lib.artImg = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.f2_1();
	this.instance.setTransform(-92,-41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-41,300,345);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(15.7,-67.8,1,1,0,0,0,19.9,19.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-87.6,39.7,39.6);


// stage content:
(lib.illy300x600v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_307 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(307).call(this.frame_307).wait(9));

	// Layer 17
	this.instance = new lib.CTA_1();
	this.instance.setTransform(241.8,210.9,1,1,0,0,0,47.8,12.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296).to({_off:false},0).to({alpha:1},10).to({_off:true},7).wait(3));

	// Layer 16 copy
	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.setTransform(182,173);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({_off:false},0).to({x:312},13).to({_off:true},34).wait(3));

	// 3 stories
	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.setTransform(107,130.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(243).to({_off:false},0).to({x:257,y:131},11).to({_off:true},59).wait(3));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_230 = new cjs.Graphics().p("ArvNPIAA6dIXfAAIAAadg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_graphics_230,x:72.7,y:414.3}).wait(86));

	// Layer 4
	this.instance_3 = new lib.Tween19("synched",0);
	this.instance_3.setTransform(47.8,183.6,1.252,1.252);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({alpha:1},25).wait(61));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_212 = new cjs.Graphics().p("A4aZYIAA6jMAw1AAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(212).to({graphics:mask_1_graphics_212,x:150.4,y:162.4}).wait(104));

	// Layer 1
	this.instance_4 = new lib.crop1();
	this.instance_4.setTransform(92.8,30,1,1,0,0,0,93,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(212).to({_off:false},0).to({alpha:1},26).wait(74).to({y:72},0).wait(4));

	// f3 text 
	this.instance_5 = new lib.TweenCretivity("synched",0);
	this.instance_5.setTransform(210,79);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({alpha:1},16).wait(41).to({startPosition:0},0).to({x:88},9).to({_off:true},5).wait(101));

	// f2 text 
	this.instance_6 = new lib.TweenArt("synched",0);
	this.instance_6.setTransform(133,79);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({alpha:1},14).wait(41).to({startPosition:0},0).to({alpha:0},11).wait(17).to({x:292,y:125},0).to({_off:true},35).wait(123));

	// f3 img 
	this.instance_7 = new lib.creativityImg("synched",0);
	this.instance_7.setTransform(92,200);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({alpha:1},21).wait(36).to({startPosition:0},0).to({scaleX:0.49,scaleY:0.49,x:198.5,y:349.6},21).to({_off:true},96).wait(3));

	// f2 img 
	this.instance_8 = new lib.artImg("synched",0);
	this.instance_8.setTransform(92,200);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({alpha:1},19).wait(41).to({startPosition:0},0).to({alpha:0},13).to({_off:true},170).wait(3));

	// f1 text
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.setTransform(87,53);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({alpha:1},10).wait(41).to({startPosition:0},0).to({alpha:0},7).to({_off:true},243).wait(3));

	// f1 img
	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(93,200);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({alpha:1},14).wait(32).to({startPosition:0},0).to({alpha:0},17).to({_off:true},238).wait(3));

	// inspiring
	this.instance_11 = new lib.Tween8("synched",0);
	this.instance_11.setTransform(225,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(201).to({startPosition:0},0).to({x:100},9).to({_off:true},63).wait(43));

	// livehappy
	this.instance_12 = new lib.ClipGroup();
	this.instance_12.setTransform(257.9,539.5,1.196,1.196,0,0,0,26.7,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(198).to({_off:true},113).wait(5));

	// logo
	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.setTransform(248.4,141.1,1.115,1.115);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},313).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.5,343.4,279.4,513.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;