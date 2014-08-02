<?php

$cli_name = $_POST['cli_name'];
$cli_invoice = $_POST['cli_invoice'];
$cont_name = $_POST['cont_name'];
$cont_phone = $_POST['cont_phone'];


require_once('config.php');


$select_cli_invoice = "SELECT * FROM `client_info` WHERE `cli_invoice` LIKE '%$cli_invoice%'";
$cli_invoice_query = mysql_query($select_cli_invoice) or die("Query invoice faild");
$cli_info = mysql_fetch_assoc($cli_invoice_query);

if (!$cli_info) {
	$ins_cli_info = "INSERT INTO `client_info` 
	(`cli_name`, `cli_invoice`) 
	VALUE ('$cli_name', '$cli_invoice')";
	$ins_cli_info_res = mysql_query($ins_cli_info) or die("Query faild");

	$cli_info = mysql_fetch_assoc($ins_cli_info_res);
}



echo json_encode($cli_info);


