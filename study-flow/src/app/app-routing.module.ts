import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  // { path: '', component: PomodoroComponent},
  { path: '', loadChildren: () => import('./side-nav/side-nav.router.module').then(x => x.SideNavRouterModule)},
  { path: 'study-flow', loadChildren: () => import('./side-nav/side-nav.router.module').then(x => x.SideNavRouterModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//parent module for routing, base