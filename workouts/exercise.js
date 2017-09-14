let countdown;
let count;
let seconds;

const timerDisplay = document.querySelector('.display__time-left');
//const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

$(function() {
	$.extend(WorkoutLog, {
		time: {

			setDisplay: function(){
				count  = WorkoutLog.exercise.exercises.length;
				seconds = (count * 90) +5;
				console.log(seconds);
				for (var i = 0; i < count; i++) {
					$("#currentExercise").show();
					console.log(WorkoutLog.exercise.exercises[i]);
					$("#currentExercise h1").text(WorkoutLog.exercise.exercises[i]);
					setTimeout (function () {
						$("#currentExercise").text("");
					}, 90000);
				}
			},

			displayTimeLeft: function(seconds) {
				count  = WorkoutLog.exercise.exercises.length;
				seconds = (count * 90) +5;
				const minutes = Math.floor(seconds/60); //pulls minutes
				const remainderSeconds = seconds % 60; // pulls seconds
				const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`; //shows consts above(minutes and seconds)
				document.title = display;
				timerDisplay.textContent = display;
			},


			timer: function(seconds) { //function of timer takes in the number of seconds that the timer should be in
				count  = WorkoutLog.exercise.exercises.length;
				seconds = (count * 90) +5;
				const now = Date.now(); //when the timer started
				const then = now + seconds * 1000;
				
				countdown = setInterval(() => { //doesn't start immediately
					const secondsLeft = Math.round((then - Date.now())/1000); //each second of countdown
					if (secondsLeft < 0) {
						clearInterval(countdown); //stops countdown
						return;
					}
					WorkoutLog.time.displayTimeLeft(secondsLeft);//runs each second
				}, 1000);


				clearInterval(countdown); //clears out previously running timer
				 // when the timer will stop
				WorkoutLog.time.displayTimeLeft(seconds); //starts timer immediately
				//displayEndTime(then);
				

			},


			// function displayEndTime(timestamp){
			// 	const end = new Date(timestamp);
			// 	const hour = end.getHours();
			// 	const minutes = end.getMinutes();
			// 	endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
			// }

			startTimer: function() {
				const seconds = parseInt(this.dataset.time);//pulls seconds attached to buttons dataset
				WorkoutLog.time.timer(seconds);
			},

			//buttons.forEach(button => button.addEventListener('click', startTimer)),
			addListener: function() {
				document.customForm.addEventListener('submit', function(e) { //eventListener for custom entered minutes
					e.preventDefault();
					const mins = this.minutes.value; //gets value of input box
					console.log(mins);
					timer(mins * 60); //? where exercise attaches?	
					this.reset(); // clears input

					})
			}
		}
		
	})
})


