<!DOCTYPE html>
<html>
<head>
<title>Magic Square</title>
<script type="text/javascript" src="jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="script_odd.js"></script>
<script type="text/javascript" src="script_doubly_even.js"></script>
<script type="text/javascript">
$(function() {
	$('#create').click(function() {
		$input = $('#input').val();
		if ($input > 1){
			if ($input % 2)
			{
				createSolution($input);
			}
			else if ($input % 4)
			{
				//singly even.
			}
			else
			{
				solution_doubly_even($input);
			}
		}
	});
});
</script>
</head>
<body>
<input type="text" id="input" name="input" />
<button id="create">Display Magic Square</button>
<hr/>
<div id="content"></div>
</body>
</html>