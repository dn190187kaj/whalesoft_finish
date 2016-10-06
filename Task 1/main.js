// Проверка заполнения полей Имя и Фамилия

	$('input[type="text"]').on('keyup', function(){
		var text = $(this).val();
		var regexp = /^[a-zA-Z]+$/g;
		if (!regexp.test(text)) {
			$(this).addClass('error');
			$('.error_text').show();
		} else {
			$(this).removeClass('error');
			$('.error_text').hide();
		}
	})


// Проверка пароля

	$('#passRepeat').on('blur', function(){
		var password = $('#pass').val();
		if ($(this).val() !== password) {
			$(".error_password").show();
		} else {
			$(".error_password").hide();
		}
	})

// Отправка формы

$('button').on('click', function(){
	var text = {
		username: $('#username').val(),
		userSurname: $('#userSurname').val(),
		pass: $('#pass').val(),
		gender: $('input[type="radio"]:checked').val()
	};

	$.ajax({
		url: 'http://whalesoft.com.ua/courses/system/api/form/',
		data: text,
		success: function(result) {
			console.log(result);
			return result;
		},
		error: function(){
			console('ajax error');
		}
	})
})




// var text = {
// 		username: $('#username').val(),
// 		userSurname: $('#userSurname').val(),
// 		pass: $('#pass').val(),
// 		gender: $('input[type="radio"]:checked').val()
// 	};

// 		$.get('http://whalesoft.com.ua/courses/system/api/form/', text,
// 			function(result){
// 				console.log(result);
// 				return result;
// 			})