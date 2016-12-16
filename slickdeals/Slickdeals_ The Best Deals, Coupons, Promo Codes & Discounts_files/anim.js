// 300x250 Flashtalking
function init() {

	var graphic_1_1			= document.getElementById(	"graphic_1_1"			);

	var line_1_1			= document.getElementById(	"line_1_1"				);
	var line_1_2			= document.getElementById(	"line_1_2"				);
	//var line_1_3			= document.getElementById(	"line_1_3"				);

	var graphic_2_1			= document.getElementById(	"graphic_2_1"			);

	var line_2_1			= document.getElementById(	"line_2_1"				);
	var line_2_2			= document.getElementById(	"line_2_2"				);
	var line_2_3			= document.getElementById(	"line_2_3"				);

	var bg_3				= document.getElementById(	"bg_3"					);
	var gradient			= document.getElementById(	"gradient"				);

	var line_3_1			= document.getElementById(	"line_3_1"				);
	var line_3_2			= document.getElementById(	"line_3_2"				);
	var line_3_3			= document.getElementById(	"line_3_3"				);
	//var line_3_4			= document.getElementById(	"line_3_4"				);
	//var line_3_5			= document.getElementById(	"line_3_5"				);

	var graphic_3_1			= document.getElementById(	"graphic_3_1"			);
	var graphic_3_2			= document.getElementById(	"graphic_3_2"			);
	var graphic_3_3			= document.getElementById(	"graphic_3_3"			);
	var graphic_3_4			= document.getElementById(	"graphic_3_4"			);
	//var graphic_3_5			= document.getElementById(	"graphic_3_5"			);

	//

	var loading				= document.getElementById(	"loading"				);
	var cta					= document.getElementById(	"cta"					);
	var cta_default			= document.getElementById(	"cta_default"			);
	var cta_default_shell	= document.getElementById(	"cta_default_shell"		);
	var cta_hover			= document.getElementById(	"cta_over"				);
	var logo				= document.getElementById(	"logo"					);

	var ad = document.getElementById("ad");

	_startAnimation();

	function _startAnimation() {

		_addListeners();

		var _tl = new TimelineLite();
		var _initDelay 	= 0.5;
		var _pause 		= 1.25;
		var _enter 		= 1;
		var _exit 		= 0.5;

		var _enterEase 	= Elastic.easeOut.config(0.75,0.5);
		var _exitEase 	= Back.easeIn.config(2);
		var _bgEase		= Back.easeIn.config(2);

		var _ctaEase 	= Elastic. easeOut.config( 0.75, 0.75);

		var xHide = (-1*document.getElementById("loading").offsetWidth)-50;
		var yHide = document.getElementById("loading").offsetHeight;

		_tl

		.to( loading		, 	0.5,		{	opacity:0	}) // fade out loader

		.from(	logo 		,	0.7,		{	y:yHide, ease:_ctaEase 		},"cta"					)
		.from(	cta 		,	0.7,		{	y:yHide, ease:_ctaEase 		},"cta+=.250"			)

		.from(	graphic_1_1	, 	0.5,		{	autoAlpha:0					},"cta+=.750"			)

		.from(	line_1_1 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_1"				)
		.from(	line_1_2 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_1+=.125"		)
		//.from(	line_1_3 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_1+=.250"		)
		.to(	line_1_2 	,	_pause,		{})
		.to(	line_1_1 	,	_exit,		{	x:xHide, ease:_exitEase		},"line_1_out"			)
		.to(	line_1_2 	,	_exit,		{	x:xHide, ease:_exitEase		},"line_1_out+=.125"	)
		.to(	graphic_1_1 ,	_exit,		{	x:xHide, ease:_exitEase		},"line_1_out+=.250"	)

		.from(	graphic_2_1 ,	_enter,		{	x:xHide, ease:_enterEase 	},"line_2"				)
		.from(	line_2_1 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_2+=.125"		)
		.from(	line_2_2 	,	_enter,		{	x:xHide, ease:_enterEase	},"line_2+=.250"		)
		.from(	line_2_3 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_2+=.375"		)
		.to(	line_2_3 	,	_pause,		{})
		.to(	line_2_1	, 	_exit,		{	x:xHide, ease:_exitEase		},"line_2_out"			)
		.to(	line_2_2 	,	_exit,		{	x:xHide, ease:_exitEase		},"line_2_out+=.125"			)
		.to(	line_2_3 	,	_exit,		{	x:xHide, ease:_exitEase		},"line_2_out+=.250"	)
		.to(	graphic_2_1 ,	_exit,		{	x:xHide, ease:_exitEase		},"line_2_out+=.375"	)

		.from(	bg_3		 ,	0.5,		{	x:xHide, ease:_bgEase		},"bg_3"		)
		.from(	gradient	 ,	0.5,		{	x:xHide, ease:_bgEase		},"bg_3"		)

		.from(	line_3_1 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_3"				)
		.from(	line_3_2 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_3+=.125"		)
		.from(	line_3_3 	,	_enter,		{	x:xHide, ease:_enterEase 	},"line_3+=.250"		)

		.from(	graphic_3_1	, 	0.7,		{	autoAlpha:0, ease:_enterEase, scale:0, 	},"line_3+=.8"		)
		.from(	graphic_3_2	, 	0.7,		{	autoAlpha:0, ease:_enterEase, scale:0, 	},"line_3+=.9"		)
		.from(	graphic_3_3	, 	0.7,		{	autoAlpha:0, ease:_enterEase, scale:0, 	},"line_3+=1.0"		)
		.from(	graphic_3_4	, 	0.7,		{	autoAlpha:0, ease:_enterEase, scale:0, 	},"line_3+=1.1"		)
		//.from(	graphic_3_5	, 	0.7,		{	autoAlpha:0, ease:_enterEase, scale:0, 	},"line_3+=1.2"		)
		;

	}

	function _addListeners() {
		loading.addEventListener("mouseover",	_over);
		loading.addEventListener("mouseout",	_out);
		loading.style.cursor="pointer";
	}

	function _over() {
		TweenLite.to(cta_default_shell,		0.3,		{	y:document.getElementById("cta_default_shell").offsetHeight, ease:Power3.easeOut	});
		TweenLite.to(cta_default,			0.3,		{	y:-1*document.getElementById("cta_default_shell").offsetHeight, ease:Power3.easeOut	});
	}

	function _out() {
		TweenLite.to(cta_default_shell,		0.3,	{	y:0, ease:Power3.easeOut	});
		TweenLite.to(cta_default,			0.3,	{	y:0, ease:Power3.easeOut	});
	}

}
