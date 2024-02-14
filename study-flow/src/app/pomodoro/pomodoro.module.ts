import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro.component';

const routes: Routes = [
  {path: '', component: PomodoroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PomodoroModule { }
