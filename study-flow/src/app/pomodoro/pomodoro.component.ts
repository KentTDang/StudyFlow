import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {

  workTime: number = 25;
  seconds: number = 0;

  isTimerActive: boolean = false;
  


  ngOnInit() {
    console.log("HIT POMODORO TS");

  }

  startTime() {
    console.log("Start Time Function");

    this.isTimerActive = true;
    this.seconds = 59;

    let currentMinutes = this.workTime - 1;
    let currentSeconds = this.seconds;

    let timerFunction = () => {
      console.log(currentMinutes + ":" + currentSeconds);
      console.log("Active Status: " + this.isTimerActive);

      if (this.isTimerActive) {
        currentSeconds = currentSeconds - 1;
        if (currentSeconds < 0) {
          currentMinutes = currentMinutes - 1;
          currentSeconds = 59;
          if (currentMinutes < 0) {
            clearInterval(timeIntervalId);
          }
        }
      } else {
        // If the Timer is not active, Reset the time
        clearInterval(timeIntervalId);
        console.log("Else statement in pomo HIT")
      }
    }

    var timeIntervalId = setInterval(timerFunction, 1000);

  }

  startWorkTime(){
    this.isTimerActive = false;
    this.workTime = 25;
  }

  startBreak() {
    this.isTimerActive = false;
    this.workTime = 5;
  }

  startLongBreak() {
    this.isTimerActive = false;
    this.workTime = 10;
  }
}