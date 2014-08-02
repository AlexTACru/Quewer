<?php


$cli_name = mysql_escape_string(@$_REQUEST['cli_name']);
$cli_invoice = mysql_escape_string(@$_REQUEST['cli_invoice']);
$cont_name = mysql_escape_string(@$_REQUEST['cont_name']);
$cont_phone = mysql_escape_string(@$_REQUEST['cont_phone']);
$call_time = mysql_escape_string(@$_REQUEST['tm1']);
$passed_time = mysql_escape_string(@$_REQUEST['tm2']);
$end_call_time = mysql_escape_string(@$_REQUEST['tm3']);


$connect = mysql_connect(localhost, quewer_boss, quewergfhjkm);

if (!$connect)
{
	exit;
}
	mysql_select_db("quewer");	

$write_cli_inf = "INSERT INTO client_info (cli_name, cli_invoice, cont_name, cont_phone) VALUES ('$cli_name', '$cli_invoice', '$cont_name', '$cont_phone')";
$inf_result = mysql_query($write_cli_inf) or die ("Query failed1");

$sel_cli_id = "SELECT * FROM `client_info` WHERE `cli_name` = '$cli_name' order by 'id_cli' desc limit 1 ";
$get_cli_id = mysql_query($sel_cli_id) or die ("Query failed2");
$cli_id_a = mysql_fetch_assoc($get_cli_id);
$cli_id = $cli_id_a['id_cli'];

//echo $magic_result['id_cli'];

$write_call_time = "INSERT INTO time (id_cli, call_time, passed_time, end_call_time) VALUES ('$cli_id', '$call_time', '$passed_time', '$end_call_time')";
$time_result = mysql_query($write_call_time) or die ("Query failed3");

header ("Location: ../index.php");
mysql_close($connect);
?>