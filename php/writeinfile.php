<?php

$passwordReport = $_POST['passReport'];

require_once('config.php');

$select_pass = "SELECT * FROM `pass` WHERE `pass` = '$passwordReport'";
$select_pass_query = mysql_query($select_pass) or die("Query pass failed");
$pass_check = mysql_fetch_assoc($select_pass_query);



if ($pass_check) {

	$get_data = "SELECT client_info.cli_name, client_info.cli_invoice, client_info.cont_name, client_info.cont_phone, time.call_time, time.passed_time, time.end_call_time, que_ans.que, que_ans.ans 
	FROM `client_info` LEFT JOIN `time` ON client_info.id_cli = time.id_cli 
	LEFT JOIN `que_ans` ON time.id_cli = que_ans.id_cli 
	WHERE time.id_call = que_ans.id_time LIMIT 2";
	$get_data_query = mysql_query($get_data) or die("Query get_dara failed");
	
	while ($all_data = mysql_fetch_assoc($get_data_query)) {
		$all_data_result[] = $all_data;
	}
	
	
	function writeInFile ($val, $filename)
	{
		$str_value = serialize($val);

		$f = fopen($filename, 'w');
		fwrite($f, $str_value);
		fclose($f);
	}

	writeInFile ($all_data_result, 'textfile.txt');

	$pass_check = $all_data_result;
}

echo json_encode($pass_check);