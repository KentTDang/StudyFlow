import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';

const routes: Routes = [
    {
        path: '', component: PomodoroComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SideNavRouterModule { 
}
