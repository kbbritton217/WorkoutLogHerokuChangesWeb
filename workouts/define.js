$(function() {
	$.extend(WorkoutLog, {
		exercise: {
			exercises: [],
			 kcals: [],
			 exer: [{name: "Push Ups",
				kcal: 596},
				{name: "Burpees",
				kcal: 563},
				{name: "Crunches",
				kcal: 312},
				{name: "Spiderman Pushups",
				kcal: 715},
				{name: "Lunges",
				kcal: 550},
				{name: "Curtsey Lunges",
				kcal: 550},
				{name: "Plie Squats",
				kcal: 892},
				{name: "Squats",
				kcal: 892},
				{name: "Plank",
				kcal: 228},
				{name: "Wall Sit",
				kcal: 369},
				{name: "Jumping Jacks",
				kcal: 246},
				{name: "Calf Raises",
				kcal: 211},
				{name: "Mountain Climbers",
				kcal: 482},
				{name: "High Knees",
				kcal: 527},
				{name: "Donkey Kicks",
				kcal: 316},
				{name: "Jump Squats",
				kcal: 475},
				{name: "Side Plank Right",
				kcal: 422},
				{name: "Side Plank Left",
				kcal: 422},
				{name: "Lying Tricep Extension",
				kcal: 352},
				{name: "Glute Bridges",
				kcal: 422},
				{name: "Russian Twists",
				kcal: 422},
				{name: "Plank Hip Dips",
				kcal: 316},
				{name: "Fire Hydrants",
				kcal: 422},
				{name: "Bicycle Crunches",
				kcal: 264},
				{name: "Leg Lifts",
				kcal: 281},
				{name: "Lying Side Leg Raise Right",
				kcal: 316},
				{name: "Lying Side Leg Raise Left",
				kcal: 316},
				{name: "Single Leg Deadlift",
				kcal: 450},
				{name: "Butt Kicks",
				kcal: 422},
				{name: "Reverse Lunges",
				kcal: 422},
				{name: "Reverse Crunches",
				kcal: 404},
				{name: "Push Ups with Rotation",
				kcal: 476},
				{name: "Jack-Knifes",
				kcal: 376},
				{name: "Superman",
				kcal: 226},
				{name: "Oblique V-Crunches",
				kcal: 376},
				{name: "Crunch Twists",
				kcal: 257}
				],
			setKcal: function()	{
				var h = WorkoutLog.exercise.exer;
				for (var i = 0; i < h.length; i++) {
				//console.log(exer[i]);
					for (var item in h[i]) {
						var value = h[i][item];
						if (typeof value === "string") {
							var val = value.toLowerCase().split(" ").join("");
							$("#ex-select").append("<option value='" + value + "' id='" + val + "'>" + value + "</option>")
						} else {
							WorkoutLog.exercise.kcals.push(value)
							//console.log('integer')
						}
					}
				} 
			},
			setEx: function() {
				var selected = $("select#ex-select option:checked").val();
				//console.log(selected);
				$("#exerciseList").append("<li class='li_timer'>" + selected + "</li>");
				WorkoutLog.exercise.exercises.push(selected)
			}
		},
		definition: {
			userDefinitions: [],

			create: function() {
				var def= {
					desc: WorkoutLog.exercise.exercises
					//type: $("#def-logtype").val()
				};
				console.log(def.desc);
				//console.log(def.type);
				var postData = {definition: def};

				console.log(postData);

				// var define = $.ajax({
				// 	type: "POST",
				// 	url: WorkoutLog.API_BASE + "definition",
				// 	data: JSON.stringify(postData),
				// 	contentType: "application/json"
				// });
				var define = (function(data) {
					WorkoutLog.definition.userDefinitions.push(data.definition);
					console.log(WorkoutLog.definition.userDefinitions);
					$("#def-description").val("");
					$("#def-logtype").val("");
					$('a[href="#log"]').tab("show");
				});
			},

			fetchAll: function() {
				var fetchDefs = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "definition",
					headers: {
						"authorization": window.localStorage.getItem("sessionToken")
					}
				})
				.done(function(data) {
					WorkoutLog.definition.userDefinitions = data;
				})
				.fail(function(err) {
					console.log(err);
				});
			}
		}
	});
	//bindings
	$("#def-save").on("click", WorkoutLog.definition.create);
	//fetch definitions if we already are authenticated and refreshed

if (window.localStorage.getItem("sessionToken")) {
	WorkoutLog.definition.fetchAll();
}

});