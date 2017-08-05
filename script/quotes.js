$(document).ready(function(){
	
	var initalHrefVal = $("#twitter-link").attr("href");
	
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
					color = "rgb(155, 89, 182)";
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
			var tweetText = "";
			
			switch(randNum){
				case 1:
					quote = "When you reach the end of your rope, tie a knot in it and hang on.";
					name = "Franklin D. Roosevelt";
					tweetText = "When%20you%20reach%20the%20end%20of%20your%20rope,%20tie%20a%20knot%20in%20it%20and%20hang%20on.%20Franklin%20D.%20Roosevelt";
					break;
				case 2:
					quote = "Learning never exhausts the mind.";
					name = "Leonardo da Vinci";
					tweetText = "Learning%20never%20exhausts%20the%20mind.%20Leonardo%20da%20Vinci";
					break;
				case 3:
					quote = "The supreme art of war is to subdue the enemy without fighting.";
					name = "Sun Tzu";
					tweetText = "The%20supreme%20art%20of%20war%20is%20to%20subdue%20the%20enemy%20without%20fighting.%20Sun%20Tzu";
					break;
				case 4:
					quote = "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.";
					name = "Samuel Beckett";
					tweetText = "Ever tried.%20Ever failed.%20No matter.%20Try Again.%20Fail again.%20Fail better.%20Samuel%20Beckett";
					break;
				case 5:
					quote = "The only true wisdom is in knowing you know nothing.";
					name = "Socrates";
					tweetText = "The%20only%20true%20wisdom%20is%20in%20knowing%20you%20know%20nothing.%20Socrates";
					break;
				case 6:
					quote = "In three words I can sum up everything I've learned about life: it goes on.";
					name = "Robert Frost";
					tweetText = "In%20three%20words%20I%20can%20sum%20up%20everything%20I've%20learned%20about%20life:%20it%20goes%20on.%20Robert%20Frost";
					break;
				case 7:
					quote = "This too, shall pass.";
					name = "Anonymous";
					tweetText = "This%20too,%20shall%20pass.%20Anonymous";
					break;
				case 8:
					quote = "Tension is who you think you should be. Relaxation is who you are.";
					name = "Chinese Proverb";
					tweetText = "Tension%20is%20who%20you%20think%20you%20should%20be.%20Relaxation%20is%20who%20you%20are.%20Chinese%20Proverb";
					break;
				case 9: 
					quote = "Where's your will to be weird?";
					name = "Jim Morrison";
					tweetText = "Where's%20your%20will%20to%20be%20weird?%20Jim%20Morrison";
					break;
				case 10:
					quote = "To find yourself, think for yourself.";
					name = "Socrates";
					tweetText = "To%20find%20yourself,%20think%20for%20yourself.%20Socrates";
					break;
				default:
					break;					
			}
			/*
			$("#quote", "#name").fadeOut();
			//set colors
			$(".color-change-background").animate({
				backgroundColor: color,
			}, 1000);
			$(".color-change").animate({
				color: color,
			}, 1000, function () {
				$("#quote").text(" " + quote);
				$("#name").text("- " + name);
			});
			*/
			$("#twitter-link").attr("href", initalHrefVal);
			$("#twitter-link").attr("href", $("#twitter-link").attr("href") + tweetText);
			$("#fader").fadeTo(500, 0, function () {
				$(".color-change").animate({
					backgroundColor: color,
					color: color
				}, 500, function () {
					$("#text").text(" " + quote);
					$("#name").text("- " + name);
					$("#fader").fadeTo(500, 1.0);
				});
			});
		}
		state = !state;
	})
});