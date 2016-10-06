
function createList(listData, listContainer = 'ul', itemContainer = 'li', result){
		var result = result||['<' + listContainer + '>'];

		for (var i = 0; i < listData.length; i++) {
			if (Array.isArray(listData[i])) {
				result.push('<' + listContainer + '>')
				createList(listData[i], listContainer, itemContainer, result);
				result.push('</' + listContainer + '>')
			} else {
				var teg = '<' + itemContainer + '>' + listData[i] + '</' + itemContainer + '>'
				result.push(teg);
			}

		}

			result = result.join('');
			result += '</' + listContainer + '>';
			return $('#result').html(result);
	}
		
createList(['мясо', ['яблоки', [[['клубника']]],'бананы'], 'орехи'], 'ol');