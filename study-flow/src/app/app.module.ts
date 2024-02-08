import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
