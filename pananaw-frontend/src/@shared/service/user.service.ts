import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<any[]>;
  userCollection: AngularFirestoreCollection<UserModel>;
  userDoc: AngularFirestoreDocument<UserModel>;

  constructor(private db: AngularFirestore) {
    this.userCollection = this.db.collection<UserModel>('users');
  }

  getAllUsers() {
    return this.userCollection.valueChanges();
  }

}
