function genTbl($input, $magic)
{
	$content = '<table border=1>';
	for ($i = 0; $i < $input; $i++)
	{
		$content += '<tr>';
		for ($j = 0; $j < $input; $j++)
		{
			$content += '<td>' + $magic[$i][$j] + '</td>';
		}
		$content += '</tr>';
	}
	$content += '</table>';
	$('#content').html($content);
}
function createSolution($input)
{
	$magic = new Array($input);
	for ($i = 0; $i < $input; $i++)
	{
		$magic[$i] = new Array($input);
	}
	for ($i = 0; $i < $input; $i++)
	{
		for ($j = 0; $j < $input; $j++)
		{
			$magic[$i][$j] = 0;
		}
	}
	$center = Math.ceil($input/2);
	$row = 0;
	$col = $center - 1;
	for ($i = 0; $i < ($input * $input);)
	{
		if ($magic[$row][$col] == 0)
		{
			$magic[$row][$col] = $i + 1;
			$col++;
			$row--;
			if ($col > $input - 1)
				$col = 0;
			if ($row < 0)
				$row = $input - 1;
			$i++;
		}
		else
		{
			$col--;
			$row++;
			if ($row > $input - 1)
				$row = 0;
			if ($col < 0)
				$col = $input - 1;
			$row++;
			if ($row > $input - 1)
				$row = 0;
			if ($col < 0)
				$col = $input - 1;
		}
	}
	genTbl($input, $magic);
}

function solution_singly_even($input)
{
	$maxcol = 0;
	$mincol = 0;
	$maxrow = 0;
	$minrow = 0;
	$magic = new Array($input);
	for ($i = 0; $i < $input; $i++)
	{
		$magic[$i] = new Array($input);
	}
	for ($i = 0; $i < $input; $i++)
	{
		for ($j = 0; $j < $input; $j++)
		{
			$magic[$i][$j] = 0;
		}
	}
	for ($ctr = 0, $i=0; $ctr < 4; $ctr++)
	{
		console.log('loop ' + ($ctr+1));
		if ($ctr == 0)
		{
			$mincol = 0;
			$maxcol = $input / 2;
			$minrow = 0;
			$maxrow = $input / 2;
		}
		else if ($ctr == 1)
		{
			$mincol = $input / 2;
			$maxcol = $input;
			$minrow = $input / 2;
			$maxrow = $input;
		}
		else if ($ctr == 2)
		{
			$mincol = $input / 2;
			$maxcol = $input;
			$minrow = 0;
			$maxrow = $input / 2;
		}
		else if ($ctr == 3)
		{
			$mincol = 0;
			$maxcol = $input / 2;
			$minrow = $input / 2;
			$maxrow = $input;
		}
		$center = $mincol + Math.ceil(($input/2) / 2);
		$row = $minrow;
		$col = $center - 1;
		for ($j = 0; $j < (($input/2) * ($input / 2));)
		{
			if ($magic[$row][$col] == 0)
			{
				$magic[$row][$col] = $i + 1;
				$col++;
				$row--;
				if ($col > $maxcol - 1)
					$col = $mincol;
				if ($row < $minrow)
					$row = $maxrow - 1;
				$i++;
				$j++;
			}
			else
			{
				$col--;
				$row++;
				if ($row > $maxrow - 1)
					$row = $minrow;
				if ($col < $mincol)
					$col = $maxcol - 1;
				$row++;
				if ($row > $maxrow - 1)
					$row = $minrow;
				if ($col < $mincol)
					$col = $maxcol - 1;
			}
		}
	}
	genTbl($input, $magic);
}