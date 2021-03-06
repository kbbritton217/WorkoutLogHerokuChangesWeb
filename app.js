$(function(){

	var WorkoutLog = (function($, undefined){
		var API_BASE = "https://log-hiit-workouts-api.herokuapp.com/api/";
		//"http://localhost:3000/api/";
		//"https://log-hiit-workouts-api.herokuapp.com/api/";
		var userDefinitions = [];

		var setAuthHeader = function(sessionToken) {
			window.localStorage.setItem("sessionToken", sessionToken);
			//Set the authorization header
			//This can be done on individual calls
			//here we showcase ajaxSetup as a global tool
			$.ajaxSetup({
				"headers": {
					"Authorization": sessionToken
				}
			});
		};

		//public
		return {
			API_BASE: API_BASE,
			setAuthHeader: setAuthHeader
		};

	})(jQuery);

	//Ensure .disabled aren't clickable
	$(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
		var token = window.localStorage.getItem("sessionToken");
		if ($(this).hasClass("disabled") && !token) {
			e.preventDefault();
			return false;
		}
	});
	//bind tab change events
	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
		var target = $(e.target).attr("href"); //activated tab
		if (target === "#define") {
			WorkoutLog.exercise.setKcal();
		}
		if (target === "#log") {
			WorkoutLog.time.setDisplay();
			//WorkoutLog.time.timer();
			//console.log(WorkoutLog.time.timer);
		}

		if (target === "#history") {
			WorkoutLog.log.setHistory();
		}
	});
	// bind enter key
	$(document).on("keypress", function(e) {
		if (e.which === 13) { // enter key
			if ($("#signup-modal").is(":visible")) {
				$("#signup").trigger("click");
			}
			if ($("#login-modal").is("visible")) {
				$("#login").trigger("click");
			}
		}
	});
	$("#add").on('click', function() {
		WorkoutLog.exercise.setEx();
		//console.log("Add button working");
	});
	$("#def-save").on('click', function() {
		$('a[href="#log"]').tab("show");
		// WorkoutLog.time.timer();
		// WorkoutLog.time.setDisplay();
		
	});
	// 
	//bind tab change events
	//bootstrap tab --> binding to a bootstrap event
	$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
		var target = $(e.target).attr("href"); // activated tab
		if (target === "#log") {
			// WorkoutLog.time.setDisplay();
			// WorkoutLog.time.timer();
		}
		if (target === "#update-log") {
			WorkoutLog.log.setDefinitions();
		}
		if(target === "#history") {
			WorkoutLog.log.setHistory();
		}
	});
	var token = window.localStorage.getItem("sessionToken");
	if(token) {
		WorkoutLog.setAuthHeader(token);
	}

	// expose this to the other workoutlog modules
	window.WorkoutLog = WorkoutLog;
});

