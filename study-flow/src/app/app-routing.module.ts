import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: '', component: SideNavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
