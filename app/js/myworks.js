
function openPopup() {
	var win_width = $ ( window ).width()/2 - $('#popup').width()/2;
	 $('#popup').bPopup({
            follow: [false, false], //x, y
            position: [win_width, 50] //x, y
        });
}

function tooltip() {
	
	if ($.trim($('#inputName').val()).length > 0) {

	} else  {
		$('#tt_name').css('display','block');
		$('#inputName').css('background-color','#fdd5d2').css('border-color','#f97e76');

	};

	if ($('#upload').val().length > 0) {

	} else {
		$('#tt_file').css('display','block');
		$('#file').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};

	if ($.trim($('#url').val()).length > 0) {

	} else {
		$('#tt_url').css('display','block');
		$('#url').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};

	if ($.trim($('#text_field').val()).length > 0) {

	} else {
		$('#tt_textarea').css('display','block');
		$('#text_field').css('background-color','#fdd5d2').css('border-color','#f97e76');
	};
};

function name_cancel() {
	$('#tt_name').css('display','none');
	$('#inputName').css('background-color','#ffffff').css('border-color','#48cbe8');

};
	
function file_cancel() {
	$('#tt_file').css('display','none');
	$('#file').css('background-color','#ffffff').css('border-color','#48cbe8');
}

function url_cancel() {
	$('#tt_url').css('display','none');
	$('#url').css('background-color','#ffffff').css('border-color','#48cbe8');
}

function textarea_cancel() {
	$('#tt_textarea').css('display','none');
	$('#text_field').css('background-color','#ffffff').css('border-color','#48cbe8');
}

function changeAdress() {

	if ($('#upload').val().length > 0) {
		$('#file').prepend($('#upload').val());
	}
}