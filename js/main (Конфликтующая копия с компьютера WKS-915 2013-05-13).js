$(document).ready(function(){

/*---------------------var-------------------------------*/
MW = $("#main_wrap");
insert_li_que = "<li><a href='#' id='que_1'>Не&nbsp;приходят&nbsp;СМС</a></li><li><a href='#' id='que_2'>Как&nbsp;сделать&nbsp;ключ&nbsp;ЭП</a></li><li><a href='#' id='que_other'>Свой&nbsp;вариант</a></li>";
insert_li_ans_1 =  "<li><a href='#' id='ans_11'>Перезагрузить&nbsp;телефон</a></li><li><a href='#' id='ans_12'>Заново&nbsp;запросить&nbsp;СМС</a></li>";
insert_li_ans_2 =  "<li><a href='#' id='ans_21'>Инсрукция&nbsp;как&nbsp;сделать&nbsp;новые&nbsp;ключи</a></li>";
dB_1 = "#bottom-side";

/*---------------------function--------------------------*/



function a_rem (id_q){
	$("a.close").bind("click", function (){
		$(id_q).remove();
	});
}

function insert_button_L (text_button, insert_li){
	addbut = "<div class='btn-group'><button class='btn' data-toggle='dropdown'>"+text_button+"</button><button class='btn_mini' data-toggle='dropdown'><span class='caret'></span></button><ul class='dropdown-menu' role='menu'>"+insert_li+"</ul></div>";
	$("#L-side_area").append(addbut);
}

function insert_button_accept (id_butt, text_button, in_butt){
	addbutac = "<button class='btn' id="+id_butt+">"+text_button+"</button>";
	$(in_butt).append(addbutac);
}

function insert_button_R (text_button, insert_li){
	addinp2 = "<div class='btn-group'><button class='btn' data-toggle='dropdown'>"+text_button+"</button><button class='btn_mini' data-toggle='dropdown'><span class='caret'></span></button><ul class='dropdown-menu' role='menu'>"+insert_li+"</ul></div>";
	$("#R-side_area").append(addinp2);
}

function dBlock (id_block){	$(id_block).css("display", "block");}


function insert_input_que (id_que, text_input){
	addinp = "<div><input id="+id_que+" class='que' type='text' value="+text_input+" readonly /><a class='close' data-dismiss='alert' href='#'>x</a></div>";
	dBlock (dB_1);
	$("#bottom-side_L").append(addinp);
}

function insert_text_que_other (){
	addinp = "<textarea id='inp_que_other' class='que' maxlenght='1000' name='que_other' placeholder='Свой вариант'></textarea>";
	dBlock (dB_1);
	$("#bottom-side_L").append(addinp);
}

function insert_text_ans_other_W (){
	text_que_other = $("#inp_que_other").val();
	/*text_que_other = text_que_other.replace(/\s/g,'&nbsp;');*/
	addinp = "<textarea id='inp_que_other_W' class='que' name='que_other_W' disabled>"+text_que_other+"</textarea>";
	$("#bottom-side_R").append(addinp);
}

function insert_input_ans (id_ans, text_input){
	addinp = "<div><input id="+id_ans+" class='que' type='text' value="+text_input+" readonly /><a class='close' href='#'>x</a></div>";
	dBlock (dB_1);
	$("#bottom-side_L").append(addinp);
}

function insert_input_ans_R (id_ans, text_input){
	addinp = "<div><input id="+id_ans+" class='que' type='text' value="+text_input+" readonly /><a class='close' id='c_13' data-dismiss='alert' href='#'>x</a></div>";
	dBlock (dB_1);
	$("#bottom-side_R").append(addinp);
}

function dNone (this_){$(this_).css("display", "none");};
function t_t (this_){tx = $(this_).text();}
function input_val (inp_val){
	test_1 = inp_val;
	$("input").each(function(test_1){
		test_1 = $(this).val();
	});	
}

/*---------------------insert data with jQuery----------*/

MW.on("click", "#inception", function(){
		insert_button_L("Выбрать вопрос", insert_li_que);
		insert_button_accept("but_write", "Записать", "#write_butt");
		$("#write_butt").css("display", "inline-block");
		dNone(this);
		$("#client_name").css("margin-right", "0");
	});


MW.on("click", "#que_1", function(){
	t_t(this);
	q_1_ = tx;
	insert_input_que("inp_que_1", tx);
	insert_button_R(tx, insert_li_ans_1);
	dNone(this);
	/*a_rem("#inp_que_1");*/
});

MW.on("click", "#que_2", function(){
	t_t(this);
	insert_input_que("inp_que_2", tx);
	insert_button_R(tx, insert_li_ans_2);
	dNone(this);
});

MW.on("click", "#que_other", function(){
	insert_text_que_other();
	insert_button_accept("but_acc", "Добавить", "#bottom-side_L");
	dNone(this);
});

MW.on("click", "#but_acc", function(){
	insert_text_ans_other_W();
});

MW.on("click", "#ans_11", function(){
	t_t(this);
	insert_input_ans_R("ans_inp_11", tx);
	dNone(this);
});

MW.on("click", "#ans_12", function(){
	t_t(this);
	insert_input_ans_R("ans_inp_12", tx);
	dNone(this);
});

MW.on("click", "#ans_21", function(){
	t_t(this);
	insert_input_ans_R("ans_inp_21", tx);
	dNone(this);
});

MW.on("click", "#que_other", function(){
	dNone(this);
});

/*---------------------Секундомер-------------------------*/


var xt2=0;
var xt3=0;


setInterval(function () {
xt2++;
if(xt2>59) {
xt3++;
xt2=0;
},1000);

if(xt2>9) {
xt=xt2;
} else {
xt="0"+xt2;
}

$("tm1").innerHTML=xt3+": "+xt+"\"";
};
function tm2() {
$("tm2").innerHTML+=$("tm1").innerHTML+" | ";
xt++;
}

});
