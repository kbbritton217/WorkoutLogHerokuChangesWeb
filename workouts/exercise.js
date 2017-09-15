const timerDisplay = document.querySelector('.display__time-left');
		//const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const exDisplay = document.querySelector('.displayEx');
let count;
console.log(count);
let countdown;
let len;


$(function() {
	$.extend(WorkoutLog, {
		time: {

			timer: function(seconds) {
			  // clear any existing timers
			  clearInterval(countdown);

			  const now = Date.now();
			  const then = now + seconds * 1000;
			  WorkoutLog.time.displayTimeLeft(seconds);
			  //displayEndTime(then);

			  countdown = setInterval(function() {
			    const secondsLeft = Math.round((then - Date.now()) / 1000);
			    // check if we should stop it!
			    if(secondsLeft < 0) {
			      clearInterval(countdown);
			      return;
			    }
			    // display it
			    WorkoutLog.time.displayTimeLeft(secondsLeft);
			  }, 1000);
			},

			displayTimeLeft: function(seconds) {
			  const minutes = Math.floor(seconds / 60);
			  const remainderSeconds = seconds % 60;
			  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
			  document.title = display;
			  timerDisplay.textContent = display;
			},

			displayEndTime: function(timestamp) {
			  const end = new Date(timestamp);
			  const hour = end.getHours();
			  const adjustedHour = hour > 12 ? hour - 12 : hour;
			  const minutes = end.getMinutes();
			  //endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
			},

			startTimer: function() {
			  const seconds = 180;//parseInt($("#start").dataset.time);
			  WorkoutLog.time.timer(seconds);

			  let count = WorkoutLog.exercise.exercises;
				let len = count.length;
				var lis = "";
				//totalTime = (len * 60);
				//console.log(seconds);
				for (var i = 0; i < len; i++) {
					lis += "<li class='list-group-item'>" +
					count[i] +
					"</li>";
					console.log(timerDisplay.textContent[0]);
					if(timerDisplay.textContent[0] > 1) {
						exDisplay.textContent = "Push Ups";
					} else if (timerDisplay.textContent[0] > 1 && timerDisplay.textContent[0] < 2){
						exDisplay.textContent = "Lunges";
					} else {
						exDisplay.textContent = "Burpees";
					}
					// for (var i = 0; i< lis.length; i++) {
					// 	var c = lis[i];
					// 	console.log(lis[i]);
					// 	//$(".displayEx").text("");
					// 	setTimeout (function() {
					// 		exDisplay.textContent = c;
					// 		setTimeout(function(){
					// 			//$(".displayEx").text("");
					// 		}, 60000)
					// 	}, 180000)
					// }
				}
					
			},


		

			// $("#start").onclick, function() {
			// 	WorkoutLog.time.startTimer()
			// },
			// $(customForm).submit(function(e) {
			//   e.preventDefault();
			//   const mins = this.minutes.value; // connect 51, or 53 to line 85? 
			//   console.log(mins);
			//   timer(mins * 60);
			//   this.reset();
			// }),
		

			setDisplay: function(){
				let count = WorkoutLog.exercise.exercises;
				let len = count.length;
				var lis = "";
				//totalTime = (len * 60);
				//console.log(seconds);
				for (var i = 0; i < len; i++) {
					//$("#currentExercise").show();
					lis += "<li class='list-group-item'>" +
					count[i] +
					"</li>";
				}
				$("#exercise-list").append(lis); // try to get color working
				console.log(lis);
				// for (var i = 0; i< lis.length; i++) {
				// 	setTimeout (function() {
				// 		setTimeout(function(){
				// 			$('lis[i]').addClass("highlight");
				// 		}, 60000).then(function(){
				// 			$('lis[i]').removeClass("highlight");
				// 		})
				// 	}, 180000)
				// }
			},
		},

			// setHighlight: function() {
			// 	let count = WorkoutLog.exercise.exercises;
			// 	var l = count.length;
			// 	//var color = style.("pink");
			// 	for (var i = 0; i< l; i++) {
			// 		setTimeout (function() {
			// 			setTimeout(function(){
			// 				$('lis[i]').addClass("highlight");
			// 			}, 60000)
			// 		}, 180000)
			// 	}
			// }
		//},
		
		});
	$("#start").on('click', function() {
		WorkoutLog.time.startTimer();
		// WorkoutLog.time.setHighlight();
	})
})




















// let countdown;
// const timerDisplay = document.querySelector('.display__time-left');
// const endTime = document.querySelector('.display__end-time');
// const buttons = document.querySelectorAll('[data-time]');

// function timer(seconds) {
//   // clear any existing timers
//   clearInterval(countdown);

//   const now = Date.now();
//   const then = now + seconds * 1000;
//   displayTimeLeft(seconds);
//   displayEndTime(then);

//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);
//     // check if we should stop it!
//     if(secondsLeft < 0) {
//       clearInterval(countdown);
//       return;
//     }
//     // display it
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }

// function displayTimeLeft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
//   document.title = display;
//   timerDisplay.textContent = display;
// }

// function displayEndTime(timestamp) {
//   const end = new Date(timestamp);
//   const hour = end.getHours();
//   const adjustedHour = hour > 12 ? hour - 12 : hour;
//   const minutes = end.getMinutes();
//   endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
// }

// function startTimer() {
//   const seconds = parseInt(this.dataset.time);
//   timer(seconds);
// }

// buttons.forEach(button => button.addEventListener('click', startTimer));
// document.customForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const mins = this.minutes.value; // connect 51, or 53 to line 85? 
//   console.log(mins);
//   timer(mins * 60);
//   this.reset();
// });











// // let countdown;
// // let count;
// // let seconds;

// // const timerDisplay = document.querySelector('.display__time-left');
// // //const endTime = document.querySelector('.display__end-time');
// // const buttons = document.querySelectorAll('[data-time]');

// $(function() {
	
// 	$.extend(WorkoutLog, {

// 		time: {

// 			setDisplay: function(){
// 				var count  = WorkoutLog.exercise.exercises;
// 				var len = count.length;
// 				var lis = "";
// 				//totalTime = (len * 60);
// 				//console.log(seconds);
// 				for (var i = 0; i < len; i++) {
// 					//$("#currentExercise").show();
// 					lis += "<li class='list-group-item'>" +
// 					count[i] +
// 					"</li>";
// 					// console.log(WorkoutLog.exercise.exercises[i]);
// 					// $("#currentExercise h1").text(WorkoutLog.exercise.exercises[i]);
// 					// setTimeout (function () {
// 					// 	$("#currentExercise").text("");
// 					// }, 90000);
// 				}
// 				$("#exercise-list").append(lis);
// 				console.log(countdown);
// 			}
// 		}
// 	})
// })




// // 			displayTimeLeft: function(seconds) {
// // 				count  = WorkoutLog.exercise.exercises.length;
// // 				seconds = (count * 90) +5;
// // 				const minutes = Math.floor(seconds/60); //pulls minutes
// // 				const remainderSeconds = seconds % 60; // pulls seconds
// // 				const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`; //shows consts above(minutes and seconds)
// // 				document.title = display;
// // 				timerDisplay.textContent = display;
// // 			},


// // 			timer: function(seconds) { //function of timer takes in the number of seconds that the timer should be in
// // 				count  = WorkoutLog.exercise.exercises.length;
// // 				seconds = (count * 90) +5;
// // 				const now = Date.now(); //when the timer started
// // 				const then = now + seconds * 1000;
				

// // 				countdown = setInterval(() => { //doesn't start immediately
// // 					const secondsLeft = Math.round((then - Date.now())/1000); //each second of countdown
// // 					if (secondsLeft < 0) {
// // 						clearInterval(countdown); //stops countdown
// // 						return;
// // 					}
// // 					WorkoutLog.time.displayTimeLeft(secondsLeft);//runs each second
// // 				}, 1000);


// // 				clearInterval(countdown); //clears out previously running timer
// // 				 // when the timer will stop
// // 				WorkoutLog.time.displayTimeLeft(seconds); //starts timer immediately
// // 				//displayEndTime(then);
				

// // 			},



// // 			startTimer: function() {
// // 				const seconds = parseInt(this.dataset.time);//pulls seconds attached to buttons dataset
// // 				WorkoutLog.time.timer(seconds);
// // 			},

// // 			//buttons.forEach(button => button.addEventListener('click', startTimer)),
// // 			addListener: function() {
// // 				document.customForm.addEventListener('submit', function(e) { //eventListener for custom entered minutes
// // 					e.preventDefault();
// // 					const mins = this.minutes.value; //gets value of input box
// // 					console.log(mins);
// // 					timer(mins * 60); //? where exercise attaches?	
// // 					this.reset(); // clears input

// // 					})
// // 			}
// // 		}
		


