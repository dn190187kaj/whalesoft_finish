$(function(){
	//Создаем первый taglist
	function createList(arr){
		var list = [];
		for (var i = 0; i < arr.length; i++) {
			list.push('<li class="tag">'+ arr[i]+'<span class="delete-tag glyphicon glyphicon-remove hide"></span></li>');
		}
		list.push('</ul>');
		list.unshift('<ul>');
		list = list.join('');
		$('.tag-name').after(list);
	}
	createList(['Встать', 'Поесть', 'Поспать']);

	//Добавляем taglist
	$('.add-list').on('click', function(){
		$(this).parent().before('<div class="row"><div class="tag-list col-md-6 col-md-offset-3"><h2 class="tag-name">Tag-list 1</h2><label class="hide">Добавить задачу<input type="text" class="new-tag" name="new-tag"></label><button class="add-tag hide" name="add-tag">Add tag</button><div class="edit">Edit</div></div></div>');
	})




	//Удаляем tag
	$('.tag-list').on('click', '.tag .delete-tag', function(){
		$(this).parent().remove();
	})

	//Добавляем tag
	$('.tag-list').on('click', '.add-tag', function(){
		var newTagName = $(this).parent().find('input').val();
		newTagName = newTagName.trim();

		var li = $(this).parent().children('ul').children('li');
		var item;
		for (var i = 0; i < li.length; i++) {
			item = $($(li))[i];
			if($(item).text() === newTagName) {
				alert('Это имя уже используется, введите другое');
				item = false;
				break;
			}
		}
		if (item) {
		$(this).parent().children('ul').append('<li class="tag">' + newTagName +'<span class="delete-tag glyphicon glyphicon-remove"></span></li>');
		$(this).parent().find('input').val('');
		}
	})

	//Добавляем tag по нажатию ENTER
	$('.tag-list').on('keyup', '.new-tag', function(e){
		if (e.which == 13) {
			var newTagName = $(this).parent().parent().find('input').val();
			newTagName = newTagName.trim();

			var li = $(this).parent().parent().children('ul').children('li');
			var item;
			for (var i = 0; i < li.length; i++) {
				item = $($(li))[i];
				if($(item).text() === newTagName) {
					alert('Это имя уже используется, введите другое');
					item = false;
					break;
				}
			}
			if (item) {
			$(this).parent().parent().children('ul').append('<li>' + newTagName +'<span class="delete-tag glyphicon glyphicon-remove"></span></li>');
			$(this).parent().parent().find('input').val('');
			}
		}

	})

	//Редактирование taglist
	$('.tag-list').on('click','.edit', function(){
		$(this).parent().toggleClass('show');
		$('body').toggleClass('show');
		if($('body').hasClass('show')) {
			$(this).html('Save');
			$(this).parent().find('ul').find('span').toggleClass('hide');
			$(this).parent().find('label').toggleClass('hide');
			$(this).parent().find('button').toggleClass('hide');
		} else {
			$(this).html('Edit');
			$(this).parent().find('ul').find('span').toggleClass('hide');
			$(this).parent().find('label').toggleClass('hide');
			$(this).parent().find('button').toggleClass('hide');
		}
	})
})

//css('background-color', 'blue');