import { Component } from '@angular/core';
// import { environment } from '../../environment';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent {

  // apiUrl = environment.apiUrl;
  // apiKey = environment.apiKey;

  //currently not working

  apiUrl = 'environment.apiUrl';
  apiKey = 'environment.apiKey';

}
