import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { FeedbackDialogComponent } from './dialogs/feedback-dialog/feedback-dialog.component';

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
    else{
      return;
    }
    
  }
}
