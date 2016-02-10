function tt_authorization() {
	
	if ($.trim($('#login').val()).length > 0) {

	} else  {
		$('.tt_login').css('display','block');
		$('#login').css('background-color','#fdd5d2').css('border-color','#f97e76');

	};

	if ($('#password').val().length > 0) {

	} else {
		$('.tt_password').css('display','block');
		$('#password').css('background-color','#fdd5d2').css('border-color','#f97e76');
	}
};

function login_cancel() {
	$('.tt_login').css('display','none');
	$('#login').css('background-color','#ffffff').css('border-color','#48cbe8');

};
	
function password_cancel() {
	$('.tt_password').css('display','none');
	$('#password').css('background-color','#ffffff').css('border-color','#48cbe8');
}