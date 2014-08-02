<?php
require_once('php/config.php');
?>

<!DOCTYPE HTML>
<html>
<head>
<title>test.ME</title>
<meta charset='UTF-8'>
<script src="js/jquery-1.9.1.js"></script>

<script type="text/javascript">
	function runajax()
	{
		var inp2 = $("#inp2").val();
		$.ajax({
			type: "POST",
			data: inp2,
			url: "/textAjax.php",
			dataType: "json",
			success: function(data)
			{
			var tempX = data.testState;
			$("#inp3").val(tempX);
			}
		})
	}	
	$(document).ready(function () {
		$("#btn1").click(runajax);
	});
</script>
</head>

<body>

<p>Pole 1</p>
<p><input type="text" id="inp2"></input><input type="button" value="PoslaTb" id="btn1"></input></p>
<p>Pole 2</p>
<p><input type="text" id="inp3"></input></p>

</body>
</html>
