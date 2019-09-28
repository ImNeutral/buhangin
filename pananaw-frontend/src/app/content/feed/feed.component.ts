import { Component, OnInit } from '@angular/core';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './../../../@shared/model/keyframes';
import { CardModel, Sentiment, Status } from 'src/@shared/model/card.model';
import { MatSnackBar } from '@angular/material';

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
  animationState: string;
  
  cards : CardModel[] = [];

  // card_samples below are sample, delete if real data comes
  card_sample : CardModel = {
    uid: "23124",
    content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
    sentiment: Sentiment.BAD,
    source: "http://hello world",
    link: "link here",
    status: Status.NEW,
    yearPosted: 2019,
    monthPosted: 1,
    dayPosted: 11,
    hourPosted: 4,	
    minutesPosted: 12
  }
  card_sample2 : CardModel = {
    uid: "00000",
    content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
    sentiment: Sentiment.GOOD,
    source: "http://hello world",
    link: "link here",
    status: Status.NEW,
    yearPosted: 2019,
    monthPosted: 1,
    dayPosted: 11,
    hourPosted: 4,	
    minutesPosted: 12
  }
  card_sample3 : CardModel = {
    uid: "99111",
    content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
    sentiment: Sentiment.BAD,
    source: "http://hello world",
    link: "link here",
    status: Status.NEW,
    yearPosted: 2019,
    monthPosted: 1,
    dayPosted: 11,
    hourPosted: 4,	
    minutesPosted: 12
  }
  card_sample4 : CardModel = {
    uid: "34567876",
    content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
    sentiment: Sentiment.GOOD,
    source: "http://hello world",
    link: "link here",
    status: Status.NEW,
    yearPosted: 2019,
    monthPosted: 1,
    dayPosted: 11,
    hourPosted: 4,	
    minutesPosted: 12
  }


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // set cards to fetch 5 at a time only
    this.cards.push(this.card_sample);
    this.cards.push(this.card_sample2);
    this.cards.push(this.card_sample3);
  }

  startAnimation(state, uid) {
    var topCard = this.cards[this.cards.length - 1];
    if (!this.animationState && topCard.uid == uid) {
      // set animation state
      this.animationState = state;
      // wailt 1 second before removing the element
      setTimeout(() => 
        {
          this.cards.pop();  // pop only for testing, mark only card as archive
          if(state == "slideOutLeft") {
            this.openSnackBar("Item Archived!", "", "green");
          } else {
            this.openSnackBar("Marked as needs action.", "", "red");
          }
        },
        1000);
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  setCustomClass(senti, uid) {
    var customClass = "green";
    if( Sentiment.BAD == senti ) {
      customClass = "red";
    }
    customClass += " shadow"
    return customClass;
  }

  ifTop(uid) {
    var topCard = this.cards[this.cards.length - 1];
    var isTop = false;
    if(uid == topCard.uid) {
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
