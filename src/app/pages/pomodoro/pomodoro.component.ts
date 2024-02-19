import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {

  minutes: number = 25;
  seconds: number = 0;

  isTimerActive: boolean = false;
  


  ngOnInit() {
    console.log("HIT POMODORO TS");

  }

  startTime() {
    console.log("Start Time Function");

    this.isTimerActive = true;
    this.seconds = 59;
    this.minutes = this.minutes -1;


    let timerFunction = () => {
      // console.log(currentMinutes + ":" + currentSeconds);
      // console.log("Active Status: " + this.isTimerActive);

      if (this.isTimerActive) {
        this.seconds = this.seconds - 1;
        if (this.seconds < 0) {
          this.minutes = this.minutes - 1;
          this.seconds = 59;
          if (this.minutes < 0) {
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
    this.minutes = 1;
    this.seconds = 0;
  }

  startBreak() {
    this.isTimerActive = false;
    this.minutes = 5;
    this.seconds = 0;
  }

  startLongBreak() {
    this.isTimerActive = false;
    this.minutes = 10;
    this.seconds = 0;
  }
}