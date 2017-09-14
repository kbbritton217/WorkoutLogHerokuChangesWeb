$(function(){
	$.extend(WorkoutLog, {
		//signup method
		signup: function(){
			var username = $("#su_username").val();
			var password = $("#su_password").val();
			if (username === "" || password === "") {
				$("#su_error").text("Please enter a username and password").show();
			} else {
				var user = {user: { username: username, password: password }};
				//signup post
				var signup =$.ajax({
					type: "POST",
					url: WorkoutLog.API_BASE + "user",
					data: JSON.stringify(user),
					contentType: "application/json"
				});
				//signup done/fail
				signup
				.done(function(data){ // data is the response from line 21 from routes/user.js
					if(data.sessionToken){
						WorkoutLog.setAuthHeader(data.sessionToken);
						//WorkoutLog.exercise.create();
						// WorkoutLog.definition.fetchAll();
						// WorkoutLog.log.fetchAll();
						// console.log("You made it!");
						// console.log(data.sessionToken);
					}
					$("#signup-modal").modal("hide");
					$(".disabled").removeClass("disabled");
					$("#loginout").text("Logout");
					// console.log("Great job signing up!")
					$('.nav-tabs a[href="#define"]').tab('show');
					
					$("#su_username").val("");
					$("#su_password").val("");
					//$('a[href="#define"]').tab('show');
				})
				.fail(function(){
					$("#su_error").text("There was an issue with sign up").show();
				});
			}
		},
		//login method
		login: function() {
			//login variables
			var username = $("#li_username").val();
			var password = $("#li_password").val();
			if (username === "" || password === "") {
				$("#li_error").text("Please enter a username and password").show();
			} else {
				var user = {user: { username: username, password: password }};
				//login POST
				var login = $.ajax({
					type: "POST",
					url: WorkoutLog.API_BASE + "login",
					data: JSON.stringify(user),
					contentType: "application/json"
				});
				//login done/fail
				login
				.done(function(data) { //data is the response from line 20 in server-routes/user.js
					if (data.sessionToken) {
						WorkoutLog.setAuthHeader(data.sessionToken);
						WorkoutLog.exercise.setKcal();
						// WorkoutLog.definition.fetchAll();
						// WorkoutLog.log.fetchAll();
						//console.log(data.sessionToken);
					}
					
					$("#login-modal").modal("hide");
					$(".disabled").removeClass("disabled");
					$("#loginout").text("Logout");
					$("#li_username").val("");
					$("#li_password").val("");
					$('a[href="#define"]').tab("show");
				})
				.fail(function() {
					$("#li_error").text("There was an issue with sign up").show();
				});
			}
		},

		//loginout method
		loginout: function(){
			if(window.localStorage.getItem("sessionToken")) {
				window.localStorage.removeItem("sessionToken");
				$(".enable").addClass("disabled");
				$("#loginout").text("Login");
				$('a[href="#home"]').tab("show");
			}
		}
		
	});

	//bind events
	$("#login").on("click", WorkoutLog.login);
	$("#signup").on("click", WorkoutLog.signup);
	$("#loginout").on("click", WorkoutLog.loginout);

	if (window.localStorage.getItem("sessionToken")) {
		$("#loginout").text("Logout");
	}
});