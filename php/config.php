<?php
$hostname = 'localhost';
$username = '';
$password = '';
$dbname = '';
$link = mysql_connect($hostname, $username, $password);

if (!$link)
{	
	die('Нет коннекта: ' .mysql_error());
}

$db_selected = mysql_select_db($dbname);
if (!$db_selected)
{
	die('Нет доступа к БД: ' .mysql_error());
}

?>
