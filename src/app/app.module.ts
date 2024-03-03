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
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { FeedbackDialogComponent } from './dialogs/feedback-dialog/feedback-dialog.component';
import { AboutDialogComponent } from './dialogs/about-dialog/about-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    SideNavComponent,
    ToDoComponent,
    InfoDialogComponent,
    FeedbackDialogComponent,
    AboutDialogComponent
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
