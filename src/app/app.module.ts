import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroComponent } from './pages/pomodoro/pomodoro.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog'; 
import { InfoDialogComponent } from './pages/info-dialog/info-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    SideNavComponent,
    ToDoComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule, 
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
