function solution_doubly_even($input){
	$counter = 0;
	$corners = ($input / 2) / 2;
	$magic = new Array();
	for( i = 0; i < $input; i++){
		$magic[i] = new Array();
		for( x = 0; x < $input; x++){
			$counter++;
			if((i < $corners && x < $corners) || (i < $corners && x >= $input - $corners)){
				$magic[i][x] = $counter;
			}
			if((i >= $corners && i < $input - $corners) && (x >= $corners && x < $input - $corners)){
				$magic[i][x] = $counter;
			}
			if((i >= $input - $corners && x < $corners) || (i >= $input - $corners && x >= $input - $corners)){
				$magic[i][x] = $counter;
			}
			
		}
	}
	for( i = 0; i < $input; i++){
		for( x = 0; x < $input; x++){
			if($magic[i][x] == null){
				$magic[i][x] = $counter;
			}
			$counter--;
			
			
		}
	}
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