
$(document).ready(function() {
  		// initialize valuea
  		var imageList = ["images.jpeg","images-1.jpeg","images-2.jpeg","images-3.jpeg"]
		var minNumber = 1;
		var maxNumber = 12;
		var wonCount = 0;
		var lossCount = 0;

        initVars();

	    $(document).on("click", ".crystal-image", function() {
   
  		     var crystalValue = ($(this).attr("data-crystalvalue"));
   		     
             

             currentScore = currentScore + parseInt(crystalValue);
             if(currentScore > targetScore) {
        	      message = "You Lost!!";
        	      lossCount++;
             }

             if (currentScore == targetScore) {
        	      message = "You Won!!"
        	      wonCount++;
             }

             updateScreen();
 
         })

		function randomNumberFromRange(min,max) {
    		return Math.floor(Math.random()*(max-min+1)+min);    		
		}

		function updateScreen() {
			$("#wonLost").text("Games Won:  "+wonCount);
			$("#wonLost").append("  -  Games Lost: "+lossCount);
			$("#currentScore").text("Current Score  "+currentScore);
			$("#targetScore").text("Target Score:  "+targetScore);
			$("#message").text(message);

		}

        function initVars() {

            crystalValues = [0,0,0,0];
            imageCrystal = [];
            currentScore = 0;
            targetScore = randomNumberFromRange(19, 40);
            message = "";

            x = 0;

            $(".crystal-image").removeClass();
            $("#crystals").empty();

            // get values for crystal - loop will prevent duplicate crysta; values

            while (x < 4) {
                 randomNumber = randomNumberFromRange(1, 12);
                 if($.inArray(randomNumber, crystalValues) == -1) {
                    crystalValues[x] = randomNumber;
                    x++;
                 }
            }

            // add values to the crystals

            for (var i = 0; i < 4; i++) {

                imageCrystal = $("<img>");

                imageCrystal.addClass("crystal-image");

                imageCrystal.attr("src","assets/images/"+imageList[i]);
                imageCrystal.attr("height","100px")
   
                imageCrystal.attr("data-crystalvalue", crystalValues[i]);

                $("#crystals").append(imageCrystal);
           }

           updateScreen();

        }

        $("#reset-button").on("click", function() {
           initVars();
        })
}) //ready
