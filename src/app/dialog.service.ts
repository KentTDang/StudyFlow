import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  open(){
    return this.dialog.open(InfoDialogComponent);
  }
}
