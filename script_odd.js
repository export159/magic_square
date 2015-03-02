$(function() {
	$('#create').click(function() {
		$input = $('#input').val();
		if ($input % 2 && $input > 1)
		{
			genTbl($input);
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

function createSolution()
{
	$magic = array();
	
	
}