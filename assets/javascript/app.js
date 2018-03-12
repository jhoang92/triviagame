var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


$(document).ready(function(){
	$("#game").hide();
	$("#end").hide();
    window.scrollTo(0, 500);


	$("#start").on("click", function(){
		$("#begin").hide();
		$("#game").show();
		startCountdown();
		return;
	});


	function countdown(){
		count--;
    	$("#timer").html(count + " Seconds");
			$("#finish").on("click", function(){
            count = 0;
            $("#game").hide();
			return;
			});

			if(count === -1){
				timeUp();
                $("#game").hide();
			}
	}

	function startCountdown(){
		setInterval(countdown, 1000);
	}

	function timeUp(){
		var Q1 = $("input:radio[name='q1']:checked").val();
		var Q2 = $("input:radio[name='q2']:checked").val();
		var Q3 = $("input:radio[name='q3']:checked").val();
        var Q4 = $("input:radio[name='q4']:checked").val();
        var Q5 = $("input:radio[name='q5']:checked").val();
        var Q6 = $("input:radio[name='q6']:checked").val();
        var Q7 = $("input:radio[name='q7']:checked").val();
		
        if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "1000"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Basketball"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "George Washington Carver"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "5"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Will Smith"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "An Offer"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Gotham City"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		// After answers are validated, display the score results
		$("#correct").html(correctCount);
		$("#incorrect").html(wrongCount);
		$("#unanswered").html(unansweredCount);
		$("#end").show();
		window.scrollTo(0, 550);
    }
    console.log(this)
});
