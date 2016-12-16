var Master = function(){
	var _this = this;

	var start_delay 	= 200, transition_speed = 1500, time_limit = 15000,
	section_duration 	= (time_limit-start_delay-transition_speed)/5;

	var background_list 			= ft.$("canvas.background-image"),
	backgroundimages 				= [], 
	loaded_backgroundimages 		= [];

	function buildbackgroundimages(){
		for( var i = 0; i<background_list.length; i++ ){	
			var canvas = background_list[i], id = canvas.getAttribute("data-section-id");

			backgroundimages[id] = new BackgroundImage( canvas, onbackgroundimagecomplete, _width, _height );
		}
	}

	function onbackgroundimagecomplete( backgroundimage ){
		loaded_backgroundimages.push( backgroundimage );

		if( loaded_backgroundimages.length >= background_list.length ){
		 	_this.start();
		}
	}

	_this.init = function(){
		buildbackgroundimages();
	}

	_this.start = function(){
		setTimeout(function(){
			ft_container[0].setAttribute("class","show-section show-one");
			setTimeout(function(){
				backgroundimages["show-one"].play();
			},800);
		setTimeout(function(){
			ft_container[0].setAttribute("class","show-section show-two");
			backgroundimages["show-two"].play();
		setTimeout(function(){
			ft_container[0].setAttribute("class","card-section card-one");
			backgroundimages["card-one"].play();
		setTimeout(function(){
			ft_container[0].setAttribute("class","show-section show-three");
			backgroundimages["show-three"].play();
		setTimeout(function(){
			ft_container[0].setAttribute("class","card-section card-two");
			backgroundimages["card-two"].play();
		setTimeout(function(){
			ft_container[0].setAttribute("class","end");
			backgroundimages["end"].play();
		}, section_duration );
		}, section_duration );
		}, section_duration );
		}, section_duration );
		}, section_duration );
		}, start_delay );
	}

	_this.clearbackgrounds = function(){
		for( var i = 0; i<background_list.length; i++ ){	
			var canvas = background_list[i], id = canvas.getAttribute("data-section-id");

			backgroundimages[id].clear();
		}
	}

	_this.restart = function(){
		_this.clearbackgrounds();

		ft_container[0].setAttribute("class","logo");

		_this.start();
	}
}

/* ============= Global Variables =============== */

var ft = new FT, master = new Master, ft_container;

/* ================ Initialize ================== */

ft.on("manifest", function(e){
	ft_container 		= ft.$("#ft-container");
	restartbutton 		= ft.$(".restart-button");
	clickthrough 		= ft.$("div#clickthrough");
	
	ft.applyClickTag( clickthrough, 1 );

	restartbutton.on('click', function(e){
		e.preventDefault();
		master.restart();
	});

	setTimeout(function(){
		// resize header for dynamic text
		ft.$(".section-header").each(function(){
			var t = ft.$(this), w = t.width();
			if( w > _width-24 ) t[0].setAttribute("style","transform:scale("+(_width-24)/w+"); -webkit-transform:scale("+(_width-24)/w+");");
		});
	
		master.init();
	},500);
});
