import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Rank } from '../model/rank.model';

@Injectable({
    providedIn: 'root'
})
export class RankService {

    ranks: Observable<any[]>;
    rankCollection: AngularFirestoreCollection<Rank>;
    rankDoc: AngularFirestoreDocument<Rank>;

    constructor(private db: AngularFirestore) {
      this.rankCollection = this.db.collection<Rank>('ranks');
    }

    findRanks() {
        const date = new Date();
        return this.db.collection<Rank>('ranks', ref => ref
            .where('month', '==', date.getMonth() + 1)
            .where('year', '==', date.getFullYear())).valueChanges();
    }
}
