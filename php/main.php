<?php

$i = 0;

$cli_name = $_POST['cli_name'];
$cli_invoice = $_POST['cli_invoice'];
$cont_name = $_POST['cont_name'];
$cont_phone = $_POST['cont_phone'];
$call_time = $_POST['call_time'];
$passed_time = $_POST['passed_time'];
$end_call_time = $_POST['end_call_time'];

while ($i <= 10) {
 	$que[$i] = $i;
 	$i++;
 }  

$que_1 = $_POST['que_1'];
$que_2 = $_POST['que_2'];
$que_3 = $_POST['que_3'];
$ans_1_1 = $_POST['ans_1_1'];

$connect = mysql_connect(localhost, fr7334_quewer, quewergfhjkm);

if (!$connect)
{
	exit;
}
	mysql_select_db("fr7334_quewer");	



$cli_invoice_sql = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
$cli_choose = mysql_query($cli_invoice_sql) or die("Query invoice faild");
$cli_info = mysql_fetch_assoc($cli_choose);

if (!$cli_info) {
	$ins_cli_info = "INSERT INTO `client_info` 
	(`cli_name`, `cli_invoice`, `cont_name`, `cont_phone`) 
	VALUE ('$cli_name', '$cli_invoice', '$cont_name', '$cont_phone')";
	$ins_cli_info_res = mysql_query($ins_cli_info) or die("Query faild");

	$cli_invoice_sql = "SELECT * FROM `client_info` WHERE `cli_invoice` = '$cli_invoice'";
	$cli_choose = mysql_query($cli_invoice_sql) or die("Query invoice faild");
	$cli_info = mysql_fetch_assoc($cli_choose);

	
}


	
	$cli_id = $cli_info['id_cli'];

	$ins_time_info = "INSERT INTO `time`
	(`id_cli`, `call_time`, `passed_time`, `end_call_time`)
	VALUE ('$cli_id', '$call_time', '$passed_time', '$end_call_time')";
	
	$ins_time_info_query = mysql_query($ins_time_info) or die("Query time faild");

	


echo json_encode($cli_info);


