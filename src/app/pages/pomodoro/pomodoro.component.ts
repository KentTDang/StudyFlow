import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {

  minutes: number = 25;
  seconds: number = 0;
  selectedBtnValue: string = '';

  isTimerActive: boolean = false;
  timeIntervalId: any;


  ngOnInit() {
    console.log("HIT POMODORO TS");
    this.selectedBtnValue = 'work';

  }

  constructor(private infoDialog: DialogService, private fbDialog: DialogService) {}

  onSelectedBtnValueChange(val: string) {
    this.selectedBtnValue = val;
  }

  startTime() {
    this.isTimerActive = true;
    this.timeIntervalId = setInterval(() => {
      if (this.isTimerActive) {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.timeIntervalId);
            return;
          }
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      } else {
        clearInterval(this.timeIntervalId);
        console.log("Timer stopped");
      }
    }, 1000);
  }

  startWorkTime() {
    this.isTimerActive = false;
    this.minutes = 25;
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

  restartTime() {
    clearInterval(this.timeIntervalId);
    this.isTimerActive = false;
  }

  PauseTime() {
    clearInterval(this.timeIntervalId);
    this.isTimerActive = false;
  }

  informationDialog() {
    var ref = this.infoDialog.open("info");
  }

  feedbackDialog() {
    var ref = this.fbDialog.open("feedback");
  }
}