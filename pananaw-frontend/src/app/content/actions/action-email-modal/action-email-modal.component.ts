import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionsComponent } from '../actions.component';
import { ApiService } from 'src/@shared/service/api.service';
import { Status } from 'src/@shared/model/card.model';

@Component({
  selector: 'app-action-email-modal',
  templateUrl: './action-email-modal.component.html',
  styleUrls: ['./action-email-modal.component.css']
})
export class ActionEmailModalComponent implements OnInit {
  emailTemplate = "Please see this posts and take appropriate actions. Thank you!";
  cardUrl = "card";
  emailUrl = "email";

  constructor(
    public dialogRef: MatDialogRef<ActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) {
      
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
    var response;
    const component = this;
    this.apiService.post(this.emailUrl, emailDetails).subscribe(res => {
      response = res.sent;
      console.log(response);
      if(response){
        component.data.checkedCards.forEach(element => {
          element.status = Status.DONE; 
          console.log(element);
          const endPoint = component.apiService.host + component.cardUrl + '/';
          component.apiService.put( (endPoint + element.id ), element).subscribe();
        });
      }
      component.dialogRef.close(response);
    });
    
  }

}
