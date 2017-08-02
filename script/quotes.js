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
					color = "#FF4136";
					break;
				case 2:
					color = "#FF851B";
					break;
				case 3:
					color = "#0074D9";
					break;
				case 4:
					color = "#7FDBFF";
					break;
				case 5:
					color = "rgb(189, 187, 153)";
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
			//choose another random number for quote
			randNum = Math.floor((Math.random() * 10)) + 1;
			var quote = "";
			var name = "";
			
			switch(randNum){
				case 1:
					quote = "When you reach the end of your rope, tie a knot in it and hang on.";
					name = "Franklin D. Roosevelt";
					break;
				case 2:
					quote = "Learning never exhausts the mind.";
					name = "Leonardo da Vinci";
					break;
				case 3:
					quote = "The supreme art of war is to subdue the enemy without fighting.";
					name = "Sun Tzu";
					break;
				case 4:
					quote = "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.";
					name = "Samuel Beckett";
					break;
				case 5:
					quote = "The only true wisdom is in knowing you know nothing.";
					name = "Socrates";
					break;
				case 6:
					quote = "In three words I can sum up everything I've learned about life: it goes on.";
					name = "Robert Frost";
					break;
				case 7:
					quote = "This too, shall pass.";
					name = "Anonymous";
				case 8:
					quote = "Tension is who you think you should be. Relaxation is who you are.";
					name = "Chinese Proverb";
					break;
				case 9: 
					quote = "Where's your will to be weird?";
					name = "Jim Morrison";
					break;
				case 10:
					quote = "To find yourself, think for yourself.";
					name = "Socrates";
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