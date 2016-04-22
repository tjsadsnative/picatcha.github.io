jQuery(document).ready(function($){

	//alert(position.top);
	$(window).scroll(function(){

    /* Scroll Post Header */
    var position_top = $(window).scrollTop();
    if( $(window).scrollTop() >= 250 && $( window ).width() > 1280 ){
      $('.single-top-ad').css({'position':'fixed', 'top':'3px', 'left':'50%', 'margin-left': '-426px', 'z-index': 99999, });
      $('.scroll-header').addClass('scrolled-header');
    }
    if( $(window).scrollTop() < 1 && $( window ).width() > 1280){
      $('.single-top-ad').css({'position':'relative', 'top':0, 'left':0, 'margin-left': 0, 'z-index': 0, });
      $('.scroll-header').removeClass('scrolled-header');
      $('.menu-main-menu-container').fadeIn();
    }
});
	var q = true;
	$('.fa-search').click(function(){
		//alert('It is working');
			if(q == true){
					$('.responsive-search, .responsive-form-box').fadeIn('slow', function(){
					$('.responsive-form-box input[type="text"]').animate({'width':'85%'}, 500)
					q = false;
				});
			}else if(q == false ){
					$('.responsive-form-box').fadeOut('slow', function(){
					$('.responsive-form-box input[type="text"]').animate({'width':'0%'}, 500)
					q = true;
				});
			}

	});


	var a = true;
	$('.menu-button').click(function(){
		if(a == true) {
			$('.menu-main-menu-container').fadeIn(function(){
				a = false;
			});
		}else if(a == false){
			$('.menu-main-menu-container').fadeOut(function(){
				a = true;
			});
		}
	});

	$(document).click(function(){
		if(a != true){
			$('.menu-main-menu-container').fadeOut(function(){
				a=true;
			});
		}
	});


	$('.submit').click(function(){
		var fname = $('.fname').val();
		var lname = $('.lname').val();
		var address = $('.address').val();
		var comments = $('.comments').val();
			//alert('Its works !');
		var URL= AjaxURL;

			if(fname != '' && lname != '' && address != '' && comments != ''){
				$.ajax({
								type: 'GET',
								url: URL,

								data: {
										fName: fname,
										lName: lname,
										address: address,
										comments:comments,
										action:'set_html_content_type'
								},

						success: function(d) {
							//alert('Its works !');
							$('.comments').val() == '';
							$('.address').val() == '';
							$('.lname').val() == '';
							$('.fname').val() == '';
							$('.ajax-success').fadeIn('slow');
							$('.inputs .fname, .inputs .lname, .inputs .address, .inputs .comments, .inputs .submit').fadeOut('slow');

							},
							failure: function(){
										alert('failed');
							}
					});
			}
			if(fname == ''){
				$('.fname').addClass('required-field');
			}
			if(lname == ''){
				$('.lname').addClass('required-field');
			}
			if(address == ''){
				$('.address').addClass('required-field');
			}
			if(comments == ''){
				$('.comments').addClass('required-field');
			}
				return false;
		}
	);

	$( "input[type='file']" ).change(function() {
		var file_txt = $( "input[type='file']" ).val();
		$('.article-upload-images').val(file_txt);
	});



	$('.article-submit').click(function(){
		var article_upload_images = $('.article-upload-images').val();
		var upload_val = $('.article-upload').val();
		var article_fname = $('.article-fname').val();
		var article_lname = $('.article-lname').val();
		var article_message = $('.article-message').val();
		var email = $('.email').val();
		var article_url = $('.article-url').val();
		var article_title = $('.article-title').val();

			if(article_fname != '' && article_lname != '' && email != '' && article_message != ''
			 && article_title != '' && article_upload_images != '' && article_url != '' ){
				//data to be sent to server
				var m_data = new FormData();
				m_data.append( 'article_fname', $('input[name=article-fname]').val());
				m_data.append( 'email', $('input[name=email]').val());
				m_data.append( 'article_lname', $('input[name=article-lname]').val());
				m_data.append( 'article_upload_images', $('input[name=article-upload-images]').val());
				m_data.append( 'article_title', $('input[name=article-title]').val());
				m_data.append( 'article_message', $('textarea[name=article-message]').val());
				m_data.append( 'article_url', $('input[name=article-url]').val());
				m_data.append( 'file_attach', $('input[name=file-attach]')[0].files[0]);
				m_data.append( 'action', 'submit_post');

				//instead of $.post() we are using $.ajax()
				//that's because $.ajax() has more options and flexibly.
				var url= AjaxURL;
				$.ajax({
					url: url,
					data: m_data,
					processData: false,
					contentType: false,
					type: 'POST',
					dataType:'json',
					success: function(data){
						//alert('Its works !');
					$('.ajax-success').fadeIn('slow');
					$('.article-fname, .article-lname, .article-upload-images, .article-title, .email, .article-url, .article-upload, .article-message, .article-submit').fadeOut('slow');
				},
					failure: function(){
						alert('failed');
					}
				});
			}
			if(article_fname == ''){
				$('.article-fname').addClass('required-field');
			}
			if(article_lname == ''){
				$('.article-lname').addClass('required-field');
			}
			if(email == ''){
				$('.email').addClass('required-field');
			}
			if(article_message == ''){
				$('.article-message').addClass('required-field');
			}
			if(article_upload_images == ''){
				$('.article-upload-images').addClass('required-field');
			}
			if(article_title == ''){
				$('.article-title').addClass('required-field');
			}
			if(article_url == ''){
				$('.article-url').addClass('required-field');
			}

				return false;
		}
	);

  $('body').on('mouseenter', '.post > a img', function() {
    var h = $(this).height();
    if ( ! $(this).hasClass( "has-overlay" ) ) {
      $(this).addClass( "has-overlay" )
      $(this).before( '<div class="js-overlay"></div>' );
      $(this).parent().find(".js-overlay").height(h);
    }    
  });

});