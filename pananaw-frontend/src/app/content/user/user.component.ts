import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/@shared/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel = {
    uid: "123456",
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    handler: "@SM",
    contact: [
      "janedoe@gmail.com",
      "brendanshowalter@gmail.com"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
