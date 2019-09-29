import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CardModel } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Observable<any[]>;
  cardCollection: AngularFirestoreCollection<CardModel>;
  cardDoc: AngularFirestoreDocument<CardModel>;

  constructor(private db: AngularFirestore) {
    this.cardCollection = this.db.collection<CardModel>('cards');
  }

  getAllCards() {
    return this.cardCollection.valueChanges();
  }

  getAllCardsSorted() {
    return this.db.collection<CardModel>('cards', ref => ref.orderBy('numMentions', 'asc') ).valueChanges();
  }

  getAllNewCards() {
    return this.db.collection<CardModel>('cards', ref => ref
      .where('status', '==', 'new')
      .orderBy('numMentions', 'asc') ).valueChanges();
  }

  getAllPendingCards() {
    return this.db.collection<CardModel>('cards', ref => ref
      .where('status', '==', 'pending')
      .orderBy('numMentions', 'asc') ).valueChanges();
  }

}

