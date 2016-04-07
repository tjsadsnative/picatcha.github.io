(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_8ASingular.png", id:"_8ASingular"},
		{src:"images/_8art.png", id:"_8art"},
		{src:"images/_8creativity.png", id:"_8creativity"},
		{src:"images/_8inspiring.png", id:"_8inspiring"},
		{src:"images/_8passion.png", id:"_8passion"},
		{src:"images/_8ThreeStories.png", id:"_8ThreeStories"},
		{src:"images/_9ASingularinspiration.png", id:"_9ASingularinspiration"},
		{src:"images/_9ThreeStories.png", id:"_9ThreeStories"},
		{src:"images/CTAbtn.jpg", id:"CTAbtn"},
		{src:"images/f1.jpg", id:"f1"},
		{src:"images/f2.jpg", id:"f2"},
		{src:"images/f3.jpg", id:"f3"},
		{src:"images/illyLogoai.png", id:"illyLogoai"}
	]
};



// symbols:



(lib._8ASingular = function() {
	this.initialize(img._8ASingular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,29);


(lib._8art = function() {
	this.initialize(img._8art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,12);


(lib._8creativity = function() {
	this.initialize(img._8creativity);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,13);


(lib._8inspiring = function() {
	this.initialize(img._8inspiring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,13);


(lib._8passion = function() {
	this.initialize(img._8passion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,13);


(lib._8ThreeStories = function() {
	this.initialize(img._8ThreeStories);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,29);


(lib._9ASingularinspiration = function() {
	this.initialize(img._9ASingularinspiration);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,29);


(lib._9ThreeStories = function() {
	this.initialize(img._9ThreeStories);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,29);


(lib.CTAbtn = function() {
	this.initialize(img.CTAbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,26);


(lib.f1 = function() {
	this.initialize(img.f1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,252);


(lib.f2 = function() {
	this.initialize(img.f2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,252);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,252);


(lib.illyLogoai = function() {
	this.initialize(img.illyLogoai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.TweenCretivity = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib._8creativity();
	this.instance.setTransform(-32,-6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-6,85,13);


(lib.TweenArt = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib._8art();
	this.instance.setTransform(-33.9,-5.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.9,-5.3,31,12);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f2();
	this.instance.setTransform(-47,-63.7,0.506,0.506);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-63.7,94.1,127.5);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib._8ASingular();
	this.instance.setTransform(-11,-22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-22,90,29);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib._8ThreeStories();
	this.instance.setTransform(-28,-16.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-16.7,59,29);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib._8passion();
	this.instance.setTransform(-32.4,-7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-7,62,13);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1();
	this.instance.setTransform(-93,-126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93,-126,186,252);


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


(lib.CTA = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.CTAbtn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,26);


(lib.crop1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.f1, null, new cjs.Matrix2D(1,0,0,1,-93,-126)).s().p("AuhTsMAAAgnXIdDAAMAAAAnXg");
	this.shape.setTransform(93,126);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186,252);


(lib.creativityImg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f3();
	this.instance.setTransform(-92,-126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-126,186,252);


(lib.artImg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f2();
	this.instance.setTransform(-92,-126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-126,186,252);


(lib._6inspiring = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8inspiring();
	this.instance.setTransform(-40.4,-15.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.4,-15.5,75,13);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib._6inspiring();
	this.instance.setTransform(-2,-3,1,1,0,0,0,-3,-9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-9.5,75,13);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(15.7,-67.8,1,1,0,0,0,19.9,19.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-87.6,39.7,39.6);


// stage content:
(lib.illy300x250v4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_308 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(308).call(this.frame_308).wait(8));

	// Layer 17
	this.instance = new lib.CTA();
	this.instance.setTransform(241.8,201.9,1,1,0,0,0,47.8,12.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(296).to({_off:false},0).to({alpha:1},10).to({_off:true},7).wait(3));

	// Layer 16 copy
	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.setTransform(311.3,159.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({_off:false},0).to({x:210,y:159},13).to({_off:true},34).wait(3));

	// 3 stories
	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.setTransform(327,117.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(243).to({_off:false},0).to({x:256.8},11).to({_off:true},59).wait(3));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_230 = new cjs.Graphics().p("AnKJsIAAzXIOVAAIAATXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_graphics_230,x:45.8,y:190}).wait(86));

	// Layer 4
	this.instance_3 = new lib.Tween19("synched",0);
	this.instance_3.setTransform(31.8,201.6,1.351,1.351);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({alpha:1},25).wait(61));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_212 = new cjs.Graphics().p("Av7KEIAA0IIf2AAIAAUIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(212).to({graphics:mask_1_graphics_212,x:84,y:60}).wait(104));

	// Layer 1
	this.instance_4 = new lib.crop1();
	this.instance_4.setTransform(92.8,72,1,1,0,0,0,93,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(212).to({_off:false},0).to({alpha:1},26).wait(78));

	// f3 text 
	this.instance_5 = new lib.TweenCretivity("synched",0);
	this.instance_5.setTransform(237,126);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({alpha:1},16).wait(41).to({startPosition:0},0).to({x:342},9).to({_off:true},5).wait(101));

	// f2 text 
	this.instance_6 = new lib.TweenArt("synched",0);
	this.instance_6.setTransform(292,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({alpha:1},14).wait(41).to({startPosition:0},0).to({alpha:0},11).wait(17).to({startPosition:0},0).to({_off:true},35).wait(123));

	// f3 img 
	this.instance_7 = new lib.creativityImg("synched",0);
	this.instance_7.setTransform(91.8,126);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(139).to({_off:false},0).to({alpha:1},21).wait(36).to({startPosition:0},0).to({scaleX:0.48,scaleY:0.48,x:139.8,y:189.1},21).to({_off:true},96).wait(3));

	// f2 img 
	this.instance_8 = new lib.artImg("synched",0);
	this.instance_8.setTransform(91.8,126);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({alpha:1},19).wait(41).to({startPosition:0},0).to({alpha:0},13).to({_off:true},170).wait(3));

	// f1 text
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.setTransform(259.4,126);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({alpha:1},10).wait(41).to({startPosition:0},0).to({alpha:0},7).to({_off:true},243).wait(3));

	// f1 img
	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(93,126);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({alpha:1},14).wait(31).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({alpha:0},17).to({_off:true},238).wait(3));

	// inspiring
	this.instance_11 = new lib.Tween8("synched",0);
	this.instance_11.setTransform(254,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(201).to({startPosition:0},0).to({x:359},9).to({_off:true},63).wait(43));

	// livehappy
	this.instance_12 = new lib.ClipGroup();
	this.instance_12.setTransform(264.2,201.7,0.944,0.944,0,0,0,26.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(201).to({x:339.2},9).to({_off:true},24).wait(82));

	// logo
	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.setTransform(254,128.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},313).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.6,166,75,174.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;