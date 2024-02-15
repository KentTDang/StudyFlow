import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { SideNavComponent } from './side-nav.component';

const routes: Routes = [
    {
        path: '', component: SideNavComponent,
        children: [
            {path: '', loadChildren: () => import('../pomodoro/pomodoro.module').then(x => x.PomodoroModule)},
            {path: 'pomodoro', loadChildren: () => import('../pomodoro/pomodoro.module').then(x => x.PomodoroModule)},
            {path: 'to-do', loadChildren: () => import('../to-do/to-do.module').then(x => x.ToDoModule)}
        ]
        

    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SideNavRouterModule { }
