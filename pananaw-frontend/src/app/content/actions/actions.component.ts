import { Component, OnInit } from '@angular/core';
import { CardModel, Status, Sentiment } from './../../../@shared/model/card.model'
import { MatListOption, MatDialog } from '@angular/material';
import { ActionModalComponent } from './action-modal/action-modal.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  cardList: CardModel[] = [
      {
        id: '1',
        content: 'Sample Content of CardJAKKJAKJDJDLGW;fdd fsfsfksfwfwkjhjwkh fdsffkjhsafsah fsafk hsafiasfsafjshfhsafusfk safkhsfafsaff',
        sentiment: Sentiment.GOOD,
        source: 'Twitter',
        link: 'some link',
        status: Status.NEW,
        yearPosted: 2019,
        monthPosted: 1,
        dayPosted: 11,
        hourPosted: 4,	
        minutesPosted: 12
      },
      {
        id: '2',
        content: 'Sample Content of Card 2',
        sentiment: Sentiment.GOOD,
        source: 'Twitter',
        link: 'some link',
        status: Status.NEW,
        yearPosted: 2019,
        monthPosted: 1,
        dayPosted: 11,
        hourPosted: 4,	
        minutesPosted: 12
      },
      {
        id: '3',
        content: 'Sample Content of Card 3',
        sentiment: Sentiment.GOOD,
        source: 'Twitter',
        link: 'some link',
        status: Status.NEW,
        yearPosted: 2019,
        monthPosted: 1,
        dayPosted: 11,
        hourPosted: 4,	
        minutesPosted: 12
      },
      {
        id: '4',
        content: 'Sample Content of Card 4',
        sentiment: Sentiment.GOOD,
        source: 'Twitter',
        link: 'some link',
        status: Status.NEW,
        yearPosted: 2019,
        monthPosted: 1,
        dayPosted: 11,
        hourPosted: 4,	
        minutesPosted: 12
      },
      {
        id: '5',
        content: 'Sample Content of Card 5',
        sentiment: Sentiment.GOOD,
        source: 'Twitter',
        link: 'some link',
        status: Status.NEW,
        yearPosted: 2019,
        monthPosted: 1,
        dayPosted: 11,
        hourPosted: 4,	
        minutesPosted: 12
      }
  ]


  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
    
  }

  onGroupsChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    // console.log(options.map(o => o.value));
    if(options.length ==1) {
      // TODO modal that displays info
      this.showCardDetails(options.pop().value);
    }
  }

  setCardChecked(card){
    card.checked = ! card.checked;
  }

  showCardDetails(cardDetails: any){
    console.log(cardDetails);
    this.openDialog(cardDetails);
  }

  getCheckedItems(cardList: any){
    console.log(cardList);
  }

  openDialog(card): void {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '250px',
      data: {content: card.content}
    });
  }


}
