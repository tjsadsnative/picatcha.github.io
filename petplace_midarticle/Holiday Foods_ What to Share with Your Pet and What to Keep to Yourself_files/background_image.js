/* =============== BackgroundImage Class ================= */

var BackgroundImage = function( canvas, _onimagecomplete, _w, _h ){
	var _this = this, tweenable 	= new Tweenable(), image = new Image();

	var mask_ctx 	= canvas.getContext("2d");
	var linecanvas 	= document.getElementById( canvas.getAttribute("data-line-id") );
	var line_ctx 	= linecanvas.getContext("2d");
	var speed 		= parseInt(canvas.getAttribute("data-speed"));

	var trsfrm_from_str 		= canvas.getAttribute("data-transform-from"); //"168,103.2,.4,.4,20";
	var trsfrm_from_parts 		= trsfrm_from_str.split(",");
	trsfrm_from_parts.push( canvas.getAttribute("data-strokeweight-from") );

	//parse transform to parts
	var trsfrm_to_str			= canvas.getAttribute("data-transform-to"); //"scaleX:1,scaleY:1,rotation:0,x:168,y:103.2";
	var trsfrm_to_parts			= trsfrm_to_str.split(",");
	for(var i = 0; i<trsfrm_to_parts.length; i++){
		var pieces = trsfrm_to_parts[i].split(":"); trsfrm_to_parts[i] = pieces[1];
	}
	trsfrm_to_parts = trsfrm_to_parts.splice(3,2).concat(trsfrm_to_parts);
	trsfrm_to_parts.push( canvas.getAttribute("data-strokeweight-to") );
	
	//parse mask parts
	var mask_str 				= canvas.getAttribute("data-mask"); //"moveTo(83.4,91.3).lineTo(168,68.2).lineTo(168,-103.2).lineTo(-168,-103.2).lineTo(-168,29.3).curveTo(-126,79.8,-60,96.1).curveTo(6.1,112.4,83.4,91.3)";
	var mask_parts 				= mask_str.replace(/curveTo/g, "quadraticCurveTo").slice(0,-1).split(").");
	for(var i = 0; i<mask_parts.length; i++){
		var part = mask_parts[i], pieces = part.split("(");
		mask_parts[i] = [ pieces[0], pieces[1].split(",") ];
	}

	image.onload = function(){ _onimagecomplete( _this ); }

	image.src = document.getElementById( canvas.getAttribute("data-image-id") ).firstChild.src;

	var draw = function(_data){
	    mask_ctx.save();
	    mask_ctx.clearRect(0,0,_w,_h);

	    //transform
	 	mask_ctx.translate(_data[0],_data[1]);
	 	mask_ctx.scale(_data[2],_data[2]);
	 	mask_ctx.rotate(_data[4]*(Math.PI/180));

	    mask_ctx.beginPath();

	    //draw mask
	    for(var i = 0; i<mask_parts.length; i++){
	    	mask_ctx[ mask_parts[i][0] ].apply( mask_ctx, mask_parts[i][1] );
		}

		mask_ctx.closePath();
		mask_ctx.clip();

		//reverse transform
		mask_ctx.rotate((-_data[4])*(Math.PI/180));
		mask_ctx.scale(1/_data[2],1/_data[2]);
	 	mask_ctx.translate(-_data[0],-_data[1]);

	 	mask_ctx.drawImage(image, 0,0);
	    mask_ctx.restore();

	    drawline(_data);
	}

	function drawline(_data){
		line_ctx.save();
		line_ctx.clearRect(0,0,_w,_h);

	    line_ctx.translate(_data[0],_data[1]);
	 	line_ctx.scale(_data[2],_data[2]);
	 	line_ctx.rotate(_data[4]*(Math.PI/180));

	    line_ctx.beginPath();
		line_ctx.strokeStyle = "#66aa33";
		line_ctx.lineWidth = _data[5];

		//draw line
		for(var i = 0; i<mask_parts.length; i++){
	    	line_ctx[ mask_parts[i][0] ].apply( line_ctx, mask_parts[i][1] );
		}

		line_ctx.stroke();
	    line_ctx.restore();
	}

	_this.play = function(_from, _to){
		tweenable.tween({
		  from: trsfrm_from_parts,
		  to: trsfrm_to_parts,
		  duration: speed,
		  easing: 'easeOutSine',
		  step: draw
		});
	}

	_this.clear = function(){
		line_ctx.clearRect(0,0,_w,_h);
		mask_ctx.clearRect(0,0,_w,_h);

		tweenable = new Tweenable();
	}
}