function solution_doubly_even($input){
	$counter = 0;
	$corners = ($input / 2) / 2;
	$magic = new Array(); // <----- declare $magic as array
	for( i = 0; i < $input; i++){
		$magic[i] = new Array(); // <----- declare $magic array as a multidimensional array
		for( x = 0; x < $input; x++){
			$counter++; // <------ counts the number of cell in the table
			
			// --- determine the upper corners of the magic square --- //
			if((i < $corners && x < $corners) || (i < $corners && x >= $input - $corners)){
				$magic[i][x] = $counter;//<--- setting the value of the upper corners
			}
			
			// --- determine the center of the magic square --- //
			if((i >= $corners && i < $input - $corners) && (x >= $corners && x < $input - $corners)){
				$magic[i][x] = $counter;//<--- setting the value in the center
			}
			
			// --- determine the bottom corners of the magic square --- //
			if((i >= $input - $corners && x < $corners) || (i >= $input - $corners && x >= $input - $corners)){
				$magic[i][x] = $counter;//<--- setting the value of the bottom corners
			}
			
		}
	}
	
	// --- setting the values on the indexes that has no value --- //
	for( i = 0; i < $input; i++){
		for( x = 0; x < $input; x++){
			if($magic[i][x] == null){
				$magic[i][x] = $counter;
			}
			$counter--;
			
			
		}
	}
	
	// --- display the array in a table --- //
	$content = '<table border=1>';
	
	for( i = 0; i < $input; i++){
		$content += '<tr>';
		for( x = 0; x < $input; x++){
			$content += '<td>'+$magic[i][x]+'</td>';
			

		}
		$content += '</tr>';
	}
	$content += '</table>';
	$('#content').html($content);
}