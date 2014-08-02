<?php
$test = 'Тест';
if (!mysql_connect(localhost, quewer_boss, quewergfhjkm))
{
	exit;
}
	mysql_select_db("quewer_boss");	

$que_sql = "INSERT INTO que (id_que, text_que) VALUES ('1', '$test')";
$que_result = mysql_query($que_sql) or die("Query failed");
php?>
