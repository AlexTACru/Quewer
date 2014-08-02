<?

$connect = mysql_connect(localhost, quewer_boss, quewergfhjkm);

if (!$connect)
{
	exit;
}
	mysql_select_db("quewer");	
$key = 13;	
$queryTest = "SELECT * FROM `testBD` WHERE `id` = '2'";
$q = mysql_query($queryTest);
$res = mysql_fetch_assoc($q);
$res['key'] = $key;

echo json_encode($res);