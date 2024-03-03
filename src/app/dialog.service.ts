import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { FeedbackDialogComponent } from './dialogs/feedback-dialog/feedback-dialog.component';
import { AboutDialogComponent } from './dialogs/about-dialog/about-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  open(dialogComponent : string) {
    if(dialogComponent == "info"){
      return this.dialog.open(InfoDialogComponent);
    }
    else if(dialogComponent == "feedback"){
      return this.dialog.open(FeedbackDialogComponent);
    }
    else if(dialogComponent == "about-me"){
      return this.dialog.open(AboutDialogComponent);
    }
    else {
      return;
    }
    
  }
}
