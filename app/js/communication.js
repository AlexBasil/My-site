function tt_communication() {
	
	if ($.trim($('.name').val()).length > 0) {

	} else  {
		$('.tooltip_name').css('display','block');
		$('.name').css('background-color','#fdd5d2').css('border-color','#f97e76');

	};

	if ($('.email').val().length > 0) {

	} else {
		$('.tooltip_email').css('display','block');
		$('.email').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};

	if ($.trim($('.textarea').val()).length > 0) {

	} else {
		$('.tooltip_textfield').css('display','block');
		$('.textarea').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};

	if ($.trim($('.code').val()).length > 0) {

	} else {
		$('.tooltip_capcha').css('display','block');
		$('.code').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};
};

function name_cancel() {
	$('.tooltip_name').css('display','none');
	$('.name').css('background-color','#ffffff').css('border-color','#48cbe8');
};
	
function email_cancel() {
	$('.tooltip_email').css('display','none');
	$('.email').css('background-color','#ffffff').css('border-color','#48cbe8');
};

function field_cancel() {
	$('.tooltip_textfield').css('display','none');
	$('.textarea').css('background-color','#ffffff').css('border-color','#48cbe8');
};

function code_cancel() {
	$('.tooltip_capcha').css('display','none');
	$('.code').css('background-color','#ffffff').css('border-color','#48cbe8');
};

function full_reset() {
	$('.tooltip_name').css('display','none');
	$('.name').css('background-color','#ffffff').css('border-color','#48cbe8');
	$('.tooltip_email').css('display','none');
	$('.email').css('background-color','#ffffff').css('border-color','#48cbe8');
	$('.tooltip_textfield').css('display','none');
	$('.textarea').css('background-color','#ffffff').css('border-color','#48cbe8');
	$('.tooltip_capcha').css('display','none');
	$('.code').css('background-color','#ffffff').css('border-color','#48cbe8');
};