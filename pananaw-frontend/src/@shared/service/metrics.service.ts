import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MetricsModel } from '../model/metrics.model';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  cards: Observable<any[]>;
  cardCollection: AngularFirestoreCollection<MetricsModel>;
  cardDoc: AngularFirestoreDocument<MetricsModel>;

  constructor(private db: AngularFirestore) {
    this.cardCollection = this.db.collection<MetricsModel>('metrics');
  }

  getAllMetrics() {
    return this.cardCollection.valueChanges();
  }
}

