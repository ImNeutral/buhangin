import { Component, OnInit } from '@angular/core';
import { CardModel, Status, Sentiment } from './../../../@shared/model/card.model'
import { MatListOption, MatDialog, MatSnackBar } from '@angular/material';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { element } from 'protractor';
import { UserModel } from 'src/@shared/model/user.model';
import { ActionEmailModalComponent } from './action-email-modal/action-email-modal.component';
import { CardService } from 'src/@shared/service/card.service';
import { ApiService } from 'src/@shared/service/api.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  cardList : CardModel[] = [];
  currentUser: UserModel = {
    uid: '3',
    name: 'John Gokongwei',
    email: 'john@gmail.com',
    handler: '@Robinsons',
    contact: ['bea@mailinator.com', 'maria@mailinator.com']
  }


  constructor(public dialog: MatDialog,
              private cardService: CardService,
              private _snackBar: MatSnackBar,) { 
    this.cardService.getAllPendingCards().subscribe(cards => {
      this.cardList = cards;
    });
  }

  ngOnInit() {
    
  }

  onGroupsChange(options: MatListOption[]) {
    if(options.length ==1) {
      this.showCardDetails(options.pop().value);
    }
  }

  setCardChecked(card){
    card.checked = !card.checked;
  }

  showCardDetails(cardDetails: any){
    console.log(cardDetails);
    this.openDialog(cardDetails);
  }

  getCheckedItems(cardList){
    console.log(cardList);
    let checkedCards = [];
    cardList.forEach(function(element){
      if(element.checked){
        checkedCards.push(element);
      }
    });
    this.sendEmail(checkedCards);
  }

  sendEmail(checkedCards){
    const dialogRef = this.dialog.open(ActionEmailModalComponent, {
      width: '250px',
      data: {senderDetails: this.currentUser, 
        checkedCards: checkedCards
      }
    }).updateSize("500px");

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.openSnackBar("Email Sent.", "");
    });

    this.cardList.forEach(function(element){
      if(checkedCards.includes(element)){
        this.cardList.pop(); 
      }
    });
  }


  openDialog(card): void {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '250px',
      data: {content: card.content}
    });
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1500,
      verticalPosition: "top"
    });
  }


}
