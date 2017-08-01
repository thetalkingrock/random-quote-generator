$(document).ready(function(){
	
	var state = true;
	$("button").on("click", function () {
		if(state){
			state = !state;
			//get random number between 1 and 10
			var randNum = Math.floor((Math.random() * 10)) + 1;
			var color = "";
			//select color
			switch (randNum) {
				case 1:
					color = "FF4136";
					break;
				case 2:
					color = "FF851B";
					break;
				case 3:
					color = "0074D9";
					break;
				case 4:
					color = "7FDBFF";
					break;
				case 5:
					color = "2ECC40";
					break;
				case 6:
					color = "#00FFAA";
					break;
				case 7:
					color = "rgb(251, 105, 100)";
					break;
				case 8:
					color = "rgb(44, 62, 80)";
					break;
				case 9:
					color = "rgb(243, 156, 18)";
					break;
				case 10:
					color = "rgb(22, 160, 133)";
					break;									
				default:
					break;
			}
			//set colors
			$(".color-change-background").animate({
				backgroundColor: color,
			}, 1000);
			$(".color-change").animate({
				color: color,
			}, 1000);
		}
		state = !state;
	})
});