$(function(){

	var hour = 00;
	var min = 00;
	var sec = 00;
	var ms = 00;
	function time(){
		ms++;
		if (ms > 999) {
			sec++;
			ms = 0;
		}
		if (sec > 59) {
			min++;
			sec = 0
		}
		if (min > 59) {
			hour++;
			min = 0;
		}

		//Внешний вид таймера
		var vhour = hour;
		var vmin = min;
		var vsec = sec;
		var vms = ms;
		if (vhour < 10) {
			vhour = '0' + vhour;
		}
		if (vmin < 10) {
			vmin = '0' + vmin;
		}
		if (vsec < 10) {
			vsec = '0' + vsec;
		}
		if (vms < 100) {
			vms = '0' + vms;
		} else if (vms < 10) {
			mvs = '0' + vms;
		}
		$('.time').html(vhour + ':' + vmin + ':' + vsec + ':' + vms);
	}

	// Кнопки СТАРТ и СТОП
	var go;
	$('.start').on('click', function(){
		$('.time').toggleClass('start');
		if ($('.time').hasClass('start')) {
			go = setInterval(time, 1);
			$(this).text('стоп');
		} else {
			clearInterval(go);
			$(this).text('старт');
		}
	})

	// Кнопка СБРОС
	$('.clear').on('click', function(){
		hour = 00;
		min = 00;
		sec = 00;
		ms = 00;
		clearInterval(go);
		$('.time').html('00' + ':' + '00' + ':' + '00' + ':' + '000');
		$('.buttons .start').text('старт');
		$('.time').removeClass('start');
		$('.results').find('.result').remove();
	})

	//Кнопка КРУГ
	$('.circle').on('click', function(){
		var time = $('.time').text();
		$(this).parent().parent().children('.results').append('<li class="result">'+ time +'<span class="del glyphicon glyphicon-remove"></span></li>');
	})

	//Поштучное удаление КРУГов
	$('.results').on('click', '.result .del', function(){
		$(this).parent().remove();
	})


})