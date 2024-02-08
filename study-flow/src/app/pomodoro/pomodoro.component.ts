import { Component } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {


  ngOnInit() {
    console.log("HIT POMODORO TS")
  }

  startTime() {
    console.log("Start Time Function");
  }

  startBreak() {
    console.log("Start Break Function");
  }

  startLongBreak() {
    console.log("Start Long Break Function");
  }
}