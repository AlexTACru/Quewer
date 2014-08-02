$(document).ready(function(){

aa = "#que_area";


function addinp_que_fun (que){
	addinp = "<input class='que' type='text' value='"+que+"' readonly/>";
	$("#input_ans_area").append(addinp);
}

function addinp_ans_fun (answer){
	addinp = "<input class='que' type='text' value='"+answer+"' readonly/>";
	$("#dt_see_t_ans_area_d").append(addinp);
}

function testoviy_test (text_button, text_li_1){
	addinp = "<div class='btn-group'><button class='btn' data-toggle='dropdown'>"+text_button+"</button><button class='btn_mini' data-toggle='dropdown' ><span class='caret'></span></button><ul class='dropdown-menu' role='menu'><li><a href='#'>"+text_li_1+"</a></li></ul></div>";
	$("#dt_see_t_ans_area_d").append(addinp);
}

$("#client_name").val("");
$("#que_area").css({display: "none"});


$("#dt_see_t").click(function () {
	addinp_que_fun ("Не видно токен");
	$("#dt_see_t_ans").stop().animate(
		{
			toggle: "show",
		}, 1000);
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
	addinp_ans_fun("Переустановить драйвер токена");
});

$("#dt_see_t_ans_pereustanovit").click(function () {
	testoviy_test("Тестируем мы", "Ага, это тест");
});

$("#dt_see_t_ans_ochistit").click(function () {
	addinp_ans_fun("очистить кеш Java");
});



	
});


