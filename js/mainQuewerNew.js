
$(document).ready(function(){

/*---------------------var-------------------------------*/

MW = $("#main_wrap");
d_s = "#date-side";
m_s = "#middle-side";
o_q = "#other_que";
dB_1 = "#bottom-side";
x = 0;
i = 0;
var clearCliInvoice = "Счет организации";
var clearCliName = "Название организации";
var allInpQue = "";
var allInpAns = "";
var wheresAdmin = "";


/*----------------------------Вопросы-------------------------------------*/

insert_li_que = "<li><a href='#' class='question'>Не&nbsp;приходят&nbsp;СМС</a></li><li><a href='#' class='question'>Как&nbsp;сделать&nbsp;ключ&nbsp;ЭП</a></li><li><a href='#' class='question'>Не&nbsp;загружается&nbsp;Java-апплет</a></li><li><a href='#' class='question'>Как&nbsp;войти&nbsp;в&nbsp;ИБ</a></li><li><a href='#' class='question'>Токен&nbsp;не&nbsp;определился</a></li><li><a href='#' class='question'>Ключи&nbsp;заблокированы</a></li><li><a href='#' class='question'>Изменить&nbsp;Заявление&nbsp;для&nbsp;СМС-П</a></li><li><a href='#' class='question'>Не&nbsp;пришла&nbsp;выписка&nbsp;с&nbsp;приложением</a></li><li><a href='#' class='question'>Не&nbsp;сходятся&nbsp;остатки&nbsp;в&nbsp;ИБ</a></li><li><a href='#' class='question'>Как&nbsp;настроить&nbsp;импорт/экспорт&nbsp;с&nbsp;1С</a></li><li><a href='#' class='question'>Не&nbsp;распечатывается&nbsp;документ&nbsp;из&nbsp;ИБ</a></li><li><a href='#' class='question'>Как&nbsp;сменить&nbsp;пароль&nbsp;для&nbsp;ЭП</a></li><li><a href='#' class='question'>Не&nbsp;правильно&nbsp;указно&nbsp;наименование&nbsp;в&nbsp;ИБ</a><li><a href='#' class='question'>Не&nbsp;подтягивается&nbsp;справочник&nbsp;корреспондентов</a></li><li><a href='#' class='question'>Что&nbsp;нужно&nbsp;установить&nbsp;перед&nbsp;началом&nbsp;работы</a></li>";

/*----------------------------Ответы--------------------------------------*/



insert_li_ans_1 =  "<li><a class='ans' href='#'>Перезагрузить&nbsp;телефон</a></li><li><a href='#' class='ans'>Заново&nbsp;запросить&nbsp;СМС</a></li><li><a href='#' class='ans'>Почистить&nbsp;телефон&nbsp;от&nbsp;СМС</a></li><li><a href='#' class='ans'>Был&nbsp;изменен&nbsp;номер&nbsp;для&nbsp;СМС-Подтверждения</a></li>";
insert_li_ans_2 =  "<li><a href='#' class='ans'>Инструкция&nbsp;как&nbsp;сделать&nbsp;новые&nbsp;ключи</a></li>";
insert_li_ans_3 =  "<li><a href='#' class='ans'>Проверить&nbsp;версию&nbsp;Java</a></li><li><a href='#' class='ans'>Установить/обновить&nbsp;Java</a></li><li><a href='#' class='ans'>Почистить&nbsp;КЭШ&nbsp;Java</a></li><li><a href='#' class='ans'>Почистить&nbsp;КЭШ&nbsp;браузера</a></li><li><a href='#' class='ans'>Нажать&nbsp;клавишу&nbsp;F5</a></li>";
insert_li_ans_4 =  "<li><a href='#' class='ans'>Инструкция&nbsp;как&nbsp;войти</a></li>";
insert_li_ans_5 =  "<li><a href='#' class='ans'>Сменить&nbsp;порт&nbsp;токена</a></li><li><a href='#' class='ans'>Установить&nbsp;драйвер&nbsp;токена</a></li><li><a href='#' class='ans'>Переустановить&nbsp;драйвер&nbsp;токена</a></li>";
insert_li_ans_6 =  "<li><a href='#' class='ans'>Ещё&nbsp;не&nbsp;активириванный&nbsp;клиент</a></li><li><a href='#' class='ans'>Выбрать&nbsp;рабочие&nbsp;ключи</a></li><li><a href='#' class='ans'>Сделать&nbsp;новые&nbsp;ключи</a></li><li><a href='#' class='ans'>Продлить&nbsp;полномочия&nbsp;сотрудника.&nbsp;+новые&nbsp;ключи</a></li>";
insert_li_ans_7 =  "<li><a href='#' class='ans'>Инструкция&nbsp;где&nbsp;взять&nbsp;Заявление</a></li>";
insert_li_ans_8 =  "<li><a href='#' class='ans'>Повторно&nbsp;отправить&nbsp;выписку</a></li>";
insert_li_ans_9 =  "<li><a href='#' class='ans'>Выполнить&nbsp;синхранизацию</a></li>";
insert_li_ans_10 =  "<li><a href='#' class='ans'>Инструкция&nbsp;как&nbsp;настроить</a></li>";
insert_li_ans_11 =  "<li><a href='#' class='ans'>Очистить&nbsp;КЭШ&nbsp;Java</a></li>";
insert_li_ans_12 =  "<li><a href='#' class='ans'>Инструкция&nbsp;как&nbsp;сменить</a></li>";
insert_li_ans_13 =  "<li><a href='#' class='ans'>Изменить&nbsp;в&nbsp;соответствии&nbsp;с&nbsp;ОДБ</a></li>";
insert_li_ans_14 =  "<li><a href='#' class='ans'>Известная&nbsp;проблема,&nbsp;работы&nbsp;ведутся</a></li>";
insert_li_ans_15 =  "<li><a href='#' class='ans'>Инструкция,&nbsp;что&nbsp;нужно&nbsp;установить</a></li>";


/*---------------------function--------------------------*/

function insert_input_cont_data (){
	addinp = "<div id='cont_data'><input id='cont_name' type='text' value='Контактное лицо' /><input id='cont_phone' type='text' value='Контактный номер' /><input id='date_call' type='text' readonly /><input id='time_call' type='text' readonly /><input id='end_call' type='text' readonly /><input id='admin' type='text' value='Администратор' readonly /></div><div id='last_que_ans'><textarea id='questions' class='que' disabled /><textarea id='answers' class='que' disabled /></div>";
	$("#top-side").append(addinp);
}

function insert_button_L (text_button, insert_li){
	addbut = "<div class='btn-group'><button class='btn' data-toggle='dropdown'>"+text_button+"</button><button class='btn_mini' data-toggle='dropdown'><span class='caret'></span></button><ul class='dropdown-menu' role='menu'>"+insert_li+"</ul></div>";
	$("#L-side_area").append(addbut);
}


function insert_button_R (text_button, insert_li){
	addinp2 = "<div class='btn-group'><button class='btn' data-toggle='dropdown'>"+text_button+"</button><button class='btn_mini' data-toggle='dropdown'><span class='caret'></span></button><ul class='dropdown-menu pull-right' role='menu'>"+insert_li+"</ul></div>";
	$("#question").append(addinp2);
}

function dBlock (id_block){	$(id_block).css("display", "block");}


function insert_input_que (text_input){
	addinp = "<div><input class='que' type='text' value="+text_input+" readonly /><a class='close' data-dismiss='alert' href='#'>x</a></div>";
	dBlock (dB_1);
	$("#bottom-side_L").append(addinp);
}

function insert_text_que_ans_other (t_q_a_id, t_q_a_text, id_butt, where_ins){
	addinp = "<div class='other_block' ><textarea id="+t_q_a_id+" class='que' maxlenght='1000' placeholder="+t_q_a_text+" ></textarea><button class='btn' id="+id_butt+">Добавить</button></div>";
	$(where_ins).append(addinp);
}


function insert_button_accept (id_butt, text_button, in_butt){
	addbutac = "<button class='btn' id="+id_butt+">"+text_button+"</button>";
	$(in_butt).append(addbutac);
}

function insert_text_ans_other_W (get_text, where_ins){
	text_que_other = $(get_text).val();
	addinp = "<div><textarea class='que' disabled>"+text_que_other+"</textarea><a class='close' data-dismiss='alert' href='#'>x</a></div>";
	$(where_ins).append(addinp);
	dBlock(dB_1);
}


function insert_input_ans_R (id_ans, text_input){
	addinp = "<div><input id="+id_ans+" name="+id_ans+" class='que' type='text' value="+text_input+" readonly /><a class='close' id='c_13' data-dismiss='alert' href='#'>x</a></div>";
	dBlock (dB_1);
	$("#bottom-side_R").append(addinp);
}

function dNone (this_){$(this_).css("display", "none");};
function t_t (this_){tx = $(this_).text();}
function t_v (this_){valu = $(this_).val();}

function clear_input (this_) {
	clearit = "";	
	$(this_).val(clearit);
}

function make_que_num (){
	if (i >= 0) {
		i++;
		que_num = "que_" + i;
	};
}

function a_id (this_)
{
	ans_id = this_.id;
}

function inp_que_text(tx)
	{
		//var inpQue = tx;
		allInpQue = allInpQue + tx + "; ";
		console.log("input = " + allInpQue);
	}

function inp_ans_text(tx)
	{
		var inpAns = tx;
		allInpAns = allInpAns + inpAns + "; ";
		console.log("input = " + allInpAns);
	}	

function make_question (this_, insert_li_ans_)
{
	t_t(this_);
	//a_id(this_);
	//console.log("ans_id = " + ans_id);
	insert_input_que(tx);
	insert_button_R(tx, insert_li_ans_);
	inp_que_text(tx);
	dNone(this_);
}

function make_answer (this_)
{
	t_t(this_);
	a_id(this_);
	insert_input_ans_R(ans_id, tx);
	inp_ans_text(tx);
	dNone(this_);
}

function formReport()
{

}



function ajax_cli_info()
	{
		var inpCliName = $("#client_name").val();
		var inpCliInvoice = $("#client_invoice").val();
		console.log("1 = " + inpCliName + inpCliInvoice);
		if (inpCliName == clearCliName) {
			inpCliName = "";
		}
		if (inpCliInvoice == clearCliInvoice) {
			inpCliInvoice = "";
		}
		console.log("2 = " + inpCliName + inpCliInvoice);
		var inpContName = $("#cont_name").val();
		var inpContPhone = $("#cont_phone").val();

		$.ajax({
			type: "POST",
			data: {cli_name:inpCliName,cli_invoice:inpCliInvoice,cont_name:inpContName,cont_phone:inpContPhone},
			url: "/php/firstCheck.php",
			dataType: "json",
			success: function(data)
				{
					if (data) {
						$("#client_invoice").val(data.cli_invoice);
						$("#client_name").val(data.cli_name);
						$("#cont_name").val(data.cont_name);
						$("#cont_phone").val(data.cont_phone);
						$("#date_call").val(data.call_time);
						$("#time_call").val(data.passed_time);
						$("#end_call").val(data.end_call_time);
						$("#questions").val(data.que);
						$("#answers").val(data.ans);
						$("#admin").val(data.admin);
					};
				}
		});
	}	


function ajax_all_cli_info()
	{
		var inpCliName = $("#client_name").val();
		var inpCliInvoice = $("#client_invoice").val();
		var inpContName = $("#cont_name").val();
		var inpContPhone = $("#cont_phone").val();
		var inpCallTime = $("#call_time").val();
		var inpPassedTime = $("#passed_time").val();
		var inpEndCallTime = $("#end_call_time").val();
		var inpAdmin = wheresAdmin;

		$.ajax({
			type: "POST",
			data: {cli_name:inpCliName,cli_invoice:inpCliInvoice,cont_name:inpContName,cont_phone:inpContPhone,call_time:inpCallTime,passed_time:inpPassedTime,end_call_time:inpEndCallTime,cli_que:allInpQue,cli_ans:allInpAns, admin:inpAdmin},
			url: "/php/finalWrite.php",
			dataType: "json",
			success: function()
				{
					console.log("сейчас должна быть перезагрузка страницы")
				}
		});
	}	

function ajax_form_report()
{
	var passwordReport = $("#passwordReport").val();

	$.ajax({
		type:"POST",
		data: {passReport:passwordReport},
		url:"/php/writeinfile.php",
		dataType:"json",
		success:function(data)
		{

			if (data) {
				alert("Отчет сформирован");			
			}
			else{
				alert("Проверка не пройдена!");
			}
		}
	});
}

function ajax_take_answer()
{
	
}

/*---------------------Секундомер & Дата и время-------------------------*/

var timer;
var timer2;
var d_f_id;
var md;
var md_d;
var md_t;
var md_d_t;
var secs = 0;
var mins = 0; 
var hour = 0;

function timer_fun(){
		secs++;
		if (mins>59) {
			hour++;
			mins = 0;
		};
		if(secs>59){
			mins++;
			secs = 0;
		}

		if (hour>9) {
			hour0 = hour;
		}
		else {
			hour0 = "0" + hour;
		}
		if (mins>9) {
			mins0 = mins;
		}
		else {
			mins0 = "0" + mins;
		}
		if (secs>9) {
			secs0 = secs;
		}
		else{
			secs0 = "0" + secs;
		}
		$("#passed_time").val(hour0 + ":" + mins0 + ":" + secs0);
	}
function date_fun_date(){
	md = new Date();
	mm = md.getMonth() + 1;
	mdd = md.getDate();
	if (mm>9) {
			mm0 = mm;
		}
		else {
			mm0 = '0' + (mm);
		}	
	if (mdd>9) 
		{
			mdd0 = mdd;
		}
	else
		{
			mdd0 = '0' + (mdd);
		}
	md_d = (md.getFullYear()) + '.' + (mm0) + '.' + (mdd0);

}

function date_fun_time(){
	md_t_h = md.getHours();
	md_t_m = md.getMinutes();
	if (md_t_h>9) {
			md_t_h0 = md_t_h;
		}
		else {
			md_t_h0 = "0" + md_t_h;
		}
		if (md_t_m>9) {
			md_t_m0 = md_t_m;
		}
		else {
			md_t_m0 = "0" + md_t_m;
		}
		md_t = (md_t_h0) + ':' + (md_t_m0);	
}

function date_fun_w_dt(d_f_id){
	date_fun_date();
	date_fun_time();

	
	md_d_t = md_d + ' - ' + md_t;
	$(d_f_id).val(md_d_t);
}

function date_fun_w_t(d_f_id){
	date_fun_date();
	date_fun_time();

	$(d_f_id).val(md_t);
}

function date_timer(){
	timer = setInterval(timer_fun, 1000);	
	date_fun_w_dt("#call_time");	
}


/*--------------------- Конец для Секундомер & Дата и время-------------------------*/



function inception_fun (){
		insert_input_cont_data();
		insert_button_L("Выбрать вопрос", insert_li_que);
		insert_text_que_ans_other("inp_que_other", "Свой&nbsp;вариант&nbsp;вопроса", "but_acc", "#L-side_area_other");
		insert_text_que_ans_other("inp_ans_other", "Свой&nbsp;вариант&nbsp;ответа", "but_other_ans", "#R-side_area_other");
		insert_button_accept("but_write", "Записать", "#write_butt");
		$("#write_butt").css("display", "inline-block");
		dNone("#d_incep");
		$("#client_name").css("margin-right", "0");
		dBlock(d_s);
		dBlock(m_s);
		dBlock(o_q);
		date_timer();
		ajax_cli_info();
	}

/*---------------------insert data with jQuery----------*/

MW.on("click", ".admin", function(){
	t_t(this);
	wheresAdmin = tx;
})

MW.on("click", "#inception", function(){
		inception_fun();
	});


MW.on("click", ".question", function(){
	make_question(this, insert_li_ans_1);
});
MW.on("click", "#que_2", function(){
	make_question(this, insert_li_ans_2);
});
MW.on("click", "#que_3", function(){
	make_question(this, insert_li_ans_3);
});
MW.on("click", "#que_4", function(){
	make_question(this, insert_li_ans_4);
});
MW.on("click", "#que_5", function(){
	make_question(this, insert_li_ans_5);
});
MW.on("click", "#que_6", function(){
	make_question(this, insert_li_ans_6);
});
MW.on("click", "#que_7", function(){
	make_question(this, insert_li_ans_7);
});
MW.on("click", "#que_8", function(){
	make_question(this, insert_li_ans_8);
});
MW.on("click", "#que_9", function(){
	make_question(this, insert_li_ans_9);
});
MW.on("click", "#que_10", function(){
	make_question(this, insert_li_ans_10);
});
MW.on("click", "#que_11", function(){
	make_question(this, insert_li_ans_11);
});
MW.on("click", "#que_12", function(){
	make_question(this, insert_li_ans_12);
});
MW.on("click", "#que_13", function(){
	make_question(this, insert_li_ans_13);
});
MW.on("click", "#que_14", function(){
	make_question(this, insert_li_ans_14);
});

MW.on("click", "#but_acc", function(){
	vereText = $("#inp_que_other").val();
	if (!vereText) {
			alert("Не введён текст");
		}
		else{
			insert_text_ans_other_W("#inp_que_other", "#bottom-side_L");
			inp_que_text(text_que_other);			
		}
});

MW.on("click", "#but_other_ans", function(){
	vereText = $("#inp_ans_other").val();
	if (!vereText) {
		alert("Не введён текст");
	}
	else{
		insert_text_ans_other_W("#inp_ans_other", "#bottom-side_R");
	inp_ans_text(text_que_other);
	}	
})

MW.on("click", ".ans", function(){make_answer(this);});
MW.on("click", "#que_other", function(){
	dNone(this);
});

MW.on("dblclick", "input", function(){
	clear_input(this);
});

MW.on("click", "#formReport", function(){
	ajax_form_report();
})

$("#quewer").mouseover(function(){
	randomNumber = Math.floor(111111 + Math.random()*(999999+1-111111));
	randomColor = "#" + randomNumber;
	console.log("randomColor = " + randomColor);
	$(this).stop().animate({
		opacity: 1,
		color: jQuery.Color(randomColor),
	}, 1000);
}).mouseleave(function(){
	$(this).stop().animate({
		opacity: 0.2,
		color: jQuery.Color("black"),
	}, 1000);
});

//----------------------------Запуск/Запись---------------------//


$("#client_invoice, #client_name").keydown(function(event)
{
	if (event.keyCode == 13) {
    	inception_fun();
	}
});


MW.on("click", "#but_write", function(){
	if (wheresAdmin) {
		clearInterval(timer);
		date_fun_w_t("#end_call_time");
		ajax_all_cli_info();
		setTimeout(function(){location.reload();}, 1000);	
	}
	else {
		alert("Не выбран администратор");
	};
	
});

});
