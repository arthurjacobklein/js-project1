
function pyramid(level) {

  level = prompt("Combien d'étages veux-tu ?")
 
	for(var i = 1; i <= level; i++) {
		var row = '';

		for (var j = 1; j <= i; j++) {
			row += '*';
		}

console.log(row);
	}

}

pyramid(pyramid("${level}"));
