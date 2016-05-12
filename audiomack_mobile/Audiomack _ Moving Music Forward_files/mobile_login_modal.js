$(document).off('click', '.launch_login_modal').on('click', '.launch_login_modal', function(e) {
	e.preventDefault();
	if(!audiomack.logged_in) {
		if($('#login_response .modal-body .container').length == 0){
			var sexymodal = '<div class="modal hide fade" id="login_response"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Sign Up or Login</h4></div><div class="modal-body"></div></div>';
		}
		var music_id = $(this).data('music_id');
		action = $(this).data('action');
		var ref_url = false;

		if($(this).data('ref_url') != undefined) {
			ref_url = $(this).data('ref_url');
		} else {
			ref_url = '';
		}
		if(music_id && !$.isNumeric(music_id)) {
			var music_id = music_id.replace(/[^0-9]/gi, '');
		}

		$.ajax({
			url: '/account/create/modal',
			data: {immediate_action: action, music_id: music_id, ref_url: ref_url},
			cache: false,
			success: function(data) {
				if($('#login_response .modal-body .container').length == 0){
					$(sexymodal).appendTo('body')
					$('#login_response .modal-body').html(data);
				}
				$('#login_response').modal('show');
			},
			type: 'GET'
		});
	}
});
