import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionsComponent } from '../actions.component';

@Component({
  selector: 'app-action-email-modal',
  templateUrl: './action-email-modal.component.html',
  styleUrls: ['./action-email-modal.component.css']
})
export class ActionEmailModalComponent implements OnInit {
  emailTemplate = "Please see this posts and take appropriate actions. Thank you!";

  constructor(
    public dialogRef: MatDialogRef<ActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }

  ngOnInit() {
    this.data.checkedCards.forEach(element => {
      this.emailTemplate = this.emailTemplate + '\n' + element.link;
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  sendEmail(receiver){
    // TODO call API for sendEmail, build object, update status ng cards
    var emailDetails = {
      'sender': this.data.senderDetails.email,
      'receiver': receiver,
      'title': 'Re: Twitter Feedback',
      'content': this.emailTemplate
    }
    console.log(emailDetails);
    this.dialogRef.close();
  }

}
