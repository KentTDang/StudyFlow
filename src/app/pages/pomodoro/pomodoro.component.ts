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

    this.isTimerActive = true;

    this.seconds = 59;
    this.minutes--;

    let timerFunction = () => {
      if (this.isTimerActive) {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(timeIntervalId);
            return;
          }
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      } else {
        clearInterval(timeIntervalId);
        console.log("Timer stopped");
      }
    }

    var timeIntervalId = setInterval(timerFunction, 1000);

  }

  startWorkTime() {
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