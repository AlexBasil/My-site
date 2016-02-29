var app = (function() {
	var init = function() {
		setUpListeners();
	};
	var setUpListeners = function() {
		field = $('form').find('input, textarea').not('input[type="submit"], input[type="reset"]');
		$('.new-work').on('click', showElements);
		$('#cover').on('click', showElements);
		$('form').on('submit', checkForm);
		field.on('click', cancel_error);
		$('input[type="reset"]').on('click', resetAll);
		$('input[type="file"]').on('change', changeFile );
	};


	var showElements = function() {
		var win_width = $ ( window ).width()/2 - $('.add_block').width()/2;
		$('.add_block').toggle().offset({top:100, left: win_width});
		$('#cover').toggle();
	};

	var checkForm = function(e) {
		e.preventDefault();

		var form = $(this);
		var items = form.find('input, textarea').not('input[type="submit"], input[type="reset"]');

		var flag = true;

		$.each(items, function(index, val) {
			var content = $(val).val().trim();
			if (content.length === 0) {
				$(this).addClass('error');
				showTooltip(this);

				if ($('input[type="file"]').val()!==undefined) {
		    	inherit_style(this);
		    	}

				flag = false;
			} 
		}); 

		if(flag){
			var defObj = sendForm(form);
		}
	};

	var sendForm = function(form){
		var  url = form.attr('action');
		var data = form.serializeArray();

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		}).done(function(data){
			console.log(data);		
		}).fail( function(){
			console.log("Проблема сервера");
		});
	};

	var showTooltip = function(target){
		var $target = $(target);
		$target.data("info");
		var showTooltip = "<p class='tooltip'>" + $target.data("info") + "</p>";
		var elem = $target.parent('label');
		var center = $( 'form' ).width()/2;
		var i_position = $target.position().left + elem.position().left;
		if(elem.find('.tooltip').length == 0) {
			if (i_position < center) {
				$(target).before(showTooltip);
				elem.children('.tooltip').addClass('leftHand');
			} else {
				$(target).before(showTooltip);
				elem.children('.tooltip').addClass('rightHand');
			}
		} 
	};

	var changeFile = function() {
		console.log('perfect');
		$('.download_field').text($('.upload').val());
		$('.download_field').removeClass('error');
	};
	

	var inherit_style = function() {
		if ($('input[type="file"]').val().length == 0) {
			$('.download_field').addClass('error');
		}
	};

	var cancel_error = function() {
		$(document.activeElement).removeClass('error');
		$(document.activeElement).siblings('.tooltip').remove();
	};

	var resetAll = function() {
		field.removeClass('error');
		field.siblings('.tooltip').remove();
	};

	return {
		init:init
	}
}());

app.init();