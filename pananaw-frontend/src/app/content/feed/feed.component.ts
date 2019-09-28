import { Component, OnInit } from '@angular/core';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './../../../@shared/model/keyframes';
import { CardModel, Sentiment, Status } from 'src/@shared/model/card.model';
import { MatSnackBar } from '@angular/material';
import { CardService } from 'src/@shared/service/card.service';
import { ApiService } from 'src/@shared/service/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft)))
    ])
  ]
})

export class FeedComponent implements OnInit {
  cardUrl = "card";
  animationState: string;
  
  cards : CardModel[] = [];
  cardsView : CardModel[] = [];
  limitCardsPerView = 10;
  

  constructor(private _snackBar: MatSnackBar,
              private cardService: CardService,
              private apiService: ApiService) {
    this.cardService.getAllNewCards().subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnInit() {
  }

  startAnimation(state, card) {
    var topCard = this.cards[this.cards.length - 1];
    if (!this.animationState && topCard.id == card.id) {
      // set animation state
      this.animationState = state;
      // wailt 1 second before removing the element
      setTimeout(() => 
        {
          this.cards.pop();
          if(state == "slideOutLeft") {
            card.status = Status.ARCHIVED;
            this.openSnackBar("Item Archived!", "", "green");
          } else {
            card.status = Status.PENDING;
            this.openSnackBar("Marked as needs action.", "", "red");
          }
          this.apiService.put( (this.cardUrl + "/" + card.id ), card);
        },
        1000);
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  setCustomClass(senti) {
    var customClass = "green";
    if( Sentiment.BAD == senti ) {
      customClass = "red";
    }
    customClass += " shadow"
    return customClass;
  }

  ifTop(card) {
    var topCard = this.cards[this.cards.length - 1];
    var isTop = false;
    if(card.id == topCard.id) {
      isTop = true;
    }
    return isTop;
  }

  openSnackBar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      duration: 1500,
      verticalPosition: "top",
      panelClass: panelClass
    });
  }

}
