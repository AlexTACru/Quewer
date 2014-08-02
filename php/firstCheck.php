<?php

$cli_name = $_POST['cli_name'];
$cli_invoice = $_POST['cli_invoice'];
$cont_name = $_POST['cont_name'];
$cont_phone = $_POST['cont_phone'];
$cli_info;

require_once('config.php');

if ($cli_invoice OR $cli_name)
{
	if ($cli_invoice AND $cli_name) {
		$select_cli_info = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice' and `cli_name` LIKE '%$cli_name%'";
		$cli_invoice_query = mysql_query($select_cli_info) or die("Query cli info faild");
		$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
		$id_cli = $cli_info[id_cli];
	}
	else
	{
		if ($cli_invoice) {
			$select_cli_invoice = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
			$cli_invoice_query = mysql_query($select_cli_invoice) or die("Query invoice faild");
			$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
			$id_cli = $cli_info[id_cli];
		}
		else{
			$select_cli_invoice = "SELECT * FROM `client_info` WHERE `cli_name` LIKE '%$cli_name%'";
			$cli_invoice_query = mysql_query($select_cli_invoice) or die("Query name faild");
			$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
			$id_cli = $cli_info[id_cli];
		}	
	}
	
	if (!$cli_info) {
		$ins_cli_info = "INSERT INTO `client_info` 
		(`cli_name`, `cli_invoice`) 
		VALUE ('$cli_name', '$cli_invoice')";
		$ins_cli_info_query = mysql_query($ins_cli_info) or die("Query new_cli faild");
		$cli_info = @mysql_fetch_assoc($ins_cli_info_query);
		$id_cli = $cli_info[id_cli];
	}

}

	$select_last_que = "SELECT * FROM `client_info` LEFT JOIN `time` ON `client_info`.`id_cli` = `time`.`id_cli` LEFT JOIN `que_ans` ON `time`.`id_cli` = `que_ans`.`id_cli` WHERE `time`.`id_cli` = '$cli_info[id_cli]' and `time`.`id_call` = `que_ans`.`id_time` ORDER By `id_call` DESC LIMIT 4"; 
	$last_que_query = mysql_query($select_last_que) or die("Query last_que faild");
	$last_que_info = mysql_fetch_array($last_que_query);
	/*
		while ($last_que_info = mysql_fetch_array($last_que_query)) {
		$cli_info1[] = $last_que_info;
	}*/
	$cli_info1 = $last_que_info;




echo json_encode($cli_info1);


