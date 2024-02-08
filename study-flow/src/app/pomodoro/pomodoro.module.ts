import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PomodoroModule { 

  workTime:number = 25;
  seconds: number = 0;
  isTimerActive: boolean = false;

  startTimer() {
    
  }
}
