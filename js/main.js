/***********trackbar в фильтре***********/
jQuery(document).ready(function(){

jQuery("#trackbar").slider({
	min: 0,
	max: 1000,
	values: [0,200],
	step: 1,
	range: true,
	animate: true,
	stop: function(event, ui) {
		/*x1=jQuery("input#minCost").val();
		x2=jQuery("input#maxCost").val();
		x1_1=ui.values[0];
		x2_1=ui.values[1];
if (x1<x1_1) {width_down((x1_1-x1)*0.0079)};
if (x1>x1_1) {width_up((x1-x1_1)*0.008)};
if (x2<x2_1) {width_up((x2_1-x2)*0.008)};
if (x2>x2_1) {width_down((x2-x2_1)*0.0079)};	*/

    },
    slide: function(event, ui){
		x1=jQuery("input#minCost").val();
		x2=jQuery("input#maxCost").val();
		jQuery("input#minCost").val(jQuery("#trackbar").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#trackbar").slider("values",1));
		x1_1=ui.values[0];
		x2_1=ui.values[1];
/*		if (x1<x1_1) {width_down((x1_1-x1)*0.0079)};
if (x1>x1_1) {width_up((x1-x1_1)*0.008)};*/
if (x2<x2_1) {width_up((x2_1-x2)*0.008)};
if (x2>x2_1) {width_down((x2-x2_1)*0.0079)};	
    },
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	alert(value1);

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#trackbar").slider("values",0,value1);	
});
	
jQuery("input#maxCost").change(function(){
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#trackbar").slider("values",1,value2);
});

// фильтрация ввода в поля
	jQuery('.formCost input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
});
/*********(trackbar в фильтре)*********/
