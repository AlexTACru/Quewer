<?php
require_once('php/config.php');
?>

<!DOCTYPE HTML>
<?php ob_start('ob_gzhandler'); ?>
<html>
<head>
<title>Quewer</title>
<meta charset='UTF-8' />
<link rel="stylesheet" type="text/css" href="css/main.css"/>
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css"/>
<!--<script src="js/jquery190.js"></script>-->
<script src="js/jquery-1.9.1.js"></script>
<script src="bootstrap/js/bootstrap.js"></script>
<script src="js/mainQuewer.js"></script>
<script src="js/jquery.color-2.1.2.min.js"></script>



</head>

<body>
	
	<div id="main_wrap">
		<div id="quewer">
			<h1>QUEWER</h1>
		</div>
		<div id="newWinPlus">
			<a class="btn_mini_2" href="#" target="_blank"><span class="icon-file"></span></a>
			<div class="btn-group" id="admin-group" data-toggle="buttons-radio">
				<button type="button" class="btn admin">Батанина</button>
				<button type="button" class="btn admin">Игнатова</button>
				<button type="button" class="btn admin">Трофимчук</button>
			</div>
			<!--<a href="#myModal" role="button" class="btn_mini_2" id="report2" data-toggle="modal">Отчет</a>
			<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-header">
				    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				    <h3 id="myModalLabel">Формирование отчета</h3>
				  </div>
				  <div class="modal-body">
				    <input id="passwordReport" type="password" />
				    <button class="btn" id="formReport" data-dismiss="modal" aria-hidden="true">Сформировать</button>
				  </div>
				  <div class="modal-footer">
				    <button class="btn" data-dismiss="modal" aria-hidden="true">Закрыть</button>
				    
				  </div>
			</div>-->
			<!--<button class="btn_mini_2" id="report">Сформировать</button>-->
		</div>
			<div id="d_incep" class="btn-group">
				<button class="btn" id="inception" >СТАРТ</button>				
			</div>
		
			<div id="top-side">
				<div id="cli_data">
					<input name="cli_invoice" id="client_invoice" type="text" value="Счет организации"/>
					<input name="cli_name" id="client_name" type="text" value="Название организации" />
				</div>
				
			</div>
			<div id="date-side">
				<input type="text" name="call_time" id="call_time" />
				<input type="text" name="passed_time" id="passed_time" />
				<input type="text" name="end_call_time" id="end_call_time" />
			</div>
			<div id="middle-side">
					<div id="L-side">				
						<div id="L-side_area"><p class="muted">Вопросы<br></p></div>
					</div>
			
					<div id="R-side">
						<div id="R-side_area">
							<p class="muted">Ответы<br></p>
							<div id="question"></div>
						</div>
					</div>
			</div>
			<div id="other_que">
					<div id="L-side_other"><div id="L-side_area_other"></div></div>
					<div id="R-side_other"><div id="R-side_area_other"></div></div>					
				</div>
			<div id="Record-side">
				<div id="L-Rec-s"></div>
				<div id="R-Rec-s"></div>
			</div>

			<div id="bottom-side">
				<div id="bottom-side_wrap">
					<div id="bottom-side_L"></div>
					<div id="bottom-side_R"></div>
				</div>			
			</div>
			<div id="write_butt"></div>
			
		
	</div>


</body>
</html>

<?php ob_end_flush(); ?>