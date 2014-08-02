$(document).ready(function(){

aa = "#que_area";
aa_2 = "#dt_see_t_ans_ans_area";

$("#client_name").val("");
$("#que_area").css({display: "none"});
$("#dt_see_t_ans_ans_area").css({display: "none"});
$("#dt_load_j_ans_area").css({display: "none"});

$("#dt_see_t").click(function () {
	$(aa).stop().animate(
		{
			toggle: "show",
		}, 100);
	$("#dt_see_t_ans").stop().animate(
		{
			toggle: "toggle",
		}, 100);
	$(aa).val("Не видно токен");

});

$("#dt_load_j").click(function () {
	$(aa).stop().animate(
		{
			toggle: "show",
		}, 100);
	$("#dt_load_j_ans").stop().animate(
		{
			toggle: "toggle",
		}, 100);
	$(aa).val("Не загружается Java");
});

$("#dt_see_t_ans_pereustanovit").click(function () {
	var answer = 'Переустановить драйвер токена';
	$("#dt_see_t_ans_area_d").append("<input class='que' type='text' value='{$answer}' readonly/>");
	
	
});

$("#dt_see_t_ans_ochistit").click(function () {
	x = $("#aa_2").attr('value');
	console.log(x);
	if (x == null) {alert("уже есть ответ")}
	else {alert("123")};

	$(aa_2).stop().animate(
		{
			toggle: "show",
		}, 1000);
	$(aa_2).val("Очистить кеш Java");
});
	
});


