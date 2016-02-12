
function openPopup() {
	var win_width = $ ( window ).width()/2 - $('#popup').width()/2;
	 $('#popup').bPopup({
            follow: [false, false], //x, y
            position: [win_width, 50] //x, y
        });
};

var elem = $('form').find('input, textarea, .download_field').not('input[type="submit"], input[type="reset"]');

function errorInput() {

	if ($.trim(elem.val()).length > 0) {

	} else {
		elem.addClass('error');
		elem.siblings('.tooltip').css('display','block');
	}
};


function cancel_error() {
	$(document.activeElement).removeClass('error');
	$(document.activeElement).siblings('.tooltip').css('display','none');
};
	

function cancel_file() {
	$('.download_field').removeClass('error');
	$('.download_field').siblings('.tooltip').css('display','none');
};


function full_reset() {
	elem.removeClass('error');
	elem.siblings('.tooltip').css('display','none');
};

function changeAdress() {

	if ($('#upload').val().length > 0) {
		$('.text_file').text($('#upload').val());
	}
}