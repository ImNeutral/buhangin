import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CardModel } from '../model/card.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Observable<any[]>;
  userCollection: AngularFirestoreCollection<UserModel>;
  cardDoc: AngularFirestoreDocument<UserModel>;

  constructor(private db: AngularFirestore) {
    this.userCollection = this.db.collection<UserModel>('users');
  }

  getAllCards() {
    return this.userCollection.valueChanges();
  }

}

