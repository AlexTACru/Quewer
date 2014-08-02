<?php

$cli_name = $_POST['cli_name'];
$cli_invoice = $_POST['cli_invoice'];
$cont_name = $_POST['cont_name'];
$cont_phone = $_POST['cont_phone'];
$call_time = $_POST['call_time'];
$passed_time = $_POST['passed_time'];
$end_call_time = $_POST['end_call_time'];
$cli_que = $_POST['cli_que'];
$cli_ans = $_POST['cli_ans'];
$admin = $_POST['admin'];


require_once('config.php');	

/*$cli_invoice = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
$cli_invoice_query = mysql_query($cli_invoice) or die("Query invoice faild");
$cli_info = mysql_fetch_assoc($cli_invoice_query);*/

if ($cli_name OR $cli_invoice)
{
	if ($cli_name AND $cli_invoice) {
		$invoiceWithoutName = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice' AND `cli_name` = ''";
		$invoiceWithoutName_query = mysql_query($invoiceWithoutName) or die("Query select_cli_invoice faild");
		$cli_info = @mysql_fetch_assoc($invoiceWithoutName_query);
		$cli_id = $cli_info['id_cli'];	
		if ($cli_info) {
			$update_cli_info = "UPDATE `client_info` SET `cli_name` = '$cli_name', `cli_invoice` = '$cli_invoice', `cont_name` = '$cont_name', `cont_phone` = '$cont_phone' WHERE `id_cli` = '$cli_id'";
			$update_cli_info_query = mysql_query($update_cli_info) or die("Query update faild");
		}
		else{
			$select_cli_info = "SELECT * FROM `client_info` WHERE `cli_name` LIKE '%$cli_name%' and `cli_invoice` = '$cli_invoice'";
			$cli_invoice_query = mysql_query($select_cli_info) or die("Query cli info faild");
			$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
		}
	}
	else
	{
		if ($cli_invoice) {
			$select_cli_invoice = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
			$cli_invoice_query = mysql_query($select_cli_invoice) or die("Query invoice faild");
			$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
		}
		else{
			$select_cli_invoice = "SELECT * FROM `client_info` WHERE `cli_name` LIKE '%$cli_name%'";
			$cli_invoice_query = mysql_query($select_cli_invoice) or die("Query name faild");
			$cli_info = @mysql_fetch_assoc($cli_invoice_query);	
		}	
	}
	
}

if (!$cli_info) {
	$ins_cli_info = "INSERT INTO `client_info` 
	(`cli_name`, `cli_invoice`, `cont_name`, `cont_phone`) 
	VALUE ('$cli_name', '$cli_invoice', '$cont_name', '$cont_phone')";
	$ins_cli_info_res = mysql_query($ins_cli_info) or die("Query faild");

	$cli_invoice_info = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
	$cli_invoice_query = mysql_query($cli_invoice_info) or die("Query invoice faild");
	$cli_info = mysql_fetch_assoc($cli_invoice_query);
	$cli_id = $cli_info['id_cli'];
}
else {
	$cli_id = $cli_info['id_cli'];

	$update_cli_info = "UPDATE `client_info` SET `cli_name` = '$cli_name', `cli_invoice` = '$cli_invoice', `cont_name` = '$cont_name', `cont_phone` = '$cont_phone' WHERE `id_cli` = '$cli_id'";
	$update_cli_info_query = mysql_query($update_cli_info) or die("Query update faild");
}

/*--------------------Record call time----------------------*/
$ins_time_info = "INSERT INTO `time`
	(`id_cli`, `call_time`, `passed_time`, `end_call_time`)
	VALUE ('$cli_id', '$call_time', '$passed_time', '$end_call_time')";	
$ins_time_info_query = mysql_query($ins_time_info) or die("Query time faild");

$call_time_info = "SELECT * FROM `time` WHERE `id_cli` = '$cli_id' ORDER BY `id_call` DESC LIMIT 1";
$call_time_info_query = mysql_query($call_time_info) or die("Query invoice faild");
$time_info = mysql_fetch_assoc($call_time_info_query);

$time_id = $time_info['id_call'];


$ins_cli_que_ans = "INSERT INTO `que_ans`
	(`id_cli`, `id_time`, `que`, `ans`, `admin`)
	VALUE ('$cli_id', '$time_id', '$cli_que', '$cli_ans', '$admin')";
	
$ins_cli_que_ans_query = mysql_query($ins_cli_que_ans) or die("Query time faild");
