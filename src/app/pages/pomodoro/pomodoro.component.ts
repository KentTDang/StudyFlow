import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';
import { DialogService } from 'src/app/services/dialog-services/dialog.service';
import { Title } from '@angular/platform-browser';

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

  resetMinutesTo: number = 25;
  resetSecondsTo: number = 0;


  ngOnInit() {
    console.log("HIT POMODORO TS");
    this.selectedBtnValue = 'work';

  }

  constructor(private infoDialog: DialogService, private fbDialog: DialogService, private titleService: Title) {}

  onSelectedBtnValueChange(val: string) {
    this.selectedBtnValue = val;
  }

  updateTitle(minutes: number, seconds: number): void {
    this.titleService.setTitle(`(${minutes}:${seconds < 10 ? '0' + seconds : seconds}) - Pomodoro Timer`);
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
        this.updateTitle(this.minutes, this.seconds);
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
    this.setResetTime(25 , 0);
    this.updateTitle(this.minutes, this.seconds);
  }

  startBreak() {
    this.isTimerActive = false;
    this.minutes = 5;
    this.seconds = 0;
    this.setResetTime(5 , 0);
    this.updateTitle(this.minutes, this.seconds);

  }

  startLongBreak() {
    this.isTimerActive = false;
    this.minutes = 10;
    this.seconds = 0;
    this.setResetTime(10 , 0);
    this.updateTitle(this.minutes, this.seconds);

  }

  restartTime() {
    clearInterval(this.timeIntervalId);
    this.isTimerActive = false;
    this.minutes = this.resetMinutesTo;
    this.seconds = this.resetSecondsTo;
    this.updateTitle(this.minutes, this.seconds);

  }

  setResetTime(min : number, sec : number) {
    this.resetMinutesTo = min;
    this.resetSecondsTo = sec;
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

  aboutDialog() {
    var ref = this.fbDialog.open("about-me");
  }
}