$(document).ready(function(){
	var hourTotal,
	moneyTotal,
	tipRate;
	$('.total-dollars').focus();

	$('.hours').change(function(){
		getHourTotal();
	})

	$('#get-tips').click(function(){
		indieTips();
	})

	function indieTips(){
		getHourTotal();
		indTips = $('.tips');
		indHours = $('.hours');
		indHours.each(function(){
			tiphrs = this.value;
			tipval = (tiphrs*tipRate);
			console.log(tipval);
			span = $(this).parent().next().find('.tips');
			console.log(span)
			span.text(tipval.toFixed(2));
		});
	}

	function getHourTotal(){
		var indHours = 0,
		hourTotal = 0;
		indHours = $('.hours');
		for (var i = 0; i < indHours.length; i++){ 
			if(parseFloat(indHours[i].value) !== 0) {
				hourTotal += parseFloat(indHours[i].value);
			} else {
				continue
			};
			
		};
		console.log(hourTotal);
		$('.total-hours').text(hourTotal.toFixed(2));
		getTipRate(hourTotal);
	};

	function getTipRate(hourTotal){
		moneyTotal = parseFloat($('.total-dollars').val())
		tipRate = moneyTotal/hourTotal;
		console.log(tipRate);
		$('.tip-rate').text(tipRate.toFixed(2));
	};

});
