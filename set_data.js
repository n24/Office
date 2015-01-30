
var json_data = [];
var json_transactions = [];

function set_transactions ( data ) {
	for ( var index = 0; index < data.length; index++ ) {
		json_transactions[index] = {
			"date":data[index][0],
			"money":data[index][1],
			"type":data[index][2]
		};
	}
	
}

function set_data ( data ) {
	for ( var index = 0; index < data.length; index++ ) {
		json_data[index] = {
			"date":data[index][0],
			"money":data[index][1]
		};
	}
}
