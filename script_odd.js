$(function() {
	$('#create').click(function() {
		$input = $('#input').val();
		if ($input % 2 && $input > 1)
		{
			genTbl($input);
			createSolution($input);
		}
	});
});

function genTbl($input)
{
	$content = '<table border=1>';
	for ($i = 0; $i < $input; $i++)
	{
		$content += '<tr>';
		for ($j = 0; $j < $input; $j++)
		{
			$content += '<td>&nbsp;</td>';
		}
		$content += '</tr>';
	}
	$content += '</table>';
	$('#content').html($content);
}
function genTbl2($input, $magic)
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
			{
				$col = 0;
			}
			if ($row < 0)
			{
				$row = $input - 1;
			}
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
	genTbl2($input, $magic);
}